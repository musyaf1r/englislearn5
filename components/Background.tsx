// Latar belakang: gradasi mint + ilustrasi SVG inline (ombak, ikan,
// tanaman air, daun, awan). Tanpa asset eksternal.

export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* gradasi mint lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint-light via-[#edf6f0] to-cream" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* awan */}
        <g fill="#ffffff" opacity="0.65">
          <ellipse cx="72" cy="88" rx="38" ry="15" />
          <ellipse cx="102" cy="79" rx="27" ry="13" />
          <ellipse cx="318" cy="140" rx="34" ry="14" />
          <ellipse cx="346" cy="131" rx="23" ry="11" />
          <ellipse cx="210" cy="60" rx="26" ry="11" opacity="0.5" />
        </g>

        {/* daun pojok atas */}
        <g opacity="0.45">
          <path d="M0 0 Q34 26 24 76 Q-6 48 0 0 Z" fill="#b8cfc4" />
          <path d="M0 0 Q20 34 6 66 Q-8 30 0 0 Z" fill="#dcebe3" />
          <path d="M400 0 Q366 30 376 80 Q406 48 400 0 Z" fill="#b8cfc4" />
          <path d="M400 0 Q380 38 394 70 Q408 32 400 0 Z" fill="#dcebe3" />
        </g>

        {/* ombak berlapis */}
        <path
          d="M0 600 Q50 574 100 600 T200 600 T300 600 T400 600 L400 800 L0 800 Z"
          fill="#b8cfc4"
          opacity="0.35"
        />
        <path
          d="M0 640 Q50 614 100 640 T200 640 T300 640 T400 640 L400 800 L0 800 Z"
          fill="#b8cfc4"
          opacity="0.55"
        />
        <path
          d="M0 682 Q50 656 100 682 T200 682 T300 682 T400 682 L400 800 L0 800 Z"
          fill="#dcebe3"
        />
        <path
          d="M0 726 Q50 702 100 726 T200 726 T300 726 T400 726 L400 800 L0 800 Z"
          fill="#fdfdf8"
          opacity="0.9"
        />

        {/* ikan kecil */}
        <g opacity="0.4">
          <g transform="translate(116 690)">
            <path d="M0 0 C7 -6 16 -6 24 0 C16 6 7 6 0 0 Z" fill="#5f7a6e" />
            <path d="M24 0 L32 -7 L32 7 Z" fill="#5f7a6e" />
            <circle cx="6" cy="-2" r="1.5" fill="#fdfdf8" />
          </g>
          <g transform="translate(250 720) scale(0.8)">
            <path d="M0 0 C7 -6 16 -6 24 0 C16 6 7 6 0 0 Z" fill="#5f7a6e" />
            <path d="M24 0 L32 -7 L32 7 Z" fill="#5f7a6e" />
            <circle cx="6" cy="-2" r="1.5" fill="#fdfdf8" />
          </g>
          <g transform="translate(180 748) scale(0.6)">
            <path d="M0 0 C7 -6 16 -6 24 0 C16 6 7 6 0 0 Z" fill="#5f7a6e" />
            <path d="M24 0 L32 -7 L32 7 Z" fill="#5f7a6e" />
            <circle cx="6" cy="-2" r="1.5" fill="#fdfdf8" />
          </g>
        </g>

        {/* tanaman air / alang-alang */}
        <g stroke="#5f7a6e" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.35">
          <path d="M28 800 Q26 744 34 714" />
          <path d="M44 800 Q46 752 38 724" />
          <path d="M372 800 Q374 748 366 718" />
          <path d="M356 800 Q354 758 360 730" />
        </g>
        <g fill="#b8cfc4" opacity="0.8">
          <ellipse cx="34" cy="708" rx="5" ry="11" />
          <ellipse cx="39" cy="720" rx="5" ry="10" />
          <ellipse cx="366" cy="712" rx="5" ry="11" />
          <ellipse cx="360" cy="724" rx="5" ry="10" />
        </g>
      </svg>
    </div>
  );
}
