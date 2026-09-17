import { Icon } from "@iconify/react";

export default function Eventos({ eventos }) {
  const eventosRecientes = eventos || [];
  
  const formatFecha = (evento) => {
    const meses = {
      enero: "Jan", febrero: "Feb", marzo: "Mar", abril: "Apr",
      mayo: "May", junio: "Jun", julio: "Jul", agosto: "Aug",
      septiembre: "Sep", octubre: "Oct", noviembre: "Nov", diciembre: "Dec"
    };
    const mesCorto = meses[evento.mes] || evento.mes;
    if (evento.horas.length === 1) {
      return `${mesCorto} ${evento.horas[0]}`;
    } else if (evento.horas.length === 2) {
      return `${mesCorto} ${evento.horas[0]} & ${evento.horas[1]}`;
    } else {
      return `${mesCorto} ${evento.horas[0]}, ${evento.horas[1]} & ${evento.horas[2]}`;
    }
  };

  return (
    <section id="eventos" className="border-b border-accent/60 bg-[#FBF7EA] py-20 lg:py-32">
      <div className="px-6 lg:px-12 mb-12 flex justify-between items-end">
        <h2 className="text-4xl lg:text-6xl font-medium tracking-tighter uppercase leading-none">
          EVENTOS ACADÉMICOS
        </h2>
        <a href="/eventos" className="hidden md:flex items-center text-xs tracking-widest uppercase font-normal border-b border-accent pb-1 hover:text-[#003398] hover:border-[#003398] transition-colors">
          Ver completo <Icon icon="solar:arrow-right-linear" className="ml-2 text-sm" style={{ strokeWidth: 1.5 }} />
        </a>
      </div>

      <div className="flex flex-col border-t border-accent/60">
        {eventosRecientes.map((evento, i) => (
          <a
            key={evento.id}
            href={`/eventos/${evento.id}`}
            className={`grid grid-cols-1 md:grid-cols-12 group hover:bg-accent/10 transition-colors border-b border-accent/60`}
          >
            <div className="md:col-span-3 lg:col-span-2 p-6 lg:p-8 flex items-center border-b md:border-b-0 md:border-r border-accent/60 text-xs tracking-widest uppercase text-black/60 font-normal">
              {formatFecha(evento)}
            </div>
            <div className="md:col-span-7 lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-accent/60">
              <div className="text-xs tracking-widest uppercase text-[#1F651C] font-normal mb-2 lg:mb-3">{evento.tipo}</div>
              <h3 className="text-xl lg:text-3xl font-medium tracking-tight uppercase group-hover:translate-x-2 transition-transform">{evento.titulo}</h3>
            </div>
            <div className="md:col-span-2 p-6 lg:p-8 hidden md:flex items-center justify-end">
              <div className="w-10 h-10 rounded-full border border-accent/70 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon icon="solar:arrow-right-up-linear" className="text-sm" style={{ strokeWidth: 1.5 }} />
              </div>
            </div>
          </a>
        ))}
        <div className="p-6 md:hidden flex justify-center border-t border-accent/60">
          <a href="/eventos" className="flex items-center text-xs tracking-widest uppercase font-normal border-b border-accent pb-1 hover:text-[#003398] hover:border-[#003398] transition-colors">
            Ver completo <Icon icon="solar:arrow-right-linear" className="ml-2 text-sm" style={{ strokeWidth: 1.5 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
