export function FieldIllustration() {
  return (
    <svg viewBox="0 0 480 520" className="h-auto w-full" aria-hidden fill="none">
      <rect
        x="1"
        y="1"
        width="478"
        height="518"
        rx="28"
        stroke="white"
        strokeOpacity="0.14"
      />
      <circle cx="240" cy="250" r="150" stroke="#7eb0df" strokeOpacity="0.55" />
      <circle cx="240" cy="250" r="96" stroke="#7ec8c8" strokeOpacity="0.7" />
      <path
        d="M86 340c48-92 96-138 154-138s106 46 154 138"
        stroke="#8dceab"
        strokeWidth="1.5"
      />
      <path
        d="M168 250c18-46 36-70 72-70s54 24 72 70"
        stroke="#c5ddf5"
        strokeWidth="1.5"
      />
      <path d="M240 108v284" stroke="white" strokeOpacity="0.2" />
      <circle cx="240" cy="108" r="4" fill="#7eb0df" />
      <circle cx="154" cy="186" r="4" fill="#7ec8c8" />
      <circle cx="326" cy="186" r="4" fill="#8dceab" />
      <circle cx="240" cy="250" r="6" fill="#f4f7f5" />
      <circle cx="86" cy="340" r="4" fill="#7eb0df" />
      <circle cx="394" cy="340" r="4" fill="#8dceab" />
      <text
        x="40"
        y="64"
        fill="#d5e2ea"
        fontSize="13"
        letterSpacing="2"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        DATA · PLACE · IMPACT
      </text>
    </svg>
  );
}
