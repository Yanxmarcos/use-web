"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="grid grid-cols-12 h-20 border-b border-black/15 relative z-40 bg-white">
        <div className="col-span-8 lg:col-span-3 flex items-center px-6 lg:px-8 border-r border-black/15">
          <a href="/" className="block group">
            <img
              src="/logo/logo-horizontal.webp"
              alt="USE - Unidad de Segunda Especialidad"
              className="h-10 w-auto object-contain group-hover:opacity-70 transition-opacity"
            />
          </a>
        </div>

        <div className="col-span-4 lg:hidden flex items-center justify-end px-6 border-l border-black/15">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-normal"
          >
            Menu <Icon icon="solar:hamburger-menu-linear" className="text-base" style={{ strokeWidth: 1.5 }} />
          </button>
        </div>

        <nav className="hidden lg:flex col-span-5 xl:col-span-6 items-center justify-center gap-10 xl:gap-16 text-xs uppercase tracking-[0.15em] font-normal border-r border-black/15">
          <a href="/" className="hover:text-[#003398] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#003398] hover:after:w-full after:transition-all">Inicio</a>
          <a href="/admision" className="hover:text-[#003398] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#003398] hover:after:w-full after:transition-all">Admisión</a>
          <a href="/eventos" className="hover:text-[#003398] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#003398] hover:after:w-full after:transition-all">Eventos</a>
          <a href="/contacto" className="hover:text-[#003398] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#003398] hover:after:w-full after:transition-all">Contacto</a>
        </nav>

        <div className="hidden lg:flex col-span-4 xl:col-span-3">
          <div className="w-auto min-w-[140px] flex items-center justify-center bg-black text-white text-xs uppercase tracking-widest cursor-pointer hover:bg-black/80 transition-colors relative group border-r border-white/20 px-4">
            Especialidades
            <div className="absolute top-full left-0 w-[320px] bg-black border-t border-white/10 hidden group-hover:block z-50">
              <a href="/especialidades/gestion-publica-contrataciones" className="block px-5 py-3.5 text-left text-[0.7rem] tracking-wider uppercase hover:bg-white/10 transition-colors border-b border-white/10">
                Gestión Pública y Contrataciones del Estado
              </a>
              <a href="/especialidades/derecho-constitucional-ddhh" className="block px-5 py-3.5 text-left text-[0.7rem] tracking-wider uppercase hover:bg-white/10 transition-colors border-b border-white/10">
                Derecho Constitucional y Derechos Humanos
              </a>
              <a href="/especialidades/derecho-penal-criminalidad-organizada" className="block px-5 py-3.5 text-left text-[0.7rem] tracking-wider uppercase hover:bg-white/10 transition-colors border-b border-white/10">
                Derecho Penal y Criminalidad Organizada
              </a>
              <a href="/especialidades/investigacion-criminal" className="block px-5 py-3.5 text-left text-[0.7rem] tracking-wider uppercase hover:bg-white/10 transition-colors">
                Investigación Criminal
              </a>
            </div>
          </div>
          <a href="/admision" className="w-2/3 xl:w-3/4 bg-[#003398] text-white flex items-center justify-center px-6 xl:px-8 text-xs uppercase tracking-widest hover:bg-[#002277] transition-colors group">
            Inscribirme<Icon icon="solar:arrow-right-up-linear" className="ml-2 text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" style={{ strokeWidth: 1.5 }} />
          </a>
        </div>
      </header>
    </>
  );
}
