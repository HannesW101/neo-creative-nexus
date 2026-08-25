import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps content in a surface that tracks the pointer with a soft ember
 * light. Purely presentational.
 */
export function Spotlight({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "section";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    node.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as never}
      onMouseMove={onMove}
      className={cn("spotlight", className)}
    >
      {children}
    </Tag>
  );
}
