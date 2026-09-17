"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="grid grid-cols-12 h-20 border-b border-accent relative z-40 bg-primary">
        <div className="col-span-8 lg:col-span-3 flex items-center px-6 lg:px-8 bg-white border-r border-accent">
          <a href="/" className="block group">
            <img
              src="/logo/logo-horizontal.webp"
              alt="USE - Unidad de Segunda Especialidad"
              className="h-10 w-auto object-contain group-hover:opacity-70 transition-opacity"
            />
          </a>
        </div>

        <div className="col-span-4 lg:hidden flex items-center justify-end px-6 border-l border-accent">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-normal text-white hover:text-accent transition-colors"
          >
            Menu <Icon icon="solar:hamburger-menu-linear" className="text-base" style={{ strokeWidth: 1.5 }} />
          </button>
        </div>

        <nav className="hidden lg:grid lg:grid-cols-4 col-span-5 xl:col-span-6 text-xs uppercase tracking-[0.15em] font-normal text-white">
          <a href="/" className="flex items-center justify-center border-r border-accent hover:bg-accent hover:text-[#101828] focus-visible:bg-accent focus-visible:text-[#101828] transition-colors">Inicio</a>
          <a href="/admision" className="flex items-center justify-center border-r border-accent hover:bg-accent hover:text-[#101828] focus-visible:bg-accent focus-visible:text-[#101828] transition-colors">Admisión</a>
          <a href="/eventos" className="flex items-center justify-center border-r border-accent hover:bg-accent hover:text-[#101828] focus-visible:bg-accent focus-visible:text-[#101828] transition-colors">Eventos</a>
          <a href="/contacto" className="flex items-center justify-center border-r border-accent hover:bg-accent hover:text-[#101828] focus-visible:bg-accent focus-visible:text-[#101828] transition-colors">Contacto</a>
        </nav>

        <div className="hidden lg:flex col-span-4 xl:col-span-3">
          <div className="w-1/2 flex items-center justify-center bg-[#00266F] text-white text-xs uppercase tracking-widest hover:bg-accent hover:text-[#101828] focus-within:bg-accent focus-within:text-[#101828] transition-colors relative group border-r border-accent">
            <a href="/especialidades" className="w-full h-full flex items-center justify-center px-3">Especialidades</a>
            <div className="absolute top-full left-0 w-[320px] bg-[#00266F] text-white border-t border-accent hidden group-hover:block group-focus-within:block z-50">
              <a href="/especialidades/gestion-publica-contrataciones" className="block px-5 py-3.5 text-left text-[0.7rem] tracking-wider uppercase hover:bg-accent hover:text-[#101828] transition-colors border-b border-accent/70">
                Gestión Pública y Contrataciones del Estado
              </a>
              <a href="/especialidades/derecho-constitucional-ddhh" className="block px-5 py-3.5 text-left text-[0.7rem] tracking-wider uppercase hover:bg-accent hover:text-[#101828] transition-colors border-b border-accent/70">
                Derecho Constitucional y Derechos Humanos
              </a>
              <a href="/especialidades/derecho-penal-criminalidad-organizada" className="block px-5 py-3.5 text-left text-[0.7rem] tracking-wider uppercase hover:bg-accent hover:text-[#101828] transition-colors border-b border-accent/70">
                Derecho Penal y Criminalidad Organizada
              </a>
              <a href="/especialidades/investigacion-criminal" className="block px-5 py-3.5 text-left text-[0.7rem] tracking-wider uppercase hover:bg-accent hover:text-[#101828] transition-colors">
                Investigación Criminal
              </a>
            </div>
          </div>
          <a href="/admision" className="w-1/2 bg-accent text-[#101828] flex items-center justify-center px-3 text-xs uppercase tracking-widest border-r border-accent hover:bg-[#8C7011] hover:text-white focus-visible:bg-[#8C7011] focus-visible:text-white transition-colors group">
            Inscribirme<Icon icon="solar:arrow-right-up-linear" className="ml-2 text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" style={{ strokeWidth: 1.5 }} />
          </a>
        </div>
      </header>
    </>
  );
}
