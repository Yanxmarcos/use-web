export default function Director() {
  return (
    <section id="director" className="border-b border-accent/60 py-20 lg:py-32 bg-white">
      <div className="px-6 lg:px-12 mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tighter uppercase leading-none">
            DIRECTOR
          </h2>
        </div>
        <p className="text-sm md:text-base text-black/70 font-normal max-w-sm">
          Compromiso con la formación profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-accent/60">
        <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-accent/60 p-8 lg:p-12 group">
          <div className="aspect-[3/4] md:aspect-[16/9] mb-8 overflow-hidden">
            <img src="/img/carlos-vasquez-boyer.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Director" />
          </div>
          <h4 className="text-xl lg:text-2xl font-medium tracking-tight uppercase mb-2">Dr. Carlos Alberto Vásquez Boyer</h4>
          <div className="text-xs tracking-widest text-[#003398] font-normal mb-4">cvasquezb@unitru.edu.pe</div>
          <p className="text-sm md:text-base text-black/70 font-normal">Abogado por la Universidad Nacional de Trujillo con casi 40 años de experiencia en la defensa litigiosa. Obtuvo el grado de Maestro en Derecho con mención en Ciencias Penales por la Universidad Nacional Mayor de San Marcos (2004) y el de Doctor en Derecho por la Universidad Nacional de Trujillo (2010).</p>
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-[#003398] text-white group cursor-pointer">
          <div className="text-7xl lg:text-8xl font-serif leading-none mb-4 opacity-50 group-hover:scale-110 transition-transform">
            &ldquo;
          </div>
          <h4 className="text-base lg:text-base tracking-tight mb-4">
            Esta oficina surge con la meta de asistir, guiar y fomentar la 
            calidad académica de los profesionales del Derecho, 
            contribuyendo a que alcancen la experiencia suficiente y 
            necesaria para aportar en la solución de problemas 
            presentados en la realidad; a la vez que, promueve la 
            investigación de alta calidad, la innovación y el compromiso 
            social desde la perspectiva de la academia y en la búsqueda 
            de la excelencia profesional. <br/> <br/>
            Extendemos una invitación a toda la comunidad para 
            que se una a este nuevo episodio, con energía, 
            dedicación y una visión hacia el futuro. La Unidad de 
            Segunda Especialidad de la Facultad de Derecho y 
            Ciencias Políticas se propone ser un punto de encuentro 
            entre estudiantes, docentes, investigadores y aliados 
            estratégicos, generando sinergias que enriquezcan el 
            saber y respondan a los desafíos actuales de 
            nuestra sociedad.
          </h4>
        </div>
      </div>
    </section>
  );
}
