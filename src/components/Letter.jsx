import { useEffect, useRef } from 'react'
import PibbleImage from './PibbleImage.jsx'
import { images, letter, name } from '../content.js'

export function Envelope({ open, onOpen }) {
  return (
    <button
      type="button"
      className={`envelope ${open ? 'is-open' : ''}`}
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-label="Abrir la carta de cumpleaños"
    >
      <span className="env-paper" />
      <span className="env-pocket" />
      <span className="env-flap" />
      <span className="env-seal" aria-hidden="true">♥</span>
    </button>
  )
}

// La carta abierta usa <dialog>: queda por encima de la escena sin moverla,
// atrapa el foco y se cierra con Esc, con la × o tocando fuera.
export function LetterDialog({ open, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  function closeOnBackdrop(event) {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog ref={dialogRef} className="letter-dialog" aria-labelledby="letter-title" onClose={onClose} onClick={closeOnBackdrop}>
      <article className="letter-card">
        <button type="button" className="letter-close" onClick={onClose} aria-label="Cerrar la carta">×</button>
        <p className="letter-kicker">{letter.kicker}</p>
        <div className="letter-portrait">
          <PibbleImage className="letter-pibble" src={images.letter.src} alt={images.letter.alt} />
        </div>
        <h1 id="letter-title">{letter.title}<span className="letter-name">{name}</span></h1>
        {letter.paragraphs.map((text) => <p key={text}>{text}</p>)}
        {letter.memory && (
          <blockquote className="letter-memory">
            <span aria-hidden="true">♥</span>
            <p>{letter.memory}</p>
          </blockquote>
        )}
        <p className="letter-signature">{letter.signature[0]}<br />{letter.signature[1]}</p>
      </article>
    </dialog>
  )
}
