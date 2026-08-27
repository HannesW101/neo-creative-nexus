import type { CSSProperties } from "react";

/**
 * Splits a line into words that wipe upward one after another on load.
 */
export function SplitLine({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={`split-line ${className}`}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="split-word">
          <span
            className="split-inner"
            style={{ animationDelay: `${delay + i * 0.07}s` } as CSSProperties}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}
