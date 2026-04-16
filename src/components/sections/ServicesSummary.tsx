import { useFadeIn } from "@/hooks/useFadeIn";

const benefits = [
  "Reducir el estrés y la ansiedad",
  "Aliviar tensiones físicas",
  "Conectar con tu cuerpo",
  "Comprender procesos emocionales",
  "Recuperar equilibrio y claridad",
];

const ServicesSummary = () => {
  const ref = useFadeIn();

  return (
    <section
      aria-labelledby="resumen-servicios-heading"
      className="relative border-t border-border/40 bg-gradient-to-b from-background via-sage-light/30 to-cream section-padding"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden
      />

      <div ref={ref} className="fade-up mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border/70 bg-card/60 px-8 py-10 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.06)] backdrop-blur-[1px] md:px-12 md:py-12">
          <p
            id="resumen-servicios-heading"
            className="text-sm font-body uppercase tracking-[0.25em] text-muted-foreground mb-3"
          >
            En resumen
          </p>
          <p className="text-lg md:text-xl font-body font-light leading-relaxed text-foreground text-balance mb-8">
            Son sesiones que pueden ayudarte a:
          </p>
          <ul className="space-y-4 border-l-2 border-primary/25 pl-6 md:pl-8">
            {benefits.map((item) => (
              <li
                key={item}
                className="text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground text-balance"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
