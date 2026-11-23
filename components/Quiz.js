"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { QUESTIONS } from "@/lib/config";
import { Badge, Eyebrow, Divider, HeartIcon } from "./UI";

export default function Quiz({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState(null); // {x, y}: the button flies around the screen
  const [message, setMessage] = useState("");
  const [shake, setShake] = useState(false);
  const noRef = useRef(null);

  const q = QUESTIONS[index];

  useEffect(() => {
    setNoCount(0);
    setNoPos(null);
    setMessage("");
  }, [index]);

  const dodge = useCallback(() => {
    const btn = noRef.current;
    const w = btn ? btn.offsetWidth : 100;
    const h = btn ? btn.offsetHeight : 48;
    const pad = 12;
    const maxX = Math.max(pad, window.innerWidth - w - pad);
    const maxY = Math.max(pad, window.innerHeight - h - pad);

    const next = noCount + 1;
    setNoCount(next);
    setNoPos({
      x: pad + Math.random() * (maxX - pad),
      y: pad + Math.random() * (maxY - pad),
    });
    // a new message every single time
    setMessage(q.noMessages[(next - 1) % q.noMessages.length]);
    setShake(true);
    setTimeout(() => setShake(false), 350);
  }, [noCount, q]);

  const handleYes = () => {
    if (index + 1 < QUESTIONS.length) setIndex(index + 1);
    else onFinish();
  };

  // "Yes" grows a little every time she tries to say no
  const yesScale = 1 + Math.min(noCount * 0.06, 0.6);

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-16">
      <div className={`paper-card mt-8 w-full max-w-xl px-6 pb-12 pt-16 text-center sm:px-12 ${shake ? "animate-shake" : ""}`}>
        <Badge />
        <Eyebrow>
          Question {index + 1} of {QUESTIONS.length}
        </Eyebrow>

        {/* progress hearts */}
        <div className="mt-4 flex justify-center gap-2">
          {QUESTIONS.map((_, i) => (
            <HeartIcon
              key={i}
              className={`h-3.5 w-3.5 transition-colors duration-500 ${i <= index ? "text-wine-700" : "text-wine-200"}`}
            />
          ))}
        </div>

        <div key={q.id} className="mt-8 animate-fadeUp">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-wine-900 sm:text-5xl">{q.text}</h2>
          <Divider className="mt-6" />
        </div>

        <div className="mt-9 flex min-h-[76px] items-center justify-center gap-4">
          <button
            onClick={handleYes}
            style={{ transform: `scale(${yesScale})`, transition: "transform .25s ease" }}
            className="btn-primary !px-9"
          >
            {q.yesLabel}
          </button>

          <div className="relative">
            {/* keeps the layout stable once the No button flies away */}
            {noPos && <span className="btn-ghost invisible">{q.noLabel}</span>}
            <button
              ref={noRef}
              onMouseEnter={dodge}
              onTouchStart={(e) => {
                e.preventDefault();
                dodge();
              }}
              onClick={dodge}
              style={
                noPos
                  ? { position: "fixed", left: noPos.x, top: noPos.y, transition: "left .25s ease, top .25s ease" }
                  : undefined
              }
              className="btn-ghost z-50"
            >
              {q.noLabel}
            </button>
          </div>
        </div>

        <div className="mt-7 min-h-[3.5rem]">
          {message && (
            <p
              key={message}
              className="mx-auto inline-block max-w-sm animate-fadeUp rounded-2xl bg-white/60 px-5 py-3 text-base italic text-wine-700 ring-1 ring-wine-200"
            >
              {message}
            </p>
          )}
        </div>

        {noCount >= 3 && (
          <p className="text-xs uppercase tracking-[0.25em] text-wine-400">You&apos;ve tried {noCount} times already</p>
        )}
      </div>
    </div>
  );
}
