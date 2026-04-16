import { useFadeIn } from "@/hooks/useFadeIn";

const Problem = () => {
  const ref = useFadeIn();

  const questions = [
    "¿Sentís estrés, ansiedad, o desconexión con vos misma/o?",
    "¿Te cuesta parar, habitar el cuerpo o encontrar claridad?",
    "¿Probaste varios caminos terapéuticos pero sentís que algo esencial no fue tocado?",
  ];

  return (
    <section className="relative section-padding overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-sage-light/25 to-background">
      {/* Manchas suaves de fondo */}
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-primary/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-56 w-56 rounded-full bg-sage/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-1">
        <div
          ref={ref}
          className="fade-up relative rounded-[1.75rem] border border-border/80 bg-card/80 px-8 py-11 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.08)] ring-1 ring-primary/[0.06] backdrop-blur-[2px] md:px-12 md:py-14"
        >
          {/* Esquinas decorativas */}
          <span
            className="pointer-events-none absolute left-5 top-5 h-10 w-10 rounded-tl-xl border-l border-t border-primary/25"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute right-5 top-5 h-10 w-10 rounded-tr-xl border-r border-t border-primary/25"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 rounded-bl-xl border-b border-l border-primary/25"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 rounded-br-xl border-b border-r border-primary/25"
            aria-hidden
          />

          {/* Ornamento superior */}
          <div className="mb-9 flex flex-col items-center gap-3" aria-hidden>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/35" />
              <span className="h-1 w-1 rounded-full bg-primary/45 shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]" />
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/35" />
            </div>
          </div>

          <ul className="list-none space-y-6 text-lg md:text-xl font-body font-light leading-relaxed text-foreground">
            {questions.map((q) => (
              <li key={q} className="text-balance">
                {q}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-xl border-t border-border/60 pt-10">
            <p className="text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground text-balance">
              Muchas veces el malestar no es sólo físico o emocional sino una desconexión más profunda con nuestro ser.
            </p>
          </div>

          {/* Línea inferior suave */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 max-w-sm -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;
