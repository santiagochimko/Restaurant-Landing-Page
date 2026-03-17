import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const menuCategories = [
  {
    name: "Entradas",
    items: [
      { name: "Carpaccio de Pulpo", price: "$850", description: "Finas láminas de pulpo, oliva virgen, pimentón de la Vera y brotes orgánicos." },
      { name: "Burrata D.O.P", price: "$720", description: "Corazón cremoso, tomates cherry confitados, pesto de albahaca y crocante de focaccia." },
      { name: "Tartar de Atún Rojo", price: "$980", description: "Atún fresco, palta, sésamo tostado y aire de soja y jengibre." }
    ]
  },
  {
    name: "Platos Principales",
    items: [
      { name: "Risotto de Hongos Silvestres", price: "$1.250", description: "Arroz carnaroli, mix de hongos del bosque, aceite de trufa blanca y reggianito." },
      { name: "Salmón Rosado en Costra", price: "$1.450", description: "Costra de hierbas, puré de arvejas y menta, vegetales de estación torneados." },
      { name: "Ojo de Bife Angus", price: "$1.680", description: "400g de carne premium, milhojas de papa, reducción de malbec y chalotas confitadas." }
    ]
  },
  {
    name: "Postres",
    items: [
      { name: "Volcán de Chocolate", price: "$550", description: "70% cacao, corazón fundente, helado de crema americana artesanal." },
      { name: "Tatin de Manzana", price: "$480", description: "Manzanas caramelizadas, masa sablée y espuma de vainilla de Madagascar." },
      { name: "Degustación de Quesos", price: "$650", description: "Selección de quesos nacionales y regionales, frutos secos y miel de flores." }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase text-accent block"
          >
            Sabor y Sofisticación
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Nuestra Carta
          </motion.h1>
          <div className="w-24 h-[1px] bg-accent mx-auto" />
        </section>

        {/* Menu Sections */}
        <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-24">
          <div className="max-w-4xl mx-auto space-y-24">
            {menuCategories.map((category, catIndex) => (
            <motion.section 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
            >
              <h2 className="text-3xl font-serif mb-12 text-center text-accent uppercase tracking-widest">{category.name}</h2>
              <div className="grid grid-cols-1 gap-12">
                {category.items.map((item, itemIndex) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-serif group-hover:text-accent transition-colors duration-300">{item.name}</h3>
                      <div className="flex-grow mx-4 border-b border-dotted border-border" />
                      <span className="text-sm font-bold tracking-widest">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm italic leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
          </div>
        </div>

        {/* Cava CTA */}
        <section className="container mx-auto px-6 md:px-12 max-w-7xl mt-32">
          <div className="bg-primary p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Carta de Cava</h2>
              <p className="max-w-xl mx-auto mb-10 text-primary-foreground/60 leading-relaxed">
                Descubra nuestra exclusiva selección de vinos nacionales e internacionales, curada por nuestros sommeliers para el maridaje perfecto.
              </p>
              <Link
                to="/cava"
                className="inline-block border border-white/30 px-10 py-4 text-xs font-bold tracking-widest hover:bg-accent hover:border-accent transition-all duration-300"
              >
                VER CAVA
              </Link>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif opacity-[0.03] select-none pointer-events-none">
              VINO
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
