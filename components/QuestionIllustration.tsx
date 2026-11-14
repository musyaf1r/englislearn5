import type { IlustrasiSoal } from "@/data/latihan";

const LABEL: Record<IlustrasiSoal, string> = {
  "ball-under-chair": "A ball directly under a chair",
  "book-under-table": "A book under a table",
  "cat-in-box": "A cat inside a box",
  "pencil-next-to-book": "A pencil next to a book",
  "ball-on-chair": "A ball on a chair",
  "book-on-table": "A book on a table",
  "position-matching": "A cat in a box, a ball under a chair, and a book on a table",
  "pencil-ball-matching": "A pencil next to a book and a ball under a chair",
  "shadow-experiment": "A lamp shining on an object and casting a shadow on a screen",
  "shadow-distance": "An object moving toward a screen between a lamp and the screen",
  "shadow-dark": "A dark room with no light and no visible shadow",
  "shadow-reverse": "A lamp to the right of an object casting a shadow to the left",
  "shadow-book": "A thick book blocking light and casting a shadow",
  "shadow-matching": "An experiment showing a lamp and an object casting a shadow",
};

const STROKE = {
  fill: "none",
  stroke: "#31594a",
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function QuestionIllustration({
  type,
}: {
  type: IlustrasiSoal;
}) {
  const isPosition = !type.startsWith("shadow-");

  return (
    <svg
      viewBox="0 0 360 180"
      role="img"
      aria-label={LABEL[type]}
      className="mt-4 h-auto w-full rounded-2xl bg-white p-3"
    >
      <style>{`
        text {
          fill: #31594a;
          stroke: none;
          font-family: sans-serif;
          font-size: 10px;
          font-weight: 700;
        }
      `}</style>
      {isPosition ? (
        <g {...STROKE}>
          {type === "ball-under-chair" && (
            <>
              <path d="M108 60h144v16H108zM120 76v55m120-55v55" />
              <circle cx="180" cy="145" r="15" fill="#f3d87c" />
              <text x="144" y="35">CHAIR</text>
              <text x="157" y="176">BALL</text>
            </>
          )}
          {type === "ball-on-chair" && (
            <>
              <path d="M108 83h144v16H108zM120 99v50m120-50v50" />
              <circle cx="180" cy="65" r="15" fill="#f3d87c" />
              <text x="144" y="177">CHAIR</text>
            </>
          )}
          {(type === "book-under-table" || type === "book-on-table") && (
            <>
              <path d="M85 88h190v13H85zM98 101v48m164-48v48" />
              {type === "book-under-table" ? (
                <path d="M145 111h70v30h-70z" fill="#dcebe3" />
              ) : (
                <path d="M145 57h70v29h-70z" fill="#dcebe3" />
              )}
              <text x="147" y="171">TABLE</text>
              <text x="157" y={type === "book-under-table" ? "132" : "77"}>
                BOOK
              </text>
            </>
          )}
          {type === "cat-in-box" && (
            <>
              <path d="M105 75h150v74H105zM126 75V48h108v27" fill="#dcebe3" />
              <path d="M166 104c0-15 28-15 28 0v15h-28z" fill="#f3d87c" />
              <path d="m166 105-9-10m37 10 9-10m-29 16h1m17 0h1" />
              <text x="154" y="171">CAT IN BOX</text>
            </>
          )}
          {type === "pencil-next-to-book" && (
            <>
              <path d="M86 72h112v76H86z" fill="#dcebe3" />
              <path d="m216 104 70-22 5 13-70 22z" fill="#f3d87c" />
              <path d="m216 104-15 13 20 0" fill="#f3d87c" />
              <text x="119" y="117">BOOK</text>
              <text x="224" y="129">PENCIL</text>
            </>
          )}
          {type === "position-matching" && (
            <>
              <path d="M22 100h87v47H22zM39 100V82h54v18" fill="#dcebe3" />
              <path d="M152 83h72v10h-72zM160 93v38m56-38v38" />
              <circle cx="188" cy="148" r="12" fill="#f3d87c" />
              <path d="M263 94h71v10h-71zM271 104v42m55-42v42" />
              <path d="M282 67h34v26h-34z" fill="#dcebe3" />
              <text x="41" y="170">CAT IN BOX</text>
              <text x="159" y="171">BALL UNDER CHAIR</text>
              <text x="270" y="58">BOOK ON TABLE</text>
            </>
          )}
          {type === "pencil-ball-matching" && (
            <>
              <path d="M28 73h116v75H28z" fill="#dcebe3" />
              <path d="m157 105 85-22 4 13-85 22z" fill="#f3d87c" />
              <path d="M258 64h78v10h-78zM267 74v54m60-54v54" />
              <circle cx="297" cy="147" r="13" fill="#f3d87c" />
              <text x="56" y="114">BOOK</text>
              <text x="274" y="166">BALL</text>
            </>
          )}
        </g>
      ) : (
        <g {...STROKE}>
          {type === "shadow-dark" ? (
            <>
              <path d="M65 55h230v95H65z" fill="#263d35" />
              <path d="M150 91h60v45h-60z" fill="#9eaa9f" />
              <circle cx="105" cy="75" r="15" stroke="#f3d87c" />
              <path d="m95 65 20 20m0-20L95 85" stroke="#f3d87c" />
              <text x="123" y="173">NO LIGHT, NO VISIBLE SHADOW</text>
            </>
          ) : (
            <>
              <path d="M30 146h300" stroke="#b8cfc4" />
              {type === "shadow-reverse" ? (
                <>
                  <path d="M289 64h24l12 15h-48z" fill="#f3d87c" />
                  <path d="M296 79v38" />
                  <path d="M151 88h32v58h-32z" fill="#b8cfc4" />
                  <path d="M149 127 79 143" stroke="#31594a" strokeWidth="12" opacity=".3" />
                  <path d="M264 83 185 112" stroke="#f3d87c" strokeWidth="4" opacity=".8" />
                  <text x="34" y="119">SHADOW</text>
                  <text x="265" y="48">LIGHT</text>
                  <text x="143" y="77">OBJECT</text>
                </>
              ) : (
                <>
                  <path d="M46 75h25l12 15H34z" fill="#f3d87c" />
                  <path d="M57 89v31" />
                  <path d="M97 82 213 121" stroke="#f3d87c" strokeWidth="4" opacity=".8" />
                  {type === "shadow-book" ? (
                    <path d="M145 91h49v48h-49z" fill="#b8cfc4" />
                  ) : (
                    <path d="M151 88h32v54h-32z" fill="#b8cfc4" />
                  )}
                  {type === "shadow-distance" && (
                    <>
                      <path d="M126 75h22v67h-22z" fill="#dcebe3" opacity=".65" />
                      <path d="M201 114h14m-7-7 7 7-7 7" />
                      <text x="112" y="61">MOVE TO SCREEN</text>
                    </>
                  )}
                  <path d="M184 121 279 139" stroke="#31594a" strokeWidth="12" opacity=".3" />
                  <path d="M286 61v81m-8 0h16" />
                  <text x="30" y="42">LIGHT</text>
                  <text x="143" y="76">{type === "shadow-book" ? "BOOK" : "OBJECT"}</text>
                  <text x="263" y="53">SCREEN</text>
                  <text x="213" y="165">SHADOW</text>
                </>
              )}
              {type === "shadow-matching" && (
                <text x="39" y="174">BLOCKED LIGHT MAKES A SHADOW</text>
              )}
            </>
          )}
        </g>
      )}
    </svg>
  );
}
