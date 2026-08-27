import { useEffect, useRef } from "react";

/**
 * A live molten-lava field rendered with a small WebGL fragment shader.
 * Falls back to nothing if WebGL or motion is unavailable.
 */
export function LavaCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false });
    if (!gl) return;

    const vert = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

    const frag = `
precision highp float;
uniform vec2 u_res;
uniform float u_t;
uniform vec2 u_m;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 6; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 q = uv * vec2(u_res.x / u_res.y, 1.0);

  float t = u_t * 0.045;
  vec2 warp = vec2(fbm(q * 2.2 + vec2(t, -t * 0.7)), fbm(q * 2.2 + vec2(5.2 - t, t * 0.9)));
  float f = fbm(q * 3.0 + warp * 1.9 + vec2(0.0, -t * 1.4));

  // pointer heat
  vec2 m = u_m * vec2(u_res.x / u_res.y, 1.0);
  float heat = smoothstep(0.55, 0.0, distance(q, m));

  float crust = smoothstep(0.42, 0.78, f + heat * 0.22);
  float vein = smoothstep(0.52, 0.72, f) * (0.6 + 0.4 * sin(f * 18.0 + u_t * 0.6));

  vec3 rock = vec3(0.055, 0.048, 0.045);
  vec3 ember = vec3(0.95, 0.28, 0.06);
  vec3 hot = vec3(1.0, 0.78, 0.32);

  vec3 col = mix(rock, ember, crust);
  col = mix(col, hot, clamp(vein * crust * 1.25, 0.0, 1.0));
  col += ember * heat * 0.18;

  // vignette so it melts into the page
  float vg = smoothstep(1.15, 0.25, length(uv - 0.5) * 1.6);
  float alpha = clamp(crust * 1.15 + vein * 0.5, 0.0, 1.0) * vg;
  gl_FragColor = vec4(col, alpha * 0.92);
}`;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uT = gl.getUniformLocation(prog, "u_t");
    const uM = gl.getUniformLocation(prog, "u_m");

    const mouse = { x: 0.5, y: 0.6, tx: 0.5, ty: 0.6 };
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = 1 - (e.clientY - r.top) / r.height;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    const resize = () => {
      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    });
    io.observe(canvas);

    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uT, (now - start) / 1000);
      gl.uniform2f(uM, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}

export default LavaCanvas;
