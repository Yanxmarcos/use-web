import { Icon } from "@iconify/react";

export default function EventoDetalle({ evento }) {
  const formatFechaCorta = (evento) => {
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

  const redesSociales = evento.redes || {};
  const tieneRedes = Object.values(redesSociales).some(url => url);
  const posters = evento.posters || (evento.poster ? [evento.poster] : []);

  return (
    <main className="border-b border-accent/60">
      {/* Título del evento */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <a href="/eventos" className="inline-flex items-center text-xs tracking-widest uppercase font-normal border-b border-accent pb-1 hover:text-[#003398] hover:border-[#003398] transition-colors mb-8">
            <Icon icon="solar:arrow-left-linear" className="mr-2 text-sm" style={{ strokeWidth: 1.5 }} />
            Volver a eventos
          </a>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs tracking-widest uppercase font-normal bg-[#9C7D13] text-white px-3 py-1">
              {evento.tipo}
            </span>
            <span className="text-xs tracking-widest uppercase font-normal text-black/60">
              {formatFechaCorta(evento)}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter uppercase leading-none max-w-4xl">
            {evento.titulo}
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Lado izquierdo - Descripción y Programa */}
          <div className="lg:col-span-8">
            {/* Descripción */}
            <div className="mb-12">
              <h2 className="text-xs tracking-widest uppercase text-[#9C7D13] font-normal mb-6">
                Descripción
              </h2>
              <p className="text-base md:text-lg text-black/80 font-normal leading-relaxed mb-6">
                {evento.descripcionLarga}
              </p>
              {evento.resolucion && (
                <div className="flex items-center gap-3 text-sm text-black/60">
                  <Icon icon="solar:document-text-linear" className="w-5 h-5 flex-shrink-0 text-[#9C7D13]" style={{ strokeWidth: 1.5 }} />
                  <span>{evento.resolucion}</span>
                </div>
              )}
            </div>

            {/* Programa */}
            <div className="mb-12">
              <h2 className="text-xs tracking-widest uppercase text-[#9C7D13] font-normal mb-6">
                Programa y Ponentes
              </h2>
              <div className="space-y-6">
                {evento.programa.map((item, index) => (
                  <div key={index} className="border-l-2 border-accent pl-6 py-2">
                    <div className="text-xs tracking-widest uppercase text-[#1F651C] font-normal mb-2">
                      {item.fecha}
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">
                      {item.tema}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-black/70">
                      <Icon icon="solar:microphone-linear" className="w-4 h-4 flex-shrink-0 text-[#9C7D13]" style={{ strokeWidth: 1.5 }} />
                      <span>{item.ponente}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Posters */}
              {posters.length > 0 && (
                <div className="mb-8 mt-8">
                  <h2 className="text-xs tracking-widest uppercase text-[#9C7D13] font-normal mb-4">
                    Publicación
                  </h2>
                  <div className={`grid gap-4 ${posters.length === 1 ? 'grid-cols-1' : posters.length === 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                    {posters.map((poster, index) => (
                      <div key={index} className="border border-accent/60 p-2 bg-white">
                        <img
                          src={poster}
                          alt={`${evento.titulo} - Publicación ${index + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Lado derecho - Detalles, Posters y Redes */}
          <div className="lg:col-span-4">
            {/* Panel de detalles */}
            <div className="bg-black text-white p-8 lg:p-10 mb-8">
              <h2 className="text-xs tracking-widest uppercase text-[#9C7D13] font-normal mb-8">
                Detalles del Evento
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon icon="solar:calendar-linear" className="w-5 h-5 flex-shrink-0 text-[#9C7D13] mt-1" style={{ strokeWidth: 1.5 }} />
                  <div>
                    <div className="text-xs tracking-widest uppercase text-white/60 mb-1">Fechas</div>
                    <div className="text-sm">{evento.detalles.fechas}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon icon="solar:clock-circle-linear" className="w-5 h-5 flex-shrink-0 text-[#9C7D13] mt-1" style={{ strokeWidth: 1.5 }} />
                  <div>
                    <div className="text-xs tracking-widest uppercase text-white/60 mb-1">Horario</div>
                    <div className="text-sm">{evento.detalles.horario}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon icon="solar:smartphone-linear" className="w-5 h-5 flex-shrink-0 text-[#9C7D13] mt-1" style={{ strokeWidth: 1.5 }} />
                  <div>
                    <div className="text-xs tracking-widest uppercase text-white/60 mb-1">Modalidad</div>
                    <div className="text-sm">{evento.detalles.modalidad}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon icon="solar:medal-star-linear" className="w-5 h-5 flex-shrink-0 text-[#9C7D13] mt-1" style={{ strokeWidth: 1.5 }} />
                  <div>
                    <div className="text-xs tracking-widest uppercase text-white/60 mb-1">Certificación</div>
                    <div className="text-sm">{evento.detalles.certificacion}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon icon="solar:wallet-money-linear" className="w-5 h-5 flex-shrink-0 text-[#9C7D13] mt-1" style={{ strokeWidth: 1.5 }} />
                  <div>
                    <div className="text-xs tracking-widest uppercase text-white/60 mb-1">Inversión</div>
                    <div className="text-sm">{evento.detalles.inversion}</div>
                  </div>
                </div>

                {evento.detalles.datosPago && (
                  <div className="border-t border-accent/70 pt-6 mt-6">
                    <div className="text-xs tracking-widest uppercase text-white/60 mb-3">Datos de Pago</div>
                    <div className="text-sm space-y-2">
                      <div>Banco: {evento.detalles.datosPago.banco}</div>
                      <div>Código: {evento.detalles.datosPago.codigoPago}</div>
                      <div>CCI: {evento.detalles.datosPago.cci}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <a
                  href={evento.detalles.inscripcion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#003398] text-white py-4 px-6 flex items-center justify-center gap-3 hover:bg-[#002277] transition-colors"
                >
                  <span className="text-xs tracking-widest uppercase font-normal">Inscribirme</span>
                  <Icon icon="solar:arrow-right-up-linear" className="text-sm" style={{ strokeWidth: 1.5 }} />
                </a>
              </div>
            </div>

            {/* Redes Sociales */}
            {tieneRedes && (
              <div className="border border-accent/60 p-6">
                <h2 className="text-xs tracking-widest uppercase text-[#9C7D13] font-normal mb-4">
                  Ver Publicación en
                </h2>
                <div className="space-y-3">
                  {redesSociales.facebook && (
                    <a
                      href={redesSociales.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-black/70 hover:text-[#003398] transition-colors"
                    >
                      <Icon icon="ic:baseline-facebook" className="text-[#003398]" />
                      <span>Facebook</span>
                      <Icon icon="solar:arrow-right-up-linear" className="ml-auto text-xs" style={{ strokeWidth: 1.5 }} />
                    </a>
                  )}
                  {redesSociales.instagram && (
                    <a
                      href={redesSociales.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-black/70 hover:text-[#E1306C] transition-colors"
                    >
                      <Icon icon="mdi:instagram" className="text-[#E1306C]" />
                      <span>Instagram</span>
                      <Icon icon="solar:arrow-right-up-linear" className="ml-auto text-xs" style={{ strokeWidth: 1.5 }} />
                    </a>
                  )}
                  {redesSociales.linkedin && (
                    <a
                      href={redesSociales.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-black/70 hover:text-[#0077B5] transition-colors"
                    >
                      <Icon icon="mdi:linkedin" className="text-[#0077B5]" />
                      <span>LinkedIn</span>
                      <Icon icon="solar:arrow-right-up-linear" className="ml-auto text-xs" style={{ strokeWidth: 1.5 }} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Galería de imágenes (opcional) */}
      {evento.galeria && evento.galeria.length > 0 && (
        <div className="border-t border-accent/60 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-xs tracking-widest uppercase text-[#9C7D13] font-normal mb-8">
              Galería
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {evento.galeria.map((imagen, index) => (
                <div key={index} className="aspect-square overflow-hidden">
                  <img
                    src={imagen}
                    alt={`${evento.titulo} - ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
