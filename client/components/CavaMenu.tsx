import { motion } from "framer-motion";

const cavaCategories = [
  {
    name: "Champagne & Espumosos",
    items: [
      { name: "Dom Pérignon Vintage", origin: "Francia", price: "$12.500" },
      { name: "Veuve Clicquot Brut", origin: "Francia", price: "$6.200" },
      { name: "Baron B Extra Brut", origin: "Argentina", price: "$2.400" },
      { name: "Castel Pujol Brut Nature", origin: "Uruguay", price: "$1.850" }
    ]
  },
  {
    name: "Blancos de Selección",
    items: [
      { name: "Bodega Garzón Albariño Reserva", origin: "Uruguay", price: "$1.450" },
      { name: "Bouza Chardonnay Barrel Select", origin: "Uruguay", price: "$1.600" },
      { name: "Catena Zapata Adrianna Vineyard", origin: "Argentina", price: "$4.800" }
    ]
  },
  {
    name: "Tintos de Carácter",
    items: [
      { name: "Bodega Garzón Balasto (Icono)", origin: "Uruguay", price: "$8.900" },
      { name: "Bouza Monte Vide Eu (Tannat/Merlot/Tempranillo)", origin: "Uruguay", price: "$3.400" },
      { name: "Viña Cobos Bramare Malbec", origin: "Argentina", price: "$4.200" },
      { name: "Almaviva Baron Philippe de Rothschild", origin: "Chile", price: "$15.000" }
    ]
  }
];

export function CavaMenu() {
  return (
    <section id="cava-menu" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase text-accent block"
          >
            Colección Privada
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Nuestra Cava
          </motion.h2>
          <div className="w-24 h-[1px] bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {cavaCategories.map((category, catIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-serif mb-10 text-accent uppercase tracking-widest border-b border-white/10 pb-4">
                {category.name}
              </h3>
              <div className="space-y-8">
                {category.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-bold tracking-wide group-hover:text-accent transition-colors duration-300 uppercase">
                        {item.name}
                      </h4>
                      <span className="text-xs font-bold text-accent ml-4">{item.price}</span>
                    </div>
                    <p className="text-[10px] tracking-[0.2em] text-primary-foreground/40 uppercase">
                      {item.origin}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
          <p className="text-xs tracking-[0.3em] text-primary-foreground/40 uppercase italic">
            * Consultar por cosechas especiales y formatos Magnum disponibles en nuestra cava climatizada.
          </p>
        </div>
      </div>
    </section>
  );
}
