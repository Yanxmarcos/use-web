export const especialidades = [
  {
    id: "gestion-publica-contrataciones",
    titulo: "Gestión Pública y Contrataciones del Estado",
    numero: "01",
    imagen: "/img/special/1.webp",
    descripcionCorta: "Forma profesionales especializados en la gestión pública y el régimen de contrataciones del Estado.",
    descripcionLarga: "Una propuesta orientada a combinar conocimientos teóricos de nivel avanzado con el desarrollo de competencias prácticas, en un esfuerzo por fortalecer la capacidad de nuestros egresados a fin de que adquieran un conocimiento profundo y actualizado de la normativa vigente. Con un enfoque interdisciplinario proponemos una visión más amplia y detallada de la Nueva Ley de Contrataciones del Estado y su normativa, garantizando así una formación integral acorde a las necesidades actuales del campo de la Administración Pública.",
    color: "#003398"
  },
  {
    id: "derecho-constitucional-ddhh",
    titulo: "Derecho Constitucional y Derechos Humanos",
    numero: "02",
    imagen: "/img/special/2.webp",
    descripcionCorta: "Profundiza en el estudio del derecho constitucional y la protección de los derechos fundamentales.",
    descripcionLarga: "Un estudio exhaustivo de la Constitución, su contenido, naturaleza, estructura y función como norma suprema del ordenamiento jurídico. Estudiarás los derechos, libertades y deberes reconocidos a las personas (derecho a la vida, libertad de expresión, igualdad, debido proceso, entre otros), así como los mecanismos para su protección para intervenir con eficacia en la resolución de casos que involucran derechos civiles, políticos, económicos, sociales y culturales, respetando siempre los principios fundamentales constitucionales.",
    color: "#1F651C"
  },
  {
    id: "derecho-penal-criminalidad-organizada",
    titulo: "Derecho Penal y Criminalidad Organizada",
    numero: "03",
    imagen: "/img/special/3.webp",
    descripcionCorta: "Capacita en el ámbito del derecho penal y la investigación de la criminalidad organizada.",
    descripcionLarga: "Analizar las normas que definen los delitos y las penas, así como los principios generales del Derecho Penal, en un esfuerzo por fortalecer la capacidad de nuestros estudiantes para enfrentar y resolver los desafíos que impone la criminalidad organizada, contribuyendo efectivamente a la seguridad y justicia en diversos contextos. Mediante un enfoque interdisciplinario, permite una visión más amplia y detallada de los problemas legales contemporáneos, garantizando una formación integral y de vanguardia, que responda a las necesidades del campo del derecho.",
    color: "#9C7D13"
  },
  {
    id: "investigacion-criminal",
    titulo: "Investigación Criminal",
    numero: "04",
    imagen: "/img/special/4.webp",
    descripcionCorta: "Forma expertos en técnica de investigación criminal y ciencias forenses.",
    descripcionLarga: "Buscamos capacitar a los futuros profesionales con las herramientas necesarias para identificar, investigar y desarticular actividades delictivas complejas, mediante el uso de metodologías especializadas y un enfoque basado en la evidencia; esto permite una visión más amplia y detallada de los problemas legales y criminológicos contemporáneos. Esta orientación especializada asegura que nuestros egresados estén capacitados para actuar de manera efectiva en la atención y resolución de casos relacionados con delitos de alta complejidad.",
    color: "#003398"
  }
];

export function getEspecialidadById(id) {
  return especialidades.find(esp => esp.id === id);
}
