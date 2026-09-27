export const clinicConfig = {
  name: "Clínica de Fisioterapia",
  neighborhood: "Chamberí",
  city: "Madrid",
  address: {
    street: "Calle de Fuencarral 98",
    postalCode: "28010",
    city: "Madrid",
    fullAddress: "Calle de Fuencarral 98, 28010 Madrid",
  },
  contact: {
    phone: "+34600000000",
    phoneDisplay: "600 000 000",
    email: "info@clinicademo.es",
    whatsappUrl: "https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20o%20reservar%20una%20cita%20en%20la%20cl%C3%ADnica.",
  },
  googleRating: {
    stars: "4.9/5",
    reviews: 128,
  },
  hours: [
    { days: "Lunes – Viernes", hours: "9:00 – 20:00" },
    { days: "Sábados", hours: "10:00 – 14:00" },
    { days: "Domingos", hours: "Cerrado" },
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d-3.7038!3d40.4378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI2JzE2LjEiTiAzwrA0MicxMy43Ilc!5e0!3m2!1ses!2ses!4v1700000000000",
  googleMapsUrl: "https://maps.google.com/?q=Calle+de+Ejemplo+12,+28010+Madrid",
  team: [
    {
      name: "Laura Méndez",
      initials: "LM",
      role: "Fisioterapeuta",
      specialty: "Terapia manual y dolor crónico",
      registration: "Colegiado C-2847",
    },
    {
      name: "Carlos Ruiz",
      initials: "CR",
      role: "Fisioterapeuta",
      specialty: "Fisioterapia deportiva y readaptación",
      registration: "Colegiado C-3192",
    },
    {
      name: "Ana Torres",
      initials: "AT",
      role: "Fisioterapeuta",
      specialty: "Rehabilitación y ejercicio terapéutico",
      registration: "Colegiado C-3501",
    },
  ],
  services: [
    {
      title: "Rehabilitación",
      description: "Recuperación tras lesión, cirugía o inmovilización. Progresión guiada y segura.",
    },
    {
      title: "Terapia manual",
      description: "Movilización articular y tejido blando para reducir tensión y mejorar el movimiento.",
    },
    {
      title: "Fisioterapia deportiva",
      description: "Prevención y readaptación para deportistas y personas activas.",
    },
    {
      title: "Corrección postural",
      description: "Valoración de hábitos y ejercicios para aliviar molestias de espalda y cuello.",
    },
    {
      title: "Dolor crónico",
      description: "Enfoque multimodal para gestionar dolor persistente y recuperar autonomía.",
    },
    {
      title: "Ejercicio terapéutico",
      description: "Programas de fuerza y movilidad adaptados a tu nivel y objetivos.",
    },
  ],
  pricing: [
    {
      title: "Primera consulta",
      duration: "50–60 min",
      price: "55€",
      note: "Valoración + tratamiento",
      featured: false,
    },
    {
      title: "Sesión de seguimiento",
      duration: "45–50 min",
      price: "45€",
      note: "Seguimiento personalizado",
      featured: true,
    },
    {
      title: "Bono 5 sesiones",
      duration: "Pack de continuidad",
      price: "200€",
      note: "40 € / sesión",
      featured: false,
    },
  ],
  faqs: [
    {
      question: "¿Cómo es la primera consulta y cuánto dura?",
      answer: "La primera consulta dura entre 50 y 60 minutos. Incluye una valoración completa de tu motivo de consulta, exploración física y el inicio del tratamiento. Diseñamos un plan adaptado a tus objetivos y te explicamos los siguientes pasos con total transparencia.",
    },
    {
      question: "¿Atienden por aseguradoras o mutuas médicas?",
      answer: "Trabajamos principalmente de forma privada. Si tu mutua o seguro contempla reembolso, te facilitamos la factura detallada para que puedas solicitarlo. Consulta con tu aseguradora las condiciones de cobertura.",
    },
    {
      question: "¿Qué debo llevar a mi cita?",
      answer: "Te recomendamos venir con ropa cómoda que permita el movimiento. Si dispones de informes médicos, pruebas de imagen o listado de medicación, tráelos: nos ayudan a contextualizar tu caso. No es necesario ayuno ni preparación especial.",
    },
    {
      question: "¿Cómo puedo cancelar o modificar mi reserva?",
      answer: "Puedes cancelar o cambiar tu cita escribiéndonos por WhatsApp o llamando con al menos 24 horas de antelación. Así liberamos el hueco para otras personas. Los cambios de última hora se gestionan según disponibilidad.",
    },
  ],
  reviews: [
    {
      stars: 5,
      quote: "«Tras varias sesiones noté menos dolor de espalda y más movilidad. Explican todo con claridad.»",
      author: "María G.",
      date: "Ejemplo · Demo",
    },
    {
      stars: 5,
      quote: "«Me ayudaron a volver a correr después de una lesión. El plan de ejercicios fue clave.»",
      author: "Carlos R.",
      date: "Ejemplo · Demo",
    },
    {
      stars: 5,
      quote: "«Trato cercano y puntual. La valoración inicial fue muy completa.»",
      author: "Laura M.",
      date: "Ejemplo · Demo",
    },
    {
      stars: 5,
      quote: "«Recomiendo la clínica si buscas un enfoque práctico y sin prisas en cada cita.»",
      author: "Javier P.",
      date: "Ejemplo · Demo",
    },
  ],
};
