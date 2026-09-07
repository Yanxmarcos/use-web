"use client";

import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  const [showCredits, setShowCredits] = useState(false);
  const creditsRef = useRef(null);

  useEffect(() => {
    if (!showCredits) return;

    const handleClickOutside = (e) => {
      if (creditsRef.current && !creditsRef.current.contains(e.target)) {
        setShowCredits(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCredits]);

  return (
    <footer className="bg-black text-white pt-20 lg:pt-24 pb-12 px-6 lg:px-12 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 lg:mb-24">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <a href="/" className="block group">
            <img
              src="/logo/logo-horizontal-negro.webp"
              alt="USE - Unidad de Segunda Especialidad"
              className="h-8 md:h-10 w-auto object-contain group-hover:opacity-70 transition-opacity"
            />
          </a>
          <div className="mt-8 lg:mt-0 flex items-center gap-6">
            <a href="https://unitru.edu.pe" target="_blank" rel="noopener noreferrer" className="block group">
              <img
                src="/logo/logo-unt.webp"
                alt="Universidad Nacional de Trujillo"
                className="h-14 md:h-20 w-auto object-contain group-hover:opacity-70 transition-opacity"
              />
            </a>
            <a href="https://facder.unitru.edu.pe" target="_blank" rel="noopener noreferrer" className="block group">
              <img
                src="/logo/logo-derecho.webp"
                alt="Facultad de Derecho y Ciencias Políticas de la UNT"
                className="h-15 md:h-21 w-auto object-contain group-hover:opacity-70 transition-opacity"
              />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-7 flex flex-col gap-4">
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#9C7D13] font-normal mb-2 lg:mb-4">Navegación</div>
          <a href="/" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">Inicio</a>
          <a href="/admision" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">Admisión</a>
          <a href="/eventos" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">Eventos</a>
          <a href="/#contacto" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">Contacto</a>
          <a href="/especialidades" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">Especialidades</a>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#9C7D13] font-normal mb-2 lg:mb-4">Información</div>
          <a href="/#about" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">Acerca de</a>
          <a href="/#director" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">Autoridad</a>
          <a href="#" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">Docentes</a>
          <a href="/#faq" className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70">FAQ</a>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#9C7D13] font-normal mb-2 lg:mb-4">Contacto</div>
          <a href="mailto:se.derecho@unitru.edu.pe" className="text-xs md:text-sm font-normal hover:text-white transition-colors text-white/70">se.derecho@unitru.edu.pe</a>
          <a href="tel:+51925405280" className="text-xs md:text-sm font-normal hover:text-white transition-colors text-white/70">+51 925 405 280</a>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/usefacderechount" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Icon icon="ic:baseline-facebook" className="text-xl" />
            </a>
            <a href="https://www.instagram.com/usefacderechount/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Icon icon="mdi:instagram" className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/company/usefacderechount/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Icon icon="mdi:linkedin" className="text-xl" />
            </a>
            <a href="https://www.tiktok.com/@usefacderechount" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Icon icon="ic:baseline-tiktok" className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 text-[0.65rem] tracking-widest font-normal text-white/40">
        <div>&copy; {new Date().getFullYear()} Unidad de Segunda Especialidad de la Facultad de Derecho y Ciencias Políticas de la UNT. Todos los derechos reservados.</div>
        <div className="flex gap-6 md:gap-8 flex-wrap relative">
          <button 
            onClick={() => setShowCredits(!showCredits)}
            className="hover:text-white transition-colors"
          >
            Designed & Developed
          </button>

          {/* Credits popover */}
          {showCredits && (
            <div 
              ref={creditsRef}
              className="absolute bottom-full right-0 mb-2 bg-black border border-white/30 p-3 min-w-[220px] z-50"
            >
              <button 
                onClick={() => setShowCredits(false)}
                className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-white/50 hover:text-white"
              >
                <Icon icon="solar:close-linear" className="text-xs" style={{ strokeWidth: 1.5 }} />
              </button>
              <div className="space-y-2 mt-2">
                <div>
                  <a href="https://www.linkedin.com/in/yanxmarcos-chan-vasquez/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    Chan Vasquez Yanxmarcos
                  </a>
                  <div className="text-white/40">yanxmarcoschan@gmail.com</div>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/eliaser-avila-zamudio/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    Avila Zamaudio Eliaser Isai
                  </a>
                  <div className="text-white/40">avila.zamudio.bas@gmail.com</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
