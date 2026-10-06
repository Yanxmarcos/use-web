import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventoDetalle from "@/components/EventoDetalle";
import { eventos, getEventoPorId } from "@/data/eventos";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const evento = getEventoPorId(id);
  if (!evento) {
    return { title: "Evento no encontrado | USE" };
  }
  return {
    title: `${evento.titulo} | USE`,
    description: evento.descripcionCorta,
  };
}

export async function generateStaticParams() {
  return eventos.map((evento) => ({
    id: evento.id,
  }));
}

export default async function EventoPage({ params }) {
  const { id } = await params;
  const evento = getEventoPorId(id);
  
  if (!evento) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <EventoDetalle evento={evento} />
      
      <Footer />
    </div>
  );
}
