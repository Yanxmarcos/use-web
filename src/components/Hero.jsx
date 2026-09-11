import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col relative border-b border-accent/60">
      <main className="flex-grow flex flex-col lg:grid lg:grid-cols-12 relative">
        <div className="col-span-5 xl:col-span-5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-accent/60 z-10 bg-white">
          <div className="text-xs tracking-widest uppercase mb-12 lg:mb-16 text-black/60 font-normal">
            ¡Obtén especialidad con los más destacados!
          </div>

          <h1 className="text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter uppercase leading-[0.85] mb-8 lg:mb-12 flex flex-col">
            <span>USE</span>
          </h1>

          <div className="absolute right-12 top-1/2 -translate-y-1/2 max-w-[14rem] hidden xl:block">
            <p className="text-base text-black/80 leading-relaxed font-normal">
              Unidad de Segunda<br />
              Especialidad de la<br />
              Facultad de Derecho y<br />
              CC. PP. de la Universidad<br />
              Nacional de Trujillo.
            </p>
          </div>

          <p className="text-sm md:text-base text-black/80 leading-relaxed font-normal mb-12 lg:mb-16 xl:hidden max-w-sm">
            Unidad de Segunda Especialidad de la Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Trujillo.
          </p>

          <div className="mt-auto pt-8 lg:pt-16">
            <a href="/admision" className="inline-flex items-center text-xs tracking-widest uppercase font-normal border-b border-accent pb-1 hover:text-[#003398] hover:border-[#003398] transition-colors group">
              Inscribirme<Icon icon="solar:arrow-right-up-linear" className="ml-2 text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{ strokeWidth: 1.5 }} />
            </a>
          </div>
        </div>

        <div className="col-span-7 xl:col-span-5 relative min-h-[50vh] lg:min-h-0 bg-white z-0 overflow-hidden lg:overflow-visible">
          <div className="absolute inset-0 lg:-left-20 lg:right-0 top-0 bottom-0 lg:hero-curve overflow-hidden">
            <img
              src="/img/hero.webp"
              alt="Giraffe in African savannah"
              className="w-full h-full object-cover object-[60%_center] lg:object-center transform scale-105 hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
          </div>
        </div>

        <div className="hidden xl:flex col-span-2 flex-col border-l border-accent/60 bg-white z-10">
          <a href="/especialidades/gestion-publica-contrataciones" className="flex-1 border-b border-accent/60 p-8 flex flex-col justify-center group hover:bg-black/5 transition-colors">
            <div className="text-xs mb-3 text-black/50 font-normal">01</div>
            <div className="text-sm tracking-widest uppercase font-normal leading-relaxed group-hover:translate-x-2 transition-transform">
              Gestión pública y Contrataciones del estado
            </div>
          </a>
          <a href="/especialidades/derecho-constitucional-ddhh" className="flex-1 border-b border-accent/60 p-8 flex flex-col justify-center group hover:bg-black/5 transition-colors">
            <div className="text-xs mb-3 text-black/50 font-normal">02</div>
            <div className="text-sm tracking-widest uppercase font-normal leading-relaxed group-hover:translate-x-2 transition-transform">
              Derecho Constitucional y Derechos Humanos
            </div>
          </a>
          <a href="/especialidades/derecho-penal-criminalidad-organizada" className="flex-1 border-b border-accent/60 p-8 flex flex-col justify-center group hover:bg-black/5 transition-colors">
            <div className="text-xs mb-3 text-black/50 font-normal">03</div>
            <div className="text-sm tracking-widest uppercase font-normal leading-relaxed group-hover:translate-x-2 transition-transform">
              Derecho Penal y Criminalidad Organizada
            </div>
          </a>
          <a href="/especialidades" className="flex-1 p-8 flex flex-col justify-end group bg-accent text-white hover:bg-[#80660f] transition-colors relative overflow-hidden">
            <div className="text-xs mb-3 text-white/70 font-normal">+</div>
            <div className="text-sm tracking-widest uppercase font-normal leading-relaxed">VER MÁS<br />ESPECIALIDADES</div>
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <Icon icon="solar:arrow-right-linear" className="text-xl" style={{ strokeWidth: 1.5 }} />
            </div>
          </a>
        </div>
      </main>

      <div className="grid grid-cols-12 border-t border-accent/60 bg-white">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-black text-white p-8 flex flex-col justify-between h-48 lg:h-auto border-b md:border-b-0 border-accent/60 relative overflow-hidden group">
          <img src="/img/admision.webp" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" alt="Earth Texture" />
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full border border-accent/80 flex items-center justify-center mb-8">
              <Icon icon="solar:clipboard-text-linear" className="text-xl" style={{ strokeWidth: 1.5 }} />
            </div>
            <div className="text-xs tracking-widest font-normal text-white/70 mb-8">
              Requisitos, fechas<br />y procedimientos
            </div>
          </div>
          <a href="/admision" className="relative z-10 flex items-center text-[0.65rem] tracking-[0.2em] uppercase font-normal hover:text-white transition-colors">
            PROCESO DE ADMISIÓN <Icon icon="solar:arrow-right-up-linear" className="ml-2 text-sm" style={{ strokeWidth: 1.5 }} />
          </a>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#003398] text-black p-8 flex items-end relative overflow-hidden h-48 lg:h-auto border-b lg:border-b-0 lg:border-r border-accent/60 group cursor-pointer">
          <div className="text-[0.65rem] text-white tracking-[0.2em] uppercase font-normal flex items-end gap-2 group-hover:-translate-y-1 transition-transform">
            <a href="/#about">CONOCE MÁS SOBRE<br /> ESTE PROGRAMA</a>
            <Icon icon="solar:arrow-down-linear" className="mb-1 animate-bounce text-sm" style={{ strokeWidth: 1.5 }} />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 p-8 flex items-center gap-6 lg:gap-8 lg:border-r border-accent/60 bg-white group cursor-pointer hover:bg-black/5 transition-colors">
          <div className="text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-none text-black/90">04</div>
          <div>
            <div className="text-xl lg:text-2xl font-medium tracking-tight uppercase mb-2">Especialidades</div>
            <div className="text-sm md:text-base text-black/70 mb-4 font-normal">Programas diseñados para profesionales que buscan excelencia.</div>
            <div className="flex items-center text-[0.65rem] tracking-[0.2em] uppercase font-normal border-b border-accent pb-0.5 w-fit group-hover:border-[#003398] hover:text-[#003398] transition-colors">
              <a href="/especialidades">Ver especialidades</a> <Icon icon="solar:arrow-right-up-linear" className="ml-2 text-sm" style={{ strokeWidth: 1.5 }} />
            </div>
          </div>
        </div>

        <div className="hidden lg:grid col-span-2 grid-cols-2 grid-rows-2">
          <a href="https://www.facebook.com/usefacderechount" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-r border-b border-accent/60 bg-white hover:bg-black hover:text-white transition-colors group">
            <Icon icon="ic:baseline-facebook" className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/usefacderechount/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-b border-accent/60 bg-black text-white hover:bg-[#003398] transition-colors group">
            <Icon icon="mdi:instagram" className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/company/usefacderechount/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-r border-accent/60 bg-black text-white hover:bg-[#003398] transition-colors group">
            <Icon icon="mdi:linkedin" className="text-2xl" />
          </a>
          <a href="https://www.tiktok.com/@usefacderechount" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors group">
            <Icon icon="ic:baseline-tiktok" className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
