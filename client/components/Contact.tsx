import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase text-accent">Contacto</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-12">Estamos en <br /> el cielo</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex items-center justify-center border border-border shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-2">Ubicación</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Luis Bonavita 1266, Piso 40<br />
                    World Trade Center Torre 4<br />
                    Montevideo, Uruguay
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex items-center justify-center border border-border shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-2">Teléfono</h4>
                  <p className="text-muted-foreground leading-relaxed">+598 2622 8080</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex items-center justify-center border border-border shrink-0">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-2">Email</h4>
                  <p className="text-muted-foreground leading-relaxed">restaurant@piso40.org.uy</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] bg-muted relative"
          >
            {/* Placeholder for Map */}
            <div className="absolute inset-0 grayscale contrast-125 opacity-70">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop" 
                alt="Map Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-accent/10 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background p-8 border border-border shadow-xl max-w-xs text-center">
                <p className="text-xs font-bold tracking-widest uppercase mb-2">WTC Torre 4</p>
                <p className="text-[10px] text-muted-foreground uppercase">El punto más alto de la ciudad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
