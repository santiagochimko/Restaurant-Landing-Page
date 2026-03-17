import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Gallery } from "@/components/Gallery";
import { Schedule } from "@/components/Schedule";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Handle initial hash on load
    if (window.location.hash) {
      try {
        const target = document.querySelector(window.location.hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } catch (e) {
        console.warn('Invalid selector in hash:', window.location.hash);
      }
    }

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // Only handle links on the current page that are hash links
      if (href && (href.startsWith('#') || (href.startsWith('/#') && window.location.pathname === '/'))) {
        const hash = href.includes('#') ? '#' + href.split('#')[1] : null;
        if (!hash) return;

        try {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
            // Update URL without reload if needed
            if (window.location.hash !== hash) {
              window.history.pushState(null, '', href);
            }
          }
        } catch (err) {
          // If querySelector fails, let the browser handle the link normally
          console.warn('Could not find element for selector:', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Gallery />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
