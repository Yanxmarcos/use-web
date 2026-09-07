import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { especialidades } from "@/data/especialidades";
import { Icon } from "@iconify/react";

export const metadata = {
  title: "Especialidades | USE",
  description: "Conoce las especialidades que ofrece la Unidad de Segunda Especialidad de la Facultad de Derecho UNT",
};

export default function EspecialidadesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="border-b border-black/15 py-12 lg:py-20">
          <div className="px-6 lg:px-12">
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tighter uppercase leading-none mb-8">
              ESPECIALIDADES
            </h1>
            <p className="text-sm md:text-base text-black/70 font-normal max-w-2xl">
              Programas de segunda especialidad diseñados para profesionales del derecho que buscan excelencia y especialización en áreas clave del sistema jurídico.
            </p>
          </div>
        </section>

        {/* Lista de especialidades */}
        <section className="border-b border-black/15 mb-24">
          {especialidades.map((esp, i) => (
            <a
              key={esp.id}
              href={`/especialidades/${esp.id}`}
              className={`grid grid-cols-1 md:grid-cols-12 group hover:bg-black/5 transition-colors border-b border-black/15 `}
            >
              {/* Número */}
              <div className="md:col-span-1 p-6 lg:p-8 flex items-center border-b md:border-b-0 md:border-r border-black/15">
                <span className="text-3xl lg:text-4xl font-medium tracking-tighter text-black/20">
                  {esp.numero}
                </span>
              </div>

              {/* Imagen */}
              <div className="md:col-span-4 p-6 lg:p-8 border-b md:border-b-0 md:border-r border-black/15">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={esp.imagen}
                    alt={esp.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="md:col-span-6 p-6 lg:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/15">
                <div className="text-xs tracking-widest uppercase font-normal mb-3" style={{ color: esp.color }}>
                  ESPECIALIDAD {esp.numero}
                </div>
                <h2 className="text-xl lg:text-3xl font-medium tracking-tight uppercase mb-4 group-hover:translate-x-2 transition-transform">
                  {esp.titulo}
                </h2>
                <p className="text-sm text-black/70 font-normal max-w-lg">
                  {esp.descripcionCorta}
                </p>
              </div>

              {/* Flecha */}
              <div className="md:col-span-1 p-6 lg:p-8 hidden md:flex items-center justify-end">
                <div className="w-10 h-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <Icon icon="solar:arrow-right-up-linear" className="text-sm" style={{ strokeWidth: 1.5 }} />
                </div>
              </div>
            </a>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
