import { useFadeIn } from "@/hooks/useFadeIn";

const Problem = () => {
  const ref = useFadeIn();

  const questions = [
    "¿Sentís estrés, ansiedad, o desconexión con vos misma/o?",
    "¿Te cuesta parar, habitar el cuerpo o encontrar claridad?",
    "¿Probaste varios caminos terapéuticos pero sentís que algo esencial no fue tocado?",
  ];

  return (
    <section className="section-padding border-t border-border/40 bg-background">
      <div ref={ref} className="fade-up mx-auto max-w-3xl text-center">
        <ul className="list-none space-y-6 text-lg md:text-xl font-body font-light leading-relaxed text-foreground">
          {questions.map((q) => (
            <li key={q} className="text-balance">
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground text-balance">
          Muchas veces el malestar no es sólo físico o emocional sino una desconexión más profunda con nuestro ser.
        </p>
      </div>
    </section>
  );
};

export default Problem;
