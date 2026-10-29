// Todo el texto de la postal vive aquí para poder editarlo sin tocar los componentes.
export const name = 'Vania'

export const intro = {
  eyebrow: `Una sorpresita para ${name}`,
  line: 'Alguien guardó un mensaje especial entre sus patitas.',
}

export const letter = {
  kicker: 'Hoy es tu día',
  title: 'Feliz cumpleaños,',

  // ✍️ Tus palabras: cada texto entre comillas es un párrafo.
  // Reemplaza estos por lo que quieras decirle; puedes añadir o quitar párrafos.
  paragraphs: [
    'Espero que hoy haya sido un día bonito para ti, a pesar de todo. Y si no lo fue tanto, tranqui, que el día todavía no acaba y la torta tampoco. Que sepas que hay gente que te quiere un pincho y te desea lo mejor.',
    'Hoy cumples un año más de vida: un año más para conocer, reírte, perderte un poquito y volver a encontrarte. Habrá días cheveres y días malos, así es la vida, pe; pero deseo que siempre encuentres el camino hacia tu propia luz.',
    'No dejes que nadie apague tu brillo ni tu esencia. Sigue lo que te dicte el corazón, con la frente en alto y con humildad. Y si algún día dudas, acuérdate de que hasta un pibble con pancita se para en dos patas por ti.',
    'Que este año te venga con mucha luz, buena gente y cero personas pesadas. ¡Feliz cumple, Vania!',
  ],

  // 💭 Un recuerdo que solo ella entienda. Si lo dejas vacío (''), no se muestra.
  // Ejemplo: '¿Te acuerdas de aquella tarde de lluvia en la que…?'
  memory: '',

  signature: ['Con mucho cariño,', 'tus pibbles PE'],
}

export const hints = {
  letterClosed: 'Toca la carta',
  letterOpen: 'Ábrela otra vez',
  candleLit: 'Toca la vela',
  candleOut: '¡Deseo pedido!',
}

export const footer = 'hecho con ♥ y un poquito de chocolate'

// Imágenes del personaje: colócalas en la carpeta public/ con estos nombres.
export const images = {
  main: {
    src: '/pibble-main.png',
    alt: 'Pibble blanco y regordete de pie, enseñando su pancita y sosteniendo un ramo de flores amarillas',
  },
  // La carta reutiliza la misma ilustración, recortada como retrato.
  letter: {
    src: '/pibble-main.png',
    alt: 'Retrato del pibble sonriendo junto a sus girasoles',
  },
}
