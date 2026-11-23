"use client";

import { useState } from "react";
import Ambient from "@/components/Ambient";
import Quiz from "@/components/Quiz";
import Celebration from "@/components/Celebration";
import { Badge, Eyebrow, Divider, ArrowIcon } from "@/components/UI";
import { CONFIG } from "@/lib/config";

export default function Home() {
  const [stage, setStage] = useState("intro"); // intro | quiz | done

  return (
    <main className="relative min-h-screen">
      <Ambient />

      {stage === "intro" && (
        <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-16">
          <div className="paper-card mt-8 w-full max-w-xl animate-fadeUp px-6 pb-12 pt-16 text-center sm:px-12">
            <Badge />
            <Eyebrow>A little something for you</Eyebrow>
            <h1 className="mt-7 font-serif text-4xl font-semibold leading-tight text-wine-900 sm:text-6xl">
              My Dear
              <span className="mt-1 block italic text-wine-700">{CONFIG.name}</span>
            </h1>
            <Divider className="mt-6" />
            <p className="mx-auto mt-6 max-w-sm text-lg leading-relaxed text-wine-900/85">
              I made something special for your day. I just have a few important questions first.
            </p>
            <button onClick={() => setStage("quiz")} className="btn-primary mt-9">
              Begin <ArrowIcon />
            </button>
          </div>
        </div>
      )}

      {stage === "quiz" && <Quiz onFinish={() => setStage("done")} />}
      {stage === "done" && <Celebration />}
    </main>
  );
}
