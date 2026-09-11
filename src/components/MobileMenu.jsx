"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function MobileMenu({ isOpen, onClose }) {
  const [espOpen, setEspOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transform transition-transform duration-500 ease-in-out flex flex-col ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="h-20 border-b border-accent/60 flex items-center justify-between px-6 lg:px-8">
        <div className="text-white">
          <a href="/">
            <img
              src="/logo/logo-horizontal-negro.webp"
              alt="USE - Unidad de Segunda Especialidad"
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>
        <button
          onClick={onClose}
          className="text-white p-2 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center"
        >
          <Icon icon="solar:close-square-linear" className="text-2xl" style={{ strokeWidth: 1.5 }} />
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 gap-8">
        <a href="/" onClick={onClose} className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#003398] transition-colors w-fit">Inicio</a>
        <a href="/admision" onClick={onClose} className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#003398] transition-colors w-fit">Admisión</a>
        <div>
          <button
            onClick={() => setEspOpen(!espOpen)}
            className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#003398] transition-colors w-fit flex items-center gap-4"
          >
            Especialidades
            <Icon icon="solar:alt-arrow-down-linear" className={`text-3xl transition-transform duration-300 ${espOpen ? "rotate-180" : ""}`} style={{ strokeWidth: 1.5 }} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${espOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
            <div className="flex flex-col gap-3 pl-4 border-l border-accent/70">
              <a href="/especialidades/gestion-publica-contrataciones" onClick={onClose} className="text-white/70 text-lg tracking-wider uppercase hover:text-[#003398] transition-colors">
                Gestión Pública y Contrataciones del Estado
              </a>
              <a href="/especialidades/derecho-constitucional-ddhh" onClick={onClose} className="text-white/70 text-lg tracking-wider uppercase hover:text-[#003398] transition-colors">
                Derecho Constitucional y Derechos Humanos
              </a>
              <a href="/especialidades/derecho-penal-criminalidad-organizada" onClick={onClose} className="text-white/70 text-lg tracking-wider uppercase hover:text-[#003398] transition-colors">
                Derecho Penal y Criminalidad Organizada
              </a>
              <a href="/especialidades/investigacion-criminal" onClick={onClose} className="text-white/70 text-lg tracking-wider uppercase hover:text-[#003398] transition-colors">
                Investigación Criminal
              </a>
            </div>
          </div>
        </div>
        <a href="/eventos" onClick={onClose} className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#003398] transition-colors w-fit">Eventos</a>
        <a href="/contacto" onClick={onClose} className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#003398] transition-colors w-fit">Contacto</a>

      </div>
    </div>
  );
}
