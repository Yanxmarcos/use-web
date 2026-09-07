"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const especialidades = [
  {
    num: "01",
    title: "Gestión Pública y Contrataciones del Estado",
    img: "/img/special/1.webp",
    href: "/especialidades/gestion-publica-contrataciones"
  },
  {
    num: "02",
    title: "Derecho Constitucional y Derechos Humanos",
    img: "/img/special/2.webp",
    href: "/especialidades/derecho-constitucional-ddhh"
  },
  {
    num: "03",
    title: "Derecho Penal y Criminalidad Organizada",
    img: "/img/special/3.webp",
    href: "/especialidades/derecho-penal-criminalidad-organizada"
  },
  {
    num: "04",
    title: "Investigación Criminal",
    img: "/img/special/4.webp",
    href: "/especialidades/investigacion-criminal"
  }
];

export default function Especialidades() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? especialidades.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === especialidades.length - 1 ? 0 : c + 1));

  return (
    <section id="especialidades" className="border-b border-black/15 bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/15 lg:sticky lg:top-0 lg:h-screen">
          <div className="text-xs tracking-widest uppercase text-white/50 font-normal mb-8">
            ESPECIALIDADES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter uppercase leading-[0.9] mb-8">
            04<br />SEGUNDAS<br />ESPECIALIDADES
          </h2>
          <p className="text-base lg:text-lg text-white/70 font-normal max-w-md mb-12">
            Oferta académica actualizada que responde a los desafíos del mundo jurídico moderno.
          </p>
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <Icon icon="solar:arrow-left-linear" className="text-xl" style={{ strokeWidth: 1.5 }} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <Icon icon="solar:arrow-right-linear" className="text-xl" style={{ strokeWidth: 1.5 }} />
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          {especialidades.map((esp, i) => (
            <a
              key={i}
              href={esp.href}
              className={`aspect-square lg:aspect-auto lg:h-[70vh] relative overflow-hidden group ${
                i < especialidades.length - 1 ? "border-b border-white/15" : ""
              } ${i !== current ? "hidden lg:block" : ""}`}
            >
              <img
                src={esp.img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={esp.title}
              />
              <div className="absolute bottom-0 left-0 p-8 lg:p-12 bg-gradient-to-t from-black/80 to-transparent w-full">
                <div className="text-xs tracking-widest uppercase font-normal mb-2 text-[#9C7D13]">{esp.num}</div>
                <h3 className="text-2xl lg:text-3xl font-medium tracking-tight uppercase">{esp.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
