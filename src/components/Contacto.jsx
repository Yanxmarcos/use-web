import { Icon } from "@iconify/react";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-black text-white border-b border-accent/70">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-accent/70">
          <Icon icon="solar:letter-linear" className="text-3xl mb-8 text-accent" style={{ strokeWidth: 1.5 }} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter uppercase leading-[0.9] mb-6">
            Contáctanos
          </h2>
          <p className="text-sm md:text-base text-white/60 font-normal mb-12 max-w-sm">
            Estamos aquí para orientarte. Comunícate con nosotros por el medio que prefieras.
          </p>

          <div className="flex flex-col">
            <a href="tel:+51925405280" className="flex items-center justify-between border-b border-accent/70 py-4 group hover:border-accent transition-colors">
              <div className="flex items-center gap-4">
                <Icon icon="solar:phone-linear" className="text-xl text-accent" style={{ strokeWidth: 1.5 }} />
                <span className="text-xs tracking-widest uppercase">Teléfono</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-wider text-white/70 group-hover:text-white transition-colors">+51 925 405 280</span>
                <Icon icon="solar:arrow-right-up-linear" className="hidden md:block text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: 1.5 }} />
              </div>
            </a>

            <a href="https://wa.me/51925405280" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b border-accent/70 py-4 group hover:border-accent transition-colors">
              <div className="flex items-center gap-4">
                <Icon icon="ic:baseline-whatsapp" className="text-xl text-accent" />
                <span className="text-xs tracking-widest uppercase">WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-wider text-white/70 group-hover:text-white transition-colors">+51 925 405 280</span>
                <Icon icon="solar:arrow-right-up-linear" className="hidden md:block text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: 1.5 }} />
              </div>
            </a>

            <a href="mailto:se.derecho@unitru.edu.pe" className="flex items-center justify-between border-b border-accent/70 py-4 group hover:border-accent transition-colors">
              <div className="flex items-center gap-4">
                <Icon icon="solar:mailbox-linear" className="text-xl text-accent" style={{ strokeWidth: 1.5 }} />
                <span className="text-xs tracking-widest uppercase">Email</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-wider text-white/70 group-hover:text-white transition-colors">se.derecho@unitru.edu.pe</span>
                <Icon icon="solar:arrow-right-up-linear" className="hidden md:block text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: 1.5 }} />
              </div>
            </a>

            <a href="https://maps.app.goo.gl/QB932KcJ8kimsqzbA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b border-accent/70 py-4 group hover:border-accent transition-colors">
              <div className="flex items-center gap-4">
                <Icon icon="solar:map-point-linear" className="text-xl text-accent" style={{ strokeWidth: 1.5 }} />
                <span className="text-xs tracking-widest uppercase">Ubicación</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-wider text-white/70 group-hover:text-white transition-colors">Fac. de Derecho y CC. PP. - UNT</span>
                <Icon icon="solar:arrow-right-up-linear" className="hidden md:block text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: 1.5 }} />
              </div>
            </a>

            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <Icon icon="solar:globe-linear" className="text-xl text-accent" style={{ strokeWidth: 1.5 }} />
                <span className="text-xs tracking-widest uppercase">Redes Sociales</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/usefacderechount" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <Icon icon="ic:baseline-facebook" className="text-xl" />
                </a>
                <a href="https://www.instagram.com/usefacderechount/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <Icon icon="mdi:instagram" className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/company/usefacderechount/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <Icon icon="mdi:linkedin" className="text-xl" />
                </a>
                <a href="https://www.tiktok.com/@usefacderechount" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <Icon icon="ic:baseline-tiktok" className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#003398] p-12 lg:p-24 flex flex-col justify-center items-start relative overflow-hidden group cursor-pointer text-white">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-accent/50 group-hover:scale-110 transition-transform duration-1000 pointer-events-none"></div>

          <div className="text-xs tracking-widest uppercase font-normal mb-6">¡Inscríbete y obtén especialidad con los más destacados!</div>
          <a href="/admision">
            <h2 className="text-5xl md:text-6xl lg:text-6xl font-medium tracking-tighter uppercase leading-[0.85] mb-12 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
            Inscribirme<br />Ahora
            </h2>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-[#003398] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
              <Icon icon="solar:arrow-right-up-linear" className="text-xl md:text-2xl" style={{ strokeWidth: 1.5 }} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
