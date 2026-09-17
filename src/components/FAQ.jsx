"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "Si no soy profesional de Derecho, ¿puedo llevar alguna especialidad?",
    answer: "Las especializaciones están dirigidas a los profesionales del Derecho y a aquellos profesionales de otras carreras afines o que guarden relación (ya sea académica o por experiencia) con la especialidad a llevar."
  },
  {
    question: "¿Que tipo de certificación obtendré al culminar la especialidad?",
    answer: "El título de especialista es a Nombre de la Nación e inscrito en el registro de grados y títulos de la SUNEDU."
  },
  {
    question: "¿Las clases son presenciales o virtuales?",
    answer: "Las clases son semipresenciales. Los cursos (05 por ciclo) se realizan de manera modular (consecutivamente) y constan de 5 semanas cada uno; de los cuales 04 sesiones serán de manera virtual y una quinta de forma presencial."
  },
  {
    question: "¿Si no tengo todos los requisitos, puedo inscribirme?",
    answer: "Puedes inscribirte de manera virtual, de no tener todos los requisitos, puedes llenar y enviar la CARTA DE COMPROMISO donde se comprometerá a hacer llegar el (los) requisito(s) hasta cierto día, en la Oficina de Segunda Especialidad de la Facultad de Derecho y Ciencias Políticas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="border-b border-accent/60 bg-[#F0F5FF] py-20 lg:py-32 px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
      <div className="lg:w-1/3">
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter uppercase mb-6 leading-none">Preguntas<br />Frecuentes.</h2>
        <p className="text-sm md:text-base text-black/70 font-normal mb-8">Si no encuentras una respuesta a tu duda puedes contactarnos directamente.</p>
        <a href="/#contacto" className="text-xs tracking-widest uppercase font-normal border-b border-accent pb-1 hover:text-[#003398] hover:border-[#003398] transition-colors inline-flex items-center">
          Contáctanos <Icon icon="solar:arrow-right-linear" className="ml-2 text-sm" style={{ strokeWidth: 1.5 }} />
        </a>
      </div>

      <div className="lg:w-2/3 border-t border-accent/60">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-accent/60">
            <button
              className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight uppercase group-hover:text-[#003398] transition-colors pr-4">{faq.question}</span>
              <Icon
                icon="solar:add-circle-linear"
                className={`text-2xl transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-45" : ""}`}
                style={{ strokeWidth: 1.5 }}
              />
            </button>
            <div className={`${openIndex === index ? "block" : "hidden"} pb-8 text-sm md:text-base text-black/70 font-normal max-w-2xl pr-8`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
