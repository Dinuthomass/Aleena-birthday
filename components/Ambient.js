import { HeartIcon } from "./UI";

const HEARTS = [
  { l: "86%", t: "7%", s: 44, r: "10deg", d: "0s", hide: false },
  { l: "7%", t: "26%", s: 28, r: "-12deg", d: "-2s", hide: false },
  { l: "89%", t: "40%", s: 26, r: "14deg", d: "-4s", hide: false },
  { l: "16%", t: "72%", s: 36, r: "-8deg", d: "-1s", hide: false },
  { l: "76%", t: "74%", s: 32, r: "12deg", d: "-3s", hide: true },
  { l: "80%", t: "82%", s: 18, r: "-10deg", d: "-5s", hide: true },
  { l: "30%", t: "10%", s: 16, r: "8deg", d: "-6s", hide: true },
  { l: "60%", t: "92%", s: 20, r: "-6deg", d: "-2.5s", hide: true },
];

// Cream backdrop, burgundy wave corners, scattered hearts and thin line doodles.
export default function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200" />

      {/* top-left wave */}
      <svg className="absolute left-0 top-0 w-[62vw] max-w-[560px]" viewBox="0 0 560 420" fill="none">
        <path d="M0 0H470C430 70 360 100 270 140C170 185 70 250 0 360Z" fill="#8f1231" />
        <path d="M0 0H290C255 45 190 65 130 90C70 115 25 165 0 225Z" fill="#620b20" />
      </svg>

      {/* bottom-right wave */}
      <svg className="absolute bottom-0 right-0 w-[62vw] max-w-[560px] rotate-180" viewBox="0 0 560 420" fill="none">
        <path d="M0 0H470C430 70 360 100 270 140C170 185 70 250 0 360Z" fill="#8f1231" />
        <path d="M0 0H290C255 45 190 65 130 90C70 115 25 165 0 225Z" fill="#620b20" />
      </svg>

      {/* thin line doodles */}
      <svg className="absolute right-0 top-[16%] w-[34vw] max-w-[360px]" viewBox="0 0 360 160" fill="none" stroke="#d99aa0" strokeWidth="1.4" strokeLinecap="round">
        <path d="M0 140C60 120 110 60 150 60C190 60 190 110 155 105C125 100 135 55 165 50C230 40 300 60 360 20" />
        <path d="M118 70c-14-24 14-38 22-18 8-20 36-6 22 18-8 12-22 20-22 20s-14-8-22-20z" />
      </svg>
      <svg className="absolute bottom-[22%] left-0 w-[30vw] max-w-[320px]" viewBox="0 0 320 160" fill="none" stroke="#d99aa0" strokeWidth="1.4" strokeLinecap="round">
        <path d="M0 150C70 130 100 60 180 50C230 44 250 80 220 90C190 98 190 60 230 40C270 20 300 30 320 10" />
      </svg>

      {HEARTS.map((h, i) => (
        <HeartIcon
          key={i}
          className={`absolute animate-bob text-wine-800 ${h.hide ? "hidden sm:block" : ""}`}
          style={{
            left: h.l,
            top: h.t,
            width: h.s,
            height: h.s,
            "--r": h.r,
            animationDelay: h.d,
            opacity: 0.92,
          }}
        />
      ))}
    </div>
  );
}
