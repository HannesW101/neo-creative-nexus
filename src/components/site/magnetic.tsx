import { useRef, type ReactNode } from "react";

/**
 * Nudges its child toward the pointer, then springs back on leave.
 */
export function Magnetic({
  children,
  strength = 14,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const move = (e: React.PointerEvent<HTMLSpanElement>) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = node.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * strength * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const reset = () => {
    const node = ref.current;
    if (node) node.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <span
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      className={`inline-block transition-transform duration-500 ease-out ${className}`}
    >
      {children}
    </span>
  );
}
