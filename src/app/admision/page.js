import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Proceso de Admisión | USE",
  description: "Próximamente publicaremos el proceso de admisión para la Segunda Especialidad de la Facultad de Derecho UNT",
};

export default function AdmisionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 lg:px-12 py-20 lg:py-32 border-b border-accent/60">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs tracking-widest uppercase text-black/60 font-normal mb-8">
            PROCESO DE ADMISIÓN
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium tracking-tighter uppercase leading-none mb-12 text-accent">
            PRÓXIMAMENTE
          </h1>
          
          <p className="text-sm md:text-base text-black/70 font-normal mb-8 max-w-md mx-auto leading-relaxed">
            Estamos preparando todo el proceso de admisión para la Segunda Especialidad de la Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Trujillo.
          </p>
          
          <p className="text-sm text-[#1F651C] font-medium mb-12">
            Las fechas del proceso de admisión serán publicadas próximamente.
          </p>
          
          <div className="w-24 h-[2px] bg-[#1F651C] mx-auto"></div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
