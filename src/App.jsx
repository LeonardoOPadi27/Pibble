import { useState } from 'react'
import PibbleImage from './components/PibbleImage.jsx'
import { Envelope, LetterDialog } from './components/Letter.jsx'
import Cake from './components/Cake.jsx'
import Confetti from './components/Confetti.jsx'
import { footer, hints, images, intro } from './content.js'

export default function App() {
  const [letterOpen, setLetterOpen] = useState(false)
  const [letterSeen, setLetterSeen] = useState(false)
  const [candleOut, setCandleOut] = useState(false)
  const [wishes, setWishes] = useState(0)
  const [hopping, setHopping] = useState(false)

  function openLetter() {
    setLetterOpen(true)
    setLetterSeen(true)
  }

  function toggleCandle() {
    if (!candleOut) {
      setWishes((count) => count + 1)
      setHopping(true)
    }
    setCandleOut((out) => !out)
  }

  return (
    <main className="page">
      {wishes > 0 && <Confetti key={wishes} />}

      <section className="scene" aria-label="Postal de cumpleaños">
        <header className="intro">
          <p className="eyebrow">{intro.eyebrow}</p>
          <p className="intro-line">{intro.line}</p>
        </header>

        <div className="stage">
          <div className="ground" aria-hidden="true" />

          <div className="prop prop-letter">
            <Envelope open={letterSeen} onOpen={openLetter} />
            <p className="hint">{letterSeen ? hints.letterOpen : hints.letterClosed}</p>
          </div>

          <figure className="pibble-figure">
            <span className="sparkle sparkle-one" aria-hidden="true">✦</span>
            <span className="sparkle sparkle-two" aria-hidden="true">✧</span>
            <span className="sparkle sparkle-three" aria-hidden="true">♥</span>
            <div className={`pibble-hop ${hopping ? 'is-hopping' : ''}`} onAnimationEnd={(event) => event.target === event.currentTarget && setHopping(false)}>
              <div className="pibble-breathe">
                <PibbleImage className="pibble-main" src={images.main.src} alt={images.main.alt} />
              </div>
            </div>
          </figure>

          <div className="prop prop-cake">
            <Cake candleOut={candleOut} onToggle={toggleCandle} />
            <p className="hint" aria-live="polite">{candleOut ? hints.candleOut : hints.candleLit}</p>
          </div>
        </div>

        <footer className="footer">{footer}</footer>
      </section>

      <LetterDialog open={letterOpen} onClose={() => setLetterOpen(false)} />
    </main>
  )
}
