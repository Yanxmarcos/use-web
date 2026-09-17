export default function About() {
  return (
    <section id="about" className="border-b border-accent/60 bg-[#F0F5FF] py-20 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/15 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="text-xs tracking-widest uppercase text-black/60 font-normal mb-8">
            Potencia tu trayectoria profesional con una educación de alta calidad y un enfoque pragmático.
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter uppercase leading-[1]">
            Lidera<br />la nueva<br />generación <br />jurídica.
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end pt-8 lg:pt-0">
          <p className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-snug mb-12 font-normal">
            Te formamos para que tengas la experiencia y el criterio necesarios para resolver los problemas más complejos de nuestra sociedad. Con un cuerpo docente de excelencia e investigación de vanguardia, te preparamos para que lideres con ética y visión de futuro.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-accent/60 pt-8">
            <div>
              <div className="text-xl md:text-4xl font-medium tracking-tighter mb-2">02 CICLOS<br/>01 AÑO</div>
              <div className="text-xs tracking-widest uppercase text-black/60 font-normal">Plan de Estudios</div>
            </div>
            <div>
              <div className="text-xl md:text-4xl font-medium tracking-tighter mb-2">RECONOCIMIENTO<br/>OFICIAL</div>
              <div className="text-xs tracking-widest uppercase text-black/60 font-normal">A nombre de la Nación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
