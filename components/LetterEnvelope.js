"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Eyebrow, Divider, HeartIcon, ArrowIcon } from "./UI";
import { CONFIG } from "@/lib/config";

export default function LetterEnvelope() {
  const [flap, setFlap] = useState(false); // envelope flap open
  const [open, setOpen] = useState(false); // modal open
  const [endAt, setEndAt] = useState(null); // timestamp when the hunt ends
  const [left, setLeft] = useState(0); // seconds remaining

  const openLetter = () => {
    setFlap(true);
    setTimeout(() => setOpen(true), 550);
  };

  const closeLetter = () => {
    setOpen(false);
    setTimeout(() => setFlap(false), 200);
  };

  // Esc to close + lock page scroll while the modal is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeLetter();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const { letter } = CONFIG;

  const startHunt = () => {
    const total = Math.round((letter.huntMinutes || 30) * 60);
    setEndAt(Date.now() + total * 1000);
    setLeft(total);
  };

  // countdown tick
  useEffect(() => {
    if (!endAt) return;
    const tick = () => setLeft(Math.max(0, Math.ceil((endAt - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [endAt]);

  const started = endAt !== null;
  const finished = started && left === 0;
  const pad = (n) => String(n).padStart(2, "0");
  const hh = Math.floor(left / 3600);
  const mm = Math.floor((left % 3600) / 60);
  const ss = left % 60;
  const timeText = hh > 0 ? `${pad(hh)}:${pad(mm)}:${pad(ss)}` : `${pad(mm)}:${pad(ss)}`;

  return (
    <>
      {/* ---------- envelope ---------- */}
      <button
        onClick={openLetter}
        aria-label="Open the letter"
        className="group relative mx-auto block h-56 w-80 max-w-full cursor-pointer transition-transform duration-300 hover:-translate-y-1 focus:outline-none sm:h-60 sm:w-96"
      >
        {/* ground shadow */}
        <div className="absolute -bottom-4 inset-x-6 h-5 rounded-full bg-wine-900/25 blur-lg" />

        {/* back */}
        <div className="absolute inset-0 rounded-md bg-wine-900" />

        {/* flap (rotates open) */}
        <div
          className="absolute inset-x-0 top-0 h-36 origin-top transition-transform duration-500 sm:h-40"
          style={{
            transform: flap ? "rotateX(180deg)" : "rotateX(0deg)",
            zIndex: flap ? 5 : 30,
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            background: flap
              ? "linear-gradient(180deg,#5a0a1d,#6d0e25)"
              : "linear-gradient(180deg,#b01a3f,#8f1231)",
          }}
        />

        {/* letter peeking out */}
        <div
          className="absolute inset-x-5 bottom-4 top-4 z-10 rounded bg-cream-50 shadow transition-transform duration-500"
          style={{ transform: flap ? "translateY(-40px)" : "translateY(0)" }}
        >
          <div className="mx-auto mt-5 h-1.5 w-2/3 rounded bg-wine-100" />
          <div className="mx-auto mt-2.5 h-1.5 w-1/2 rounded bg-wine-100" />
        </div>

        {/* front pockets */}
        <div className="absolute inset-0 z-20 overflow-hidden rounded-md">
          <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 52% 56%, 0 100%)", background: "linear-gradient(90deg,#6d0e25,#8a1230)" }} />
          <div className="absolute inset-0" style={{ clipPath: "polygon(100% 0, 48% 56%, 100% 100%)", background: "linear-gradient(270deg,#7a0f27,#9a1535)" }} />
          <div className="absolute inset-0" style={{ clipPath: "polygon(0 100%, 50% 48%, 100% 100%)", background: "linear-gradient(0deg,#8f1231,#a3173a)" }} />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 65" preserveAspectRatio="none" fill="none">
            <path d="M0 0L52 36L0 65M100 0L48 36L100 65M0 65L50 31L100 65" stroke="rgba(255,255,255,0.28)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        {/* wax seal */}
        <div
          className={`absolute left-1/2 top-1/2 z-40 flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-cream-100 shadow-[0_8px_18px_-4px_rgba(0,0,0,0.5)] ring-2 ring-wine-900/40 transition-all duration-300 group-hover:scale-110 ${
            flap ? "scale-50 opacity-0" : "animate-beat"
          }`}
          style={{ background: "radial-gradient(circle at 35% 30%, #b22a48, #7a0f27 60%, #5a0a1d)" }}
        >
          <HeartIcon outline className="h-8 w-8" />
        </div>
      </button>

      <Eyebrow className="mt-12">Tap the envelope to open</Eyebrow>

      {/* ---------- modal ---------- */}
      {open &&
        createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-wine-900/60 p-4 backdrop-blur-sm animate-fadeUp"
          onClick={closeLetter}
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-gradient-to-b from-cream-50 to-cream-100 text-left shadow-2xl ring-1 ring-wine-200 animate-fadeUp"
          >
            <button
              onClick={closeLetter}
              aria-label="Close letter"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/95 text-base text-wine-700 shadow transition hover:bg-white"
            >
              ✕
            </button>

            <div className="px-6 pb-10 pt-12 text-center sm:px-10">
              <Eyebrow>{letter.eyebrow}</Eyebrow>
              <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-wine-900 sm:text-4xl">
                {letter.greeting}
                <span className="block italic text-wine-700">{CONFIG.name},</span>
              </h3>
              <Divider className="mt-5" />

              <div className="mt-6 space-y-4 text-lg italic leading-relaxed text-wine-900/90">
                {letter.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* treasure-hunt clue picture */}
              <figure className="mt-8">
                <div className="overflow-hidden rounded-2xl bg-cream-50 p-2 shadow-[0_20px_40px_-18px_rgba(98,11,32,0.55)] ring-1 ring-wine-200">
                  <Image
                    src={letter.image}
                    alt={letter.imageAlt}
                    width={1024}
                    height={1536}
                    sizes="(max-width: 640px) 90vw, 480px"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <figcaption className="mt-5">
                  <Eyebrow>{letter.imageCaption}</Eyebrow>
                </figcaption>
              </figure>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.32em] text-wine-700">
                {letter.signoff} {letter.signoffName}
              </p>

              {!started ? (
                <button onClick={startHunt} className="btn-primary mt-8">
                  {letter.buttonLabel} <ArrowIcon />
                </button>
              ) : (
                <div className="mt-8 animate-fadeUp rounded-3xl bg-white/60 px-5 py-6 ring-1 ring-wine-200">
                  <Eyebrow>{finished ? "Time's up" : "Time left"}</Eyebrow>
                  <div
                    className={`mt-3 font-serif text-4xl font-semibold tabular-nums sm:text-5xl ${
                      finished ? "text-wine-400" : left <= 60 ? "animate-beat text-wine-600" : "text-wine-800"
                    }`}
                    role="timer"
                    aria-live="off"
                  >
                    {timeText}
                  </div>
                  <Divider className="mt-5" />
                  <h4 className="mt-4 font-serif text-xl font-semibold text-wine-900">{letter.huntTitle}</h4>
                  <p className="mt-2 text-base italic leading-relaxed text-wine-800">
                    {finished ? letter.timesUp : letter.huntMessage}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
