import Logo from "./Logo";

const Footer = () => (
  <footer className="section-padding bg-foreground py-12">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Logo size={28} className="text-primary-foreground/70" />
        <span className="font-heading text-sm font-light text-primary-foreground/70">Camino Adentro</span>
      </div>
      <p className="font-body text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Camino Adentro · Córdoba, Argentina
      </p>
    </div>
  </footer>
);

export default Footer;
