import { Icon } from "@iconify/react";

export default function PlanaDocente() {
  return (
    <section id="docentes" className="border-b border-black/15 flex flex-col">
      <div className="flex items-center justify-between px-6 lg:px-12 py-8 border-b border-black/15">
        <h3 className="text-xl lg:text-2xl font-medium tracking-tight uppercase">Plana Docente</h3>
        <a className="text-sm md:text-base text-black/70 font-normal flex items-center">
          Excelencia académica.
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <a className="group border-b md:border-b-0 lg:border-r border-black/15 relative overflow-hidden aspect-[4/5] flex flex-col">
          <img src="/img/docente.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Elephants in Tanzania" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="relative z-10 p-8 flex-1 flex flex-col justify-between text-white">
            <div className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm">
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase font-normal mb-2 opacity-80">Docente</div>
              <h4 className="text-2xl md:text-2xl font-medium tracking-tight">Dr. Nombres Apellidos</h4>
            </div>
          </div>
        </a>
        <a className="group border-b lg:border-b-0 md:border-r border-black/15 relative overflow-hidden aspect-[4/5] flex flex-col">
          <img src="/img/docente.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Leopard in Botswana" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="relative z-10 p-8 flex-1 flex flex-col justify-between text-white">
            <div className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm">
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase font-normal mb-2 opacity-80">Docente</div>
              <h4 className="text-2xl md:text-2xl font-medium tracking-tight">Dr. Nombres Apellidos</h4>
            </div>
          </div>
        </a>
        <a className="group border-b md:border-b-0 lg:border-r border-black/15 relative overflow-hidden aspect-[4/5] flex flex-col">
          <img src="/img/docente.jpg" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" alt="Gorilla in Rwanda" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="relative z-10 p-8 flex-1 flex flex-col justify-between text-white">
            <div className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm">
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase font-normal mb-2 opacity-80">Docente</div>
              <h4 className="text-2xl md:text-2xl font-medium tracking-tight">Dr. Nombres Apellidos</h4>
            </div>
          </div>
        </a>
        <a className="group border-b md:border-b-0 lg:border-r border-black/15 relative overflow-hidden aspect-[4/5] flex flex-col">
          <img src="/img/docente.jpg" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" alt="Gorilla in Rwanda" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="relative z-10 p-8 flex-1 flex flex-col justify-between text-white">
            <div className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm">
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase font-normal mb-2 opacity-80">Docente</div>
              <h4 className="text-2xl md:text-2xl font-medium tracking-tight">Dr. Nombres Apellidos</h4>
            </div>
          </div>
        </a>
        {/* <div className="bg-black text-white p-8 md:p-12 flex flex-col justify-center items-start aspect-[4/5] relative overflow-hidden group">
          <svg className="absolute -bottom-20 -right-20 w-full h-full text-white/5 opacity-50 group-hover:scale-110 transition-transform duration-1000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.2,88.5,-0.8C86.9,14.6,81.3,29.2,72.7,41.4C64.1,53.6,52.5,63.4,39.3,70.5C26.1,77.6,11.3,82,-3.4,87.8C-18.1,93.6,-36.2,100.8,-49.6,94.2C-63,87.6,-71.7,67.2,-78.9,50.3C-86.1,33.4,-91.8,20,-91.3,7.5C-90.8,-5,-84.1,-16.5,-75.7,-25.9C-67.3,-35.3,-57.2,-42.6,-46.8,-51.1C-36.4,-59.6,-25.7,-69.3,-12.3,-74.6C1.1,-79.9,14.5,-80.8,30.6,-83.6L44.7,-76.4Z" transform="translate(100 100)"></path>
          </svg>
          <div className="relative z-10">
            <div className="text-xs tracking-widest uppercase font-normal mb-6 text-white/50">Plana docente</div>
            <h4 className="text-3xl lg:text-4xl font-medium tracking-tight uppercase mb-8 leading-tight">Excelencia<br />académica</h4>
            <a href="#" className="inline-flex items-center text-xs tracking-widest uppercase font-normal bg-white text-black px-6 py-3 hover:bg-[#003398] hover:text-white transition-colors">
              VER COMPLETO
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
