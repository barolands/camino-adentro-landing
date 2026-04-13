import { useFadeIn } from "@/hooks/useFadeIn";

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="sobre-mi" className="section-padding bg-cream">
      <div ref={ref} className="fade-up mx-auto max-w-3xl text-center">
        <p className="text-sm font-body uppercase tracking-[0.25em] text-muted-foreground mb-4">Sobre mí</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-8 text-foreground">
          Un espacio para volver a vos
        </h2>
        <div className="space-y-5 text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground">
          <p>
            Creo profundamente en la capacidad de cada persona para sanar y transformarse. Mi trabajo es acompañarte en ese proceso, con respeto, escucha y presencia.
          </p>
          <p>
            Desde un enfoque integral —que abraza el cuerpo, las emociones y la mente— ofrezco herramientas terapéuticas que se adaptan a lo que necesitás en cada momento de tu camino.
          </p>
          <p>
            No se trata de tener respuestas, sino de crear un espacio seguro para que puedas escucharte, sentirte y encontrar tu propia dirección.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
