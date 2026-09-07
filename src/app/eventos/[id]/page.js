import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventoDetalle from "@/components/EventoDetalle";
import { fetchEventoPorId, fetchEventos } from "@/services/api";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const evento = await fetchEventoPorId(id);
  if (!evento) {
    return { title: "Evento no encontrado | USE" };
  }
  return {
    title: `${evento.titulo} | USE`,
    description: evento.descripcionCorta,
  };
}

export async function generateStaticParams() {
  const eventos = await fetchEventos();
  return eventos.map((evento) => ({
    id: evento.id,
  }));
}

export default async function EventoPage({ params }) {
  const { id } = await params;
  const evento = await fetchEventoPorId(id);
  
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