import Header from "@/components/Header";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contacto | USE",
  description: "Comunícate con la Unidad de Segunda Especialidad de la Facultad de Derecho UNT",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Contacto />
      
      <section className="bg-white py-12">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503.39929460096977!2d-79.03747680630617!3d-8.114609845001034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9e6ffca2c7%3A0x81f35fbb68c547a9!2sFacultad%20de%20Derecho%20y%20Ciencias%20Pol%C3%ADticas!5e1!3m2!1ses-419!2spe!4v1788691499725!5m2!1ses-419!2spe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full aspect-video border-0"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}