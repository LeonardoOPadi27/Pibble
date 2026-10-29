import { name } from '../content.js'

// Torta Selva Negra: crema batida, cerezas, virutas de chocolate y el nombre escrito en chocolate.
// Seis copos de crema en el borde; ninguno cae justo delante o detrás de la vela.
const rosettes = Array.from({ length: 6 }, (_, index) => {
  const angle = (index / 6) * Math.PI * 2
  return { x: 90 + Math.cos(angle) * 56, y: 97 + Math.sin(angle) * 10, front: Math.sin(angle) > 0.1 }
})

const grated = [
  [74, 93, -20], [84, 90, 30], [97, 92, -40], [106, 97, 15], [80, 100, 50], [92, 101, -10],
  [101, 89, 60], [70, 98, 10], [111, 93, -30], [87, 95, 70], [95, 97, 25], [78, 95, -55],
]

const flakes = [
  [28, 138, 30], [40, 141, -20], [53, 136, 50], [66, 142, -40], [80, 139, 20], [93, 143, -60],
  [106, 138, 35], [119, 142, -25], [132, 137, 45], [145, 141, -35], [34, 147, 10], [126, 148, -15],
]

// Copo de crema batida con una cereza encima.
function Rosette({ x, y }) {
  return (
    <g>
      <ellipse cx={x} cy={y + 2} rx="10" ry="5" fill="#efe3d6" />
      <path d={`M${x - 9} ${y + 2}C${x - 10} ${y - 5} ${x - 3} ${y - 9} ${x} ${y - 10}C${x + 3} ${y - 9} ${x + 10} ${y - 5} ${x + 9} ${y + 2}Z`} fill="url(#dollop)" />
      <path d={`M${x - 5} ${y}q2-6 5-8M${x + 1} ${y + 1}q3-5 4-8`} fill="none" stroke="#eadbcb" strokeWidth="1.1" strokeLinecap="round" />
      <path d={`M${x + 1} ${y - 14}q1-8 8-11`} fill="none" stroke="#6f8f45" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx={x} cy={y - 12} r="5.5" fill="url(#cherry)" />
      <ellipse cx={x - 1.8} cy={y - 14} rx="1.6" ry="1.1" fill="#fff" opacity=".75" />
    </g>
  )
}

export default function Cake({ candleOut, onToggle }) {
  const back = rosettes.filter((r) => !r.front)
  const front = rosettes.filter((r) => r.front)

  return (
    <button
      type="button"
      className={`cake ${candleOut ? 'candle-out' : ''}`}
      onClick={onToggle}
      aria-pressed={candleOut}
      aria-label={candleOut ? `Torta Selva Negra de ${name} con la vela apagada. Volver a encenderla` : `Torta Selva Negra de ${name}. Apagar la vela`}
    >
      <svg viewBox="0 0 180 190" aria-hidden="true">
        <defs>
          <linearGradient id="cream-side" x1="0" x2="1">
            <stop offset="0" stopColor="#fffdf8" />
            <stop offset=".6" stopColor="#fbf3ea" />
            <stop offset="1" stopColor="#efe1d2" />
          </linearGradient>
          <linearGradient id="choc-band" x1="0" x2="1">
            <stop offset="0" stopColor="#6a3c2c" />
            <stop offset="1" stopColor="#3f2219" />
          </linearGradient>
          <linearGradient id="dollop" x1="0" y1="0" x2=".6" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f3e8dc" />
          </linearGradient>
          <radialGradient id="cherry" cx=".35" cy=".35" r=".7">
            <stop offset="0" stopColor="#e2475a" />
            <stop offset="1" stopColor="#a5182c" />
          </radialGradient>
          <pattern id="candle-stripes" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <rect width="8" height="8" fill="#fff2e4" />
            <rect width="4" height="8" fill="#f2bccb" />
          </pattern>
          <path id="name-curve" d="M30 124 A64 14 0 0 0 150 124" />
        </defs>

        <ellipse cx="90" cy="172" rx="86" ry="13" fill="#cfe0ec" />
        <ellipse cx="90" cy="169" rx="78" ry="10" fill="#e3eef6" />

        <path d="M20 96 V158 A70 15 0 0 0 160 158 V96 Z" fill="url(#cream-side)" />
        <path d="M20 142 V158 A70 15 0 0 0 160 158 V142 A70 15 0 0 1 20 142 Z" fill="url(#choc-band)" />
        {flakes.map(([x, y, r]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="6" height="2.6" rx="1.2" fill="#5a3326" transform={`rotate(${r} ${x + 3} ${y + 1})`} />
        ))}

        <text className="cake-name">
          <textPath href="#name-curve" startOffset="50%" textAnchor="middle">{name}</textPath>
        </text>

        <ellipse cx="90" cy="96" rx="70" ry="15" fill="#fffaf3" />
        <ellipse cx="90" cy="96" rx="44" ry="8" fill="#f6ebe0" />
        {grated.map(([x, y, r]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="5" height="2" rx="1" fill="#4a281d" transform={`rotate(${r} ${x + 2.5} ${y + 1})`} />
        ))}

        {back.map((r) => <Rosette key={`${r.x}-${r.y}`} {...r} />)}

        <rect x="86" y="52" width="8" height="44" rx="2" fill="url(#candle-stripes)" />
        {candleOut ? (
          <path className="smoke" d="M90 48c-5-6 5-10 0-16s5-10 0-14" fill="none" stroke="rgba(120,112,122,.5)" strokeWidth="2" strokeLinecap="round" />
        ) : (
          <g className="flame">
            <ellipse cx="90" cy="40" rx="11" ry="15" fill="#ffd98a" opacity=".35" />
            <path d="M90 26c6 9 7 15 0 21-7-6-6-12 0-21Z" fill="#ffc86c" />
            <path d="M90 35c3 4 3 7 0 10-3-3-3-6 0-10Z" fill="#fff3cf" />
          </g>
        )}

        {front.map((r) => <Rosette key={`${r.x}-${r.y}`} {...r} />)}
      </svg>
    </button>
  )
}
