import LimpiezaFacial from './assets/services/limpieza.jpg'
import MasajeRelajante from './assets/services/masaje_relajante.png'
import Reductor from './assets/services/reduct.png';
import Reductor2 from './assets/services/reductor2.png';
import Depilacion from './assets/services/depilacion.png';
import Micro from './assets/services/micro.png';
import tratamientosfaciales from './assets/services/tratamientosfaciales.png'
import depilacioncera from './assets/services/depilacioncera.png'
import relajacion from './assets/services/relajacion.png'
import reductor from './assets/services/reductor.png'

export const popularServices = [
  { id: 1,
    name: "Limpieza Facial",
    benefit: "Tratamiento esencial que purifica la piel a fondo. Desobstruye poros, elimina impurezas, puntos negros y células muertas, devolviendo la vitalidad a tu rostro.",
    benefitList:[
      ["Respira, Piel:"," Libera tus poros de impurezas y puntos negros."],
      ["Renueva tu Rostro:"," Elimina células muertas y revela una piel suave."],
      ["Equilibrio Perfecto:"," Regula el exceso de grasa y brillo."],
      ["Potencia tu Rutina:"," Mejora la absorción de tus cremas y sérums."],
      ["Previene Imperfecciones:"," Mantiene a raya la aparición de acné."],
     ],
    
    imageUrl: LimpiezaFacial },
     { id: 2, name: "Microdermoabrasión", 
  benefit: "Piel Suave y Nutrida, 90 min.",
   imageUrl: Micro,
   benefitList:[
    ["Piel de Seda"," Consigue una textura ultra-suave y tersa al instante."],
    ["Rostro Luminoso:"," Elimina la piel opaca y revela un brillo saludable y fresco."],
    ["Unifica el Tono:"," Atenúa visiblemente manchas solares, pigmentación y líneas finas."],
    ["Minimiza Imperfecciones:"," Ayuda a reducir la apariencia de poros y cicatrices leves de acné."],
    ["Impulsa el Colágeno:"," Estimula la producción natural para una piel más firme."],
    ["Maximiza tu Rutina:"," Permite que tus sérums y cremas penetren mucho mejor.  "]
   ]
   },
  {
    id: 3, name: "Masaje Relajante",
    benefit: "Alivia la tensión, duerme mejor y encuentra tu calma.",
    benefitList:[
      ["Vive sin Tensión:"," Alivia el dolor crónico de espalda y cuello."],
      ["Duerme Mejor:"," Despierta renovado y lleno de energía."],
      ["Encuentra tu Calma:"," Reduce drásticamente el estrés y la ansiedad."],
      ["Siéntete Feliz:"," Eleva tu estado de ánimo de forma natural."],
      ["Desintoxica tu Cuerpo:"," Activa tu circulación y sistema linfático."],
      ["Recupera tu Enfoque:"," Despeja la niebla mental causada por la fatiga."]
    ],
    imageUrl: MasajeRelajante
  },
  { id: 4, name: "Tratamientos Reductores",
    benefit: "Procedimientos enfocados en moldear tu figura. Utilizamos tecnología y técnicas manuales para disminuir la grasa localizada, reducir medidas, combatir la celulitis y mejorar la firmeza de la piel en áreas específicas como abdomen, muslos y brazos.",
     benefitList:[
      ["Esculpe tu Silueta:","Moldea tu figura y reduce centímetros en zonas clave."],
      ["Ataca la Grasa:","Disminuye visiblemente los depósitos de grasa localizada rebelde."],
      ["Piel más Lisa","Combate activamente la apariencia de la celulitis."],
      ["Siente Firmeza:","Tonifica la piel y mejora la flacidez."],
      ["Siéntete Ligera:","Ayuda a drenar líquidos retenidos y a desinflamar."],
      ["Luce tu Ropa:","Gana confianza y disfruta cómo te queda tu ropa favorita."]
     ],
    imageUrl: Reductor,
    
  },
  { id: 5,
    name: "Depilación con Cera", 
    benefit: "Método eficaz de eliminación del vello que lo arranca desde la raíz. La cera (caliente o tibia) se adhiere al vello y, al retirarla, deja la piel suave, exfoliada y libre de vello por más tiempo que otros métodos.",
    benefitList:[
      ["Suavidad Duradera:"," Disfruta de una piel sin vello por semanas (3 a 6)."],
      ["Vello más Débil:"," Con el tiempo, el vello crece más fino y en menor cantidad."],
      ["Piel Renovada:"," Actúa como un exfoliante, eliminando células muertas al instante."],
      ["Resultados Inmediatos:","Sal de tu sesión con una piel perfectamente lisa."],
      ["Adiós a la Irritación:","Evita los cortes y la irritación diaria de la cuchilla."],
      ["Mejor Definición:"," Ideal para dar forma precisa a cejas, bikini y rostro."]
    ],
    imageUrl: Depilacion 
  },
  
 
 
];

export const advancedAesthetics = [
  { id: 1, name: "Tratamientos Faciales", benefit: "Enfocados en la salud y apariencia del rostro", imageUrl: tratamientosfaciales },
  { id: 2, name: "Tratamientos Corporales", benefit: "Enfocados en moldear la silueta y mejorar la calidad de la piel del cuerpo", imageUrl: reductor },
  { id: 3, name: "Depilación", benefit: "Eliminación del vello corporal y facial", imageUrl: depilacioncera },
  { id: 4, name: "Bienestar y Relajación", benefit: "Enfocados en reducir el estrés y aliviar la tensión muscula", imageUrl: relajacion },

];

// src/data/testimonios.js (ejemplo)
export const testimonios = [
  {
    id: 1,
    testimonio: "Me encantó. Cumple con la hora asignada. Es cuidadosa y se le nota la experiencia. El lugar perfecto para consentir tu piel.",
    nombre: "Hele Valdes",
    avatar: "/images/ana_perez.jpg" // Ruta a la imagen del perfil
  },
  {
    id: 2,
    testimonio: "Excelente lugar, una muy buena atencion Con mi tratamiento facial me ha ido excelente, mi piel ha mejorado muchísimo. Estoy muy contenta con los resultados.",
    nombre: "Leibis Beltran Olivares",
    avatar: "/images/carlos_gomez.jpg"
  },
  {
    id: 3,
    testimonio: "De lo mejor excelente trabajo en equipo y ella es un amor!! Vayan por favor!!🙏 no se van arrepentir!! De los mejores masajes que e tenido!!",
    nombre: "Dariela V Abadia",
    avatar: "/images/carlos_gomez.jpg"
  },

  // ... más testimonios
];