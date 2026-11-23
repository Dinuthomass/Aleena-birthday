"use client";

import Image from "next/image";
import Confetti from "./Confetti";
import LetterEnvelope from "./LetterEnvelope";
import { Badge, Eyebrow, Divider, HeartIcon } from "./UI";
import { CONFIG } from "@/lib/config";

export default function Celebration() {
  const photos = CONFIG.photos;

  return (
    <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center px-5 py-20 text-center">
      <Confetti />

      {/* heading */}
      <div className="w-full animate-fadeUp">
        <Eyebrow>Today is all about you</Eyebrow>
        <h1 className="mt-7 font-serif text-5xl font-semibold leading-tight text-wine-900 sm:text-7xl">
          Happy Birthday,
          <span className="mt-1 block italic text-wine-700">{CONFIG.name}</span>
        </h1>
        <Divider className="mt-8" />
      </div>

      {/* message */}
      <div className="paper-card mt-20 w-full animate-fadeUp px-7 pb-12 pt-16 [animation-delay:200ms] sm:px-14">
        <Badge />
        <p className="font-serif text-xl italic leading-relaxed text-wine-900 sm:text-2xl">{CONFIG.birthdayMessage}</p>
        <Divider className="mt-8" />
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.35em] text-wine-700">
          Forever yours, {CONFIG.fromName}
        </p>
      </div>

      {/* photo gallery: fill CONFIG.photos in lib/config.js later */}
      <section className="mt-24 w-full animate-fadeUp [animation-delay:400ms]">
        <Eyebrow>Moments</Eyebrow>
        <h3 className="mt-6 font-serif text-4xl font-semibold text-wine-900 sm:text-5xl">Our little memories</h3>
        <Divider className="mt-6" />

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {photos.length > 0
            ? photos.map((p, i) => (
                <figure
                  key={p.src}
                  className="rounded-2xl bg-cream-50 p-2.5 pb-3 shadow-[0_20px_40px_-18px_rgba(98,11,32,0.5)] ring-1 ring-wine-200 transition duration-300 hover:z-10 hover:scale-105 hover:rotate-0"
                  style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <Image
                      src={p.src}
                      alt={p.caption || "Memory"}
                      fill
                      sizes="(max-width:640px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  {p.caption && <figcaption className="mt-2.5 font-serif text-sm italic text-wine-800">{p.caption}</figcaption>}
                </figure>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="paper-card flex aspect-square items-center justify-center !rounded-2xl">
                  <HeartIcon outline className="h-9 w-9 text-wine-300" />
                </div>
              ))}
        </div>
        {photos.length === 0 && (
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-wine-400">Photos coming soon</p>
        )}
      </section>

      {/* letter */}
      <section className="mt-28 w-full animate-fadeUp pb-10 [animation-delay:600ms]">
        <Eyebrow>For you</Eyebrow>
        <h3 className="mt-6 font-serif text-4xl font-semibold text-wine-900 sm:text-5xl">A surprise is waiting</h3>
        <Divider className="mb-14 mt-6" />
        <LetterEnvelope />
      </section>
    </div>
  );
}
