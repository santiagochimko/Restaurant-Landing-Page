import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
    title: "Salón Principal",
    span: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1374&auto=format&fit=crop",
    title: "Vinos Seleccionados",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop",
    title: "Gastronomía",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1469&auto=format&fit=crop",
    title: "Bar & Drinks",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1470&auto=format&fit=crop",
    title: "Vistas",
    span: "col-span-1 row-span-1"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase text-accent">Nuestra Galería</span>
          <h2 className="text-4xl md:text-6xl font-serif">Ambiente y Detalles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${img.span} relative group overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-xs font-bold tracking-[0.3em] uppercase">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
