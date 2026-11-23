"use client";

import { useEffect, useState } from "react";

const COLORS = ["#8f1231", "#620b20", "#c06a78", "#ecc6c3", "#d9b38c", "#a8344f"];

export default function Confetti({ count = 55 }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    setPieces(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        w: 6 + Math.random() * 8,
        h: 8 + Math.random() * 10,
        round: Math.random() > 0.6,
        color: COLORS[i % COLORS.length],
        duration: 6 + Math.random() * 6,
        delay: -Math.random() * 12,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 animate-confetti"
          style={{
            left: `${p.left}%`,
            width: p.w,
            height: p.round ? p.w : p.h,
            borderRadius: p.round ? "9999px" : "2px",
            background: p.color,
            opacity: 0.85,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
