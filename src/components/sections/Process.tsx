import { useFadeIn } from "@/hooks/useFadeIn";
import { MessageCircle, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Contacto", text: "Escribime para contarme qué estás buscando. Sin compromiso, con total confidencialidad." },
  { icon: CalendarCheck, title: "Coordinación", text: "Elegimos juntos el tipo de sesión y el formato (presencial u online) que mejor se adapte a vos." },
  { icon: Sparkles, title: "Acompañamiento", text: "Comienza tu proceso terapéutico en un espacio seguro, a tu ritmo y con acompañamiento genuino." },
];

const Process = () => {
  const ref = useFadeIn();

  return (
    <section className="section-padding bg-cream">
      <div ref={ref} className="fade-up mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-muted-foreground mb-4">El proceso</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-foreground">
            ¿Cómo es el camino?
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-light text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-body font-semibold">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-heading font-medium text-foreground mb-2">{step.title}</h3>
              <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
