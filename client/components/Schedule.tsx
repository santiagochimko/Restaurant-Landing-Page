import { motion } from "framer-motion";

const schedules = [
  { title: "Desayuno", hours: "08:30 - 11:30", description: "Comience el día con una vista espectacular." },
  { title: "Almuerzo", hours: "12:00 - 15:30", description: "Menú ejecutivo y carta internacional." },
  { title: "Merienda / Café", hours: "16:00 - 19:00", description: "Repostería artesanal y café de especialidad." },
  { title: "Cena", hours: "19:30 - 23:00", description: "Ambiente íntimo y alta cocina." }
];

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase text-accent">Horarios</span>
          <h2 className="text-4xl md:text-6xl font-serif">Planifique su Visita</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schedules.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 p-10 flex flex-col items-center text-center hover:border-accent transition-colors duration-500"
            >
              <h3 className="text-xl font-serif mb-4">{item.title}</h3>
              <p className="text-accent text-sm font-bold mb-6 tracking-widest">{item.hours}</p>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-primary-foreground/60 mb-8 italic">Se recomienda reserva previa para almuerzo y cena.</p>
          <button className="bg-accent text-white px-12 py-4 text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            HACER UNA RESERVA
          </button>
        </div>
      </div>
    </section>
  );
}
