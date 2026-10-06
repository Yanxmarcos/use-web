import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PlanaDocente from "@/components/PlanaDocente";
import Especialidades from "@/components/Especialidades";
import Director from "@/components/Director";
import Eventos from "@/components/Eventos";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import EventModal from "@/components/EventModal";
import { getEventosRecientes } from "@/data/eventos";

export default function Home() {
  const eventosRecientes = getEventosRecientes(3);
  const eventoReciente = eventosRecientes[0];

  return (
    <div className="min-h-screen">
      <EventModal evento={eventoReciente} />
      <Header />
      <Hero />
      <About />
      <Especialidades />
      <Director />
      {/* <PlanaDocente /> */}
      <Eventos eventos={eventosRecientes} />
      <FAQ />
      <Contacto />
      <Footer />
    </div>
  );
}
