import { motion } from "framer-motion";

export function Introduction() {
  return (
    <section id="restaurant" className="py-24 md:py-40 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase text-accent">Nuestra Historia</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Un Horizonte <br /> de Sabores
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-lg">
              Situado en el punto más alto del World Trade Center, Piso 40 combina la exclusividad con una propuesta gastronómica de primer nivel.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg">
              Disfrute de una vista panorámica inigualable de Montevideo mientras degusta platos elaborados con los ingredientes más frescos de la estación, bajo la dirección de nuestro reconocido equipo de cocina.
            </p>
            <div className="flex gap-12">
              <div className="text-center">
                <p className="text-4xl font-serif mb-2">40</p>
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase">Pisos en lo Alto</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif mb-2">180°</p>
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase">Vista Panorámica</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1470&auto=format&fit=crop"
                alt="Fine Dining Experience"
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Elegant Frame */}
            <div className="absolute -bottom-8 -left-8 -z-10 w-full h-full border border-accent/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 w-[90%] h-[90%]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
