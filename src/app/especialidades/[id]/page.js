import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { especialidades, getEspecialidadById } from "@/data/especialidades";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const especialidad = getEspecialidadById(id);
  if (!especialidad) {
    return { title: "Especialidad no encontrada | USE" };
  }
  return {
    title: `${especialidad.titulo} | USE - Unidad de Segunda Especialidad`,
    description: especialidad.descripcionCorta,
  };
}

export async function generateStaticParams() {
  return especialidades.map((esp) => ({
    id: esp.id,
  }));
}

export default async function EspecialidadPage({ params }) {
  const { id } = await params;
  const especialidad = getEspecialidadById(id);
  
  if (!especialidad) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="border-b border-accent/60">
        {/* Hero con imagen y título */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          {/* Lado izquierdo - Título y descripción */}
          <div className="p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-accent/60">
            <a href="/especialidades" className="inline-flex items-center text-xs tracking-widest uppercase font-normal border-b border-accent pb-1 hover:text-[#003398] hover:border-[#003398] transition-colors mb-8 w-fit">
              <Icon icon="solar:arrow-left-linear" className="mr-2 text-sm" style={{ strokeWidth: 1.5 }} />
              Volver a especialidades
            </a>
            
            <div className="text-xs tracking-widest uppercase font-normal mb-4" style={{ color: especialidad.color }}>
              ESPECIALIDAD {especialidad.numero}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter uppercase leading-none mb-6">
              {especialidad.titulo}
            </h1>
            
            <p className="text-base text-black/70 font-normal leading-relaxed max-w-lg">
              {especialidad.descripcionLarga}
            </p>
          </div>

          {/* Lado derecho - Imagen */}
          <div className="p-8 lg:p-16 flex items-center justify-center">
            <div className="w-full max-w-md aspect-square overflow-hidden">
              <img
                src={especialidad.imagen}
                alt={especialidad.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Plan de Estudios */}
        <section className="p-8 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs tracking-widest uppercase font-normal mb-8" style={{ color: especialidad.color }}>
              Plan de Estudios
            </h2>

            {/* Próximamente */}
            <div className="bg-black text-white p-8 lg:p-12 mb-12">
              <div className="flex items-center gap-4 mb-4">
                <Icon icon="solar:calendar-bold" className="text-2xl text-accent" />
                <span className="text-xs tracking-widest uppercase font-normal">
                  Próximamente
                </span>
              </div>
              <p className="text-sm text-white/70 font-normal">
                El plan de estudios se publicará en las próximas fechas. Mantente atento a nuestras actualizaciones.
              </p>
            </div>

            {/* Estructura placeholder */}
            <div className="space-y-8">
              {/* Semestre 1 */}
              <div className="border border-accent/60 p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/70">
                    <span className="text-lg font-medium tracking-tighter">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight uppercase">Primer Semestre</h3>
                    <p className="text-xs text-black/50 uppercase tracking-widest">Por definir</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-black/40">
                      <div className="w-2 h-2 bg-black/10 rounded-full"></div>
                      <span>Materia {i} - Próximamente</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semestre 2 */}
              <div className="border border-accent/60 p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/70">
                    <span className="text-lg font-medium tracking-tighter">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight uppercase">Segundo Semestre</h3>
                    <p className="text-xs text-black/50 uppercase tracking-widest">Por definir</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-black/40">
                      <div className="w-2 h-2 bg-black/10 rounded-full"></div>
                      <span>Materia {i} - Próximamente</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nota */}
            <div className="mt-8 flex items-start gap-3 text-sm text-black/60">
              <Icon icon="solar:info-circle-linear" className="text-accent mt-0.5" style={{ strokeWidth: 1.5 }} />
              <span>
                El plan de estudios está sujeto a cambios. Las materias y créditos serán confirmados por la coordinación de la especialidad.
              </span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
