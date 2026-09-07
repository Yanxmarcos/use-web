"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function EventModal({ evento }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!evento) return;

    const modalVisto = sessionStorage.getItem("eventModalVisto");
    if (!modalVisto) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [evento]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("eventModalVisto", "true");
  };

  const handleVerCompleto = () => {
    sessionStorage.setItem("eventModalVisto", "true");
  };

  if (!evento || !isOpen) return null;

  const poster = evento.posters?.[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white max-w-lg w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Botones superiores */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
          {/* Botón ver completo */}
          <a
            href={`/eventos/${evento.id}`}
            onClick={handleVerCompleto}
            className="bg-[#003398] text-white px-4 py-2 flex items-center gap-2 hover:bg-[#002277] transition-colors"
          >
            <span className="text-xs tracking-widest uppercase font-normal">Ver completo</span>
            <Icon icon="solar:arrow-right-up-linear" className="text-sm" style={{ strokeWidth: 1.5 }} />
          </a>

          {/* Botón cerrar */}
          <button
            onClick={handleClose}
            className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <Icon icon="solar:close-linear" className="text-lg" style={{ strokeWidth: 1.5 }} />
          </button>
        </div>

        {/* Poster */}
        {poster && (
          <div className="w-full">
            <img
              src={poster}
              alt={evento.titulo}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
