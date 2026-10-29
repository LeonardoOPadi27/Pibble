const pieces = Array.from({ length: 36 }, (_, index) => ({
  '--x': `${(index * 37) % 100}%`,
  '--delay': `${(index % 7) * 0.08}s`,
  '--duration': `${2 + (index % 5) * 0.25}s`,
  '--rotate': `${(index * 43) % 180}deg`,
  '--drift': `${((index * 29) % 60) - 30}px`,
}))

export default function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((style, index) => <i key={index} style={style} />)}
    </div>
  )
}
