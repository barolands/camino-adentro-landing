import { useFadeIn } from "@/hooks/useFadeIn";
import { Button } from "../ui/button";
import { getServiceLandingUrl, services } from "@/data/services";

const SLUGS_WITH_VER_MAS = new Set(["medicina-tradicional-china", "compassionate-inquiry"]);

function consultarWhatsAppText(slug: string, title: string): string {
  if (slug === "medicina-tradicional-china") {
    return "Hola! Quiero averiguar por sesiones de Medicina china.";
  }
  if (slug === "compassionate-inquiry") {
    return "Hola! Quiero averiguar por sesiones de Compassionate Inquiry.";
  }
  return `Hola! Quiero consultar por ${title}.`;
}

const Services = () => {
  const ref = useFadeIn();

  return (
    <section id="servicios" className="section-padding">
      <div ref={ref} className="fade-up mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-muted-foreground mb-4">Servicios</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-foreground">
            ¿Cómo puedo acompañarte?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => {
            const verMasHref = getServiceLandingUrl(s.slug);
            const verMasIsExternal = /^https?:\/\//i.test(verMasHref);

            return (
            <div
              key={s.slug}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-light text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-medium text-foreground">{s.title}</h3>
                  <span className="text-xs font-body uppercase tracking-widest text-muted-foreground">{s.mode}</span>
                </div>
              </div>

              <p className="text-muted-foreground font-body font-light leading-relaxed mb-5 whitespace-pre-line">{s.description}</p>

              {s.idealFor ? (
                <p className="mb-6 text-sm font-body font-light leading-relaxed text-muted-foreground">{s.idealFor}</p>
              ) : (
                <ul className="flex flex-wrap gap-2 mb-6">
                  {s.benefits.map((b) => (
                    <li key={b} className="rounded-full bg-sage-light px-3 py-1 text-xs font-body text-primary">
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-3">
                {SLUGS_WITH_VER_MAS.has(s.slug) && (
                  <Button variant="hero" className="rounded-full" size="sm" asChild>
                    <a
                      href={verMasHref}
                      {...(verMasIsExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      Ver más
                    </a>
                  </Button>
                )}
                <Button variant="outline" className="rounded-full" size="sm" asChild>
                  <a
                    href={`https://wa.me/5491168344165?text=${encodeURIComponent(
                      consultarWhatsAppText(s.slug, s.title)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
