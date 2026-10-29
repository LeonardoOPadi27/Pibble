import { useState } from 'react'

// Muestra la ilustración del pibble. Si el archivo aún no existe en public/,
// en desarrollo se indica qué falta y en producción no se ve una imagen rota.
export default function PibbleImage({ src, alt, className = '' }) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <div className={`${className} pibble-missing`} role="img" aria-label={alt}>
        {import.meta.env.DEV && <span>Falta public{src}</span>}
      </div>
    )
  }

  return <img className={className} src={src} alt={alt} decoding="async" onError={() => setMissing(true)} />
}
