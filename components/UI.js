// Small shared UI pieces used across every screen.

export function HeartIcon({ className = "", style, outline = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill={outline ? "none" : "currentColor"}
      stroke={outline ? "currentColor" : "none"}
      strokeWidth={outline ? 1.6 : 0}
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 20.5s-7.3-4.5-9.3-9C1.3 8.2 3.1 5 6.3 5c1.9 0 3.4 1 4.2 2.3h3C14.3 6 15.8 5 17.7 5c3.2 0 5 3.2 3.6 6.5C19.3 16 12 20.5 12 20.5z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

// "—— SMALL CAPS TEXT ——" label with lines on both sides
export function Eyebrow({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-5 ${className}`}>
      <span className="h-px max-w-[5rem] flex-1 bg-wine-800/40" />
      <span className="text-center text-[11px] font-medium uppercase tracking-[0.3em] text-wine-900 sm:whitespace-nowrap sm:text-xs">
        {children}
      </span>
      <span className="h-px max-w-[5rem] flex-1 bg-wine-800/40" />
    </div>
  );
}

// short centred rule under headings
export function Divider({ className = "" }) {
  return <div className={`mx-auto h-px w-20 bg-wine-800/50 ${className}`} />;
}

// round burgundy badge with a white heart that overlaps the top of a card
export function Badge() {
  return (
    <div className="absolute -top-9 left-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-b from-wine-700 to-wine-900 text-white shadow-[0_14px_28px_-6px_rgba(98,11,32,0.65)] ring-4 ring-cream-100/60">
      <HeartIcon className="h-8 w-8 drop-shadow" />
    </div>
  );
}
