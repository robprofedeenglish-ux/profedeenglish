// Reseñas copiadas tal cual de la página de la comunidad en Skool (skool.com/realenglishwithrob).
// No se corrigen ni se recortan: la ley pide que las opiniones se muestren como las escribió la persona.
// "meses" es lo que muestra Skool ("Still a paying member after X months") en la fecha indicada abajo.

export const REVIEWS_CHECKED = 'noviembre de 2026';
export const REVIEWS_RATING = '5,0';

export const reviews = [
  {
    name: 'Marge L.',
    months: 7,
    lang: 'es',
    featured: true,
    text: 'Después de un año estudiando inglés con un profesor latino, tuve una entrevista con un australiano y no entendí nada. Entonces, llegué a la comunidad para estudiar con Rob. Cada día le entiendo mejor. Me ha permitido mejorar mis habilidades en grupos pequeños, con conversaciones cotidianas, sin aburrirme. Situaciones reales, vocabulario real y acento nativo con recomendaciones personalizadas. He aumentado muchísimo mi vocabulario y he mejorado mi listening. ¡Me ha encantado!',
  },
  {
    name: 'Sara María C.',
    months: 2,
    lang: 'es',
    featured: true,
    text: 'En mi caso llegué a la comunidad porque quería practicar speaking con un profe nativo. Al finalizar la primera clase supe que había acertado. Rob es un profe muy comprometido y eso se nota en cada clase. Sus clases son dinámicas, variadas y sabe cómo crear buen ambiente. Además, sabe adaptarse perfectamente a tu nivel, a tus objetivos y a aquello que necesitas mejorar, por lo que sientes que aprovechas cada clase al máximo.',
  },
  {
    name: 'Dennis T.',
    months: 2,
    lang: 'es',
    featured: true,
    text: 'Hace un mes que inicié mi reto de 90 dias para hablar en Ingles y me gusta mucho todo lo que estoy avanzando hasta ahora, las conversaciones con hablantes nativos del idioma Ingles es muy retador pero a la vez es muy satisfactorio perder el miedo y atreverte a hablar. Las sesiones de speaking con Rob tambien son muy divertidas y me ayuda bastante a seguir en mi camino para hablar El Ingles con mucho mas seguridad. 😊',
  },
  {
    name: 'Vanesa C.',
    months: 2,
    lang: 'es',
    featured: false,
    text: 'Hace un mes que empecé con Rob y estoy encantada. Después de mil cursos quería poder practicar más apeaking. Las clases de intercambio son geniales no solo son divertidas si no que hace que sea un lugar seguro donde poder practicar mucho listening, inglés de verdad y sobre todo hablar aun con un nivel bajo y Muchos errores , eso hace que poco a poco vaya quitandome la vergüenza. Rob tiene muchísima paciencia ya qué ayuda muchísimo y te da muchas alternativas para poder seguir practicando!!',
  },
  {
    name: 'Alberto J.',
    months: 6,
    lang: 'en',
    featured: false,
    text: "Last Friday was my first language exchange. I was nervous at the beginning, but later I felt more relaxed and confident. I met other people like me who wanted to learn another language, and speaking with all of them is the best way to reach that goal. I'm looking forward to the next one. Don't just try it, do it!",
  },
  {
    name: 'Kary D.',
    months: 10,
    lang: 'en',
    featured: false,
    text: 'Hi everyone, English it’s a task for me like a hobbie and form to conect with other people. I decided to improve my English follow this community and I’m so grateful and happy to be here because Rob and my fellow partners doing this journey so easy and funny. I improved my confidence and fluency, I know I need to develop more but I trust in my capabilities and my commitment with this process. 😄',
  },
];

export const monthsLabel = (m: number) => (m === 1 ? 'Miembro de pago desde hace 1 mes' : `Miembro de pago desde hace ${m} meses`);
