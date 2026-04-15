import Logo from "./Logo";
import { Button } from "./ui/button";

const Footer = () => (
  <footer className="section-padding bg-foreground py-12">
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo size={28} className="text-primary-foreground/70" />
          <span className="font-heading text-sm font-light text-primary-foreground/70">Camino Adentro</span>
        </div>
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Camino Adentro · Córdoba, Argentina
        </p>
      </div>

      <div className="border-t border-primary-foreground/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-primary-foreground/55">desde las sierras con amor por barolands</p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <p className="font-body text-xs text-primary-foreground/75">¿Querés una landing como esta?</p>
          <Button variant="secondary" size="sm" className="rounded-full" asChild>
            <a
              href="https://wa.me/5491168344165?text=Hola!%20Quiero%20una%20landing%20como%20esta."
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos
            </a>
          </Button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
