import { useFadeIn } from "@/hooks/useFadeIn";
import { Button } from "../ui/button";
import { MapPin, Wifi, MessageCircle } from "lucide-react";
import { useState } from "react";

const CONTACT_EMAIL = "daniela@caminoadentro.com";

const Contact = () => {
  const ref = useFadeIn();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hola Daniela,\n\nSoy ${name}.\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Contacto web — ${name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.assign(mailto);
  };

  return (
    <section id="contacto" className="section-padding bg-cream">
      <div ref={ref} className="fade-up mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-muted-foreground mb-4">Contacto</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-foreground">
            Empezá tu camino
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground font-body font-light leading-relaxed">
              Si sentís que es momento de hacer una pausa y mirarte hacia adentro, escribime. Estoy acá para acompañarte.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-muted-foreground">Córdoba, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <Wifi className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-muted-foreground">Sesiones online disponibles</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-fit mt-2" asChild>
              <a href="https://wa.me/5491168344165" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Escribime por WhatsApp
              </a>
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <textarea
              placeholder="Tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
            <Button type="submit" variant="outline" className="rounded-full self-start">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
