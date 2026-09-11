import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchEventos } from "@/services/api";
import { Icon } from "@iconify/react";

export const metadata = {
  title: "Eventos Académicos | USE",
  description: "Conoce todos los eventos académicos de la Unidad de Segunda Especialidad de la Facultad de Derecho UNT",
};

export default async function EventosPage() {
  const eventos = await fetchEventos();
  const formatFecha = (evento) => {
    const meses = {
      enero: "Enero", febrero: "Febrero", marzo: "Marzo", abril: "Abril",
      mayo: "Mayo", junio: "Junio", julio: "Julio", agosto: "Agosto",
      septiembre: "Septiembre", octubre: "Octubre", noviembre: "Noviembre", diciembre: "Diciembre"
    };
    const mesLargo = meses[evento.mes] || evento.mes;
    if (evento.horas.length === 1) {
      return `${evento.horas[0]} de ${mesLargo}`;
    } else if (evento.horas.length === 2) {
      return `${evento.horas[0]} y ${evento.horas[1]} de ${mesLargo}`;
    } else {
      return `${evento.horas[0]}, ${evento.horas[1]} y ${evento.horas[2]} de ${mesLargo}`;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="border-b border-accent/60">
        <div className="px-6 lg:px-12 py-12 lg:py-20">
          <h1 className="text-4xl lg:text-6xl font-medium tracking-tighter uppercase leading-none mb-8">
            EVENTOS ACADÉMICOS
          </h1>
          <p className="text-sm md:text-base text-black/70 font-normal max-w-2xl">
            Explora las actividades académicas que la Unidad de Segunda Especialidad de la Facultad de Derecho y CC. PP. ofrece para tu formación profesional.
          </p>
        </div>

        <div className="flex flex-col border-t border-accent/60 mb-24">
          {eventos.map((evento, i) => (
            <a
              key={evento.id}
              href={`/eventos/${evento.id}`}
              className={`grid grid-cols-1 md:grid-cols-12 group hover:bg-black/5 transition-colors border-b border-accent/60`}
            >
              <div className="md:col-span-3 lg:col-span-2 p-6 lg:p-8 flex items-center border-b md:border-b-0 md:border-r border-accent/60">
                <div className="text-xs tracking-widest uppercase text-black/60 font-normal">
                  {formatFecha(evento)}
                </div>
              </div>
              <div className="md:col-span-7 lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-accent/60">
                <div className="text-xs tracking-widest uppercase text-[#1F651C] font-normal mb-2 lg:mb-3">{evento.tipo}</div>
                <h2 className="text-xl lg:text-3xl font-medium tracking-tight uppercase group-hover:translate-x-2 transition-transform">{evento.titulo}</h2>
                <p className="text-sm text-black/70 font-normal mt-3 max-w-2xl">{evento.descripcionCorta}</p>
              </div>
              <div className="md:col-span-2 p-6 lg:p-8 hidden md:flex items-center justify-end">
                <div className="w-10 h-10 rounded-full border border-accent/70 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <Icon icon="solar:arrow-right-up-linear" className="text-sm" style={{ strokeWidth: 1.5 }} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
