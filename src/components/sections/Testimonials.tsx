import { useFadeIn } from "@/hooks/useFadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Encontré un espacio donde pude soltar y escucharme. Cada sesión fue un regalo de claridad y calma.",
    name: "Lucía M.",
    detail: "Compassionate Inquiry",
  },
  {
    text: "Los masajes me ayudaron a reconectar con mi cuerpo después de mucho tiempo de estrés. Salgo renovada cada vez.",
    name: "Carolina S.",
    detail: "Masajes terapéuticos",
  },
  {
    text: "Las flores de Bach me acompañaron en un momento de mucho cambio. Sentí un sostén increíble durante todo el proceso.",
    name: "Martín R.",
    detail: "Terapia Floral Bach",
  },
];

const Testimonials = () => {
  const ref = useFadeIn();

  return (
    <section className="section-padding">
      <div ref={ref} className="fade-up mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-muted-foreground mb-4">Testimonios</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-foreground">
            Palabras que inspiran
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <Quote className="h-6 w-6 text-primary/30 mb-4" />
              <p className="flex-1 text-muted-foreground font-body font-light italic leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="font-body font-medium text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground font-body">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
