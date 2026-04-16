import { useFadeIn } from "@/hooks/useFadeIn";

const Proposal = () => {
  const ref = useFadeIn();

  return (
    <section className="section-padding border-t border-border/40 bg-gradient-to-b from-background to-cream">
      <div ref={ref} className="fade-up mx-auto max-w-3xl">
        <div className="border-l-2 border-primary/25 pl-6 md:pl-8">
          <p className="text-lg md:text-xl font-body font-light leading-relaxed text-foreground text-balance">
            En Camino Adentro propongo un espacio de escucha y acompañamiento donde cuerpo, emoción, mente y energía se integran.
          </p>
          <p className="mt-6 text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground text-balance">
            Trabajo desde una mirada profunda y respetuosa, combinando distintas herramientas terapéuticas según cada proceso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
