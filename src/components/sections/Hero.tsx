import Logo from "../Logo";
import { Button } from "../ui/button";

const Hero = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden section-padding text-center">
    {/* Subtle background gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-sage-light/90 via-sage-light/25 to-background" />

    <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
      <Logo size={80} className="text-primary animate-fade-in" />
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light tracking-tight text-foreground animate-fade-in" style={{ animationDelay: "0.15s" }}>
        Camino Adentro
      </h1>

      <p className="text-xl md:text-2xl font-heading font-light italic text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
        El camino empieza adentro
      </p>

      <p className="text-base md:text-lg font-body font-light text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.45s" }}>
        Acompañamiento terapéutico integral para reconectar con tu cuerpo, tus emociones y tu bienestar.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <Button variant="hero" size="lg" asChild>
          <a href="https://wa.me/5491168344165?text=Hola!%20Quiero%20reservar%20una%20sesión" target="_blank" rel="noopener noreferrer">
            Reservar sesión
          </a>
        </Button>
        <Button variant="outline" size="lg" className="rounded-full" asChild>
          <a href="/#servicios">Conocer más</a>
        </Button>
      </div>
    </div>

    {/* Decorative line */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
  </section>
);

export default Hero;
