import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-primary text-primary-foreground border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold tracking-tighter mb-4 uppercase">
              PISO <span className="text-accent">40</span>
            </h3>
            <p className="text-xs tracking-widest text-primary-foreground/40 uppercase">EXCELLENCE AT EVERY LEVEL</p>
          </div>

          <div className="flex gap-12 text-center md:text-right">
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-accent">Navegación</h4>
              <div className="flex flex-col gap-2">
                <a href="/#restaurant" className="text-xs text-primary-foreground/60 hover:text-white transition-colors uppercase tracking-widest">El Restaurante</a>
                <Link to="/menu" className="text-xs text-primary-foreground/60 hover:text-white transition-colors uppercase tracking-widest">Menú</Link>
                <Link to="/cava" className="text-xs text-primary-foreground/60 hover:text-white transition-colors uppercase tracking-widest">Cava</Link>
                <a href="/#gallery" className="text-xs text-primary-foreground/60 hover:text-white transition-colors uppercase tracking-widest">Galería</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-accent">Legal</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-xs text-primary-foreground/60 hover:text-white transition-colors uppercase tracking-widest">Términos</a>
                <a href="#" className="text-xs text-primary-foreground/60 hover:text-white transition-colors uppercase tracking-widest">Privacidad</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-widest text-primary-foreground/40 uppercase">
            © {currentYear} PISO 40 RESTAURANTE. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-4">
            <p className="text-[10px] tracking-widest text-primary-foreground/40 uppercase">WORLD TRADE CENTER MONTEVIDEO</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
