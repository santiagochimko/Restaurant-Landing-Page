import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CavaMenu } from "@/components/CavaMenu";
import { motion } from "framer-motion";

export default function CavaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-0">
        {/* Header Section */}
        <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase text-accent block"
          >
            Nuestra Selección de Vinos
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6 uppercase"
          >
            La Cava
          </motion.h1>
          <div className="w-24 h-[1px] bg-accent mx-auto" />
        </section>

        {/* The Cava Menu Component */}
        <CavaMenu />

        {/* Optional Sommelier Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="aspect-[4/5] overflow-hidden grayscale contrast-125">
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1470&auto=format&fit=crop" 
                  alt="Vinos y Sommelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase text-accent block">Maridaje Perfecto</span>
                <h2 className="text-4xl font-serif mb-8 leading-tight">Asesoramiento de <br /> Nuestros Sommeliers</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Nuestro equipo de sommeliers está a su entera disposición para guiarlo a través de nuestra cuidada selección y recomendarle el maridaje ideal para cada plato de nuestra carta.
                </p>
                <div className="w-24 h-[1px] bg-accent/30" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
