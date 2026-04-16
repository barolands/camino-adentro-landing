import { useFadeIn } from "@/hooks/useFadeIn";

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="sobre-mi" className="section-padding bg-cream">
      <div ref={ref} className="fade-up mx-auto max-w-5xl">
        <p className="text-sm font-body uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Sobre mí</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-12 text-foreground text-center">
          Un espacio para volver a vos
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-14">
          <div className="flex flex-shrink-0 justify-center md:justify-start">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-sand/50 border-2 border-sand overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}sobre-mi.png`}
                alt="Retrato de una mujer sonriente con cabello largo oscuro, al aire libre con árboles y flores naranjas."
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          {/* Texto */}
          <div className="flex flex-1 flex-col space-y-5 text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground text-center md:text-left">
            <p>
              Creo profundamente en la capacidad de cada persona para sanar y transformarse. Mi trabajo es acompañarte en ese proceso, con respeto, escucha y presencia.
            </p>
            <p>
              Desde un enfoque integral —que abraza el cuerpo, las emociones y la mente— ofrezco herramientas terapéuticas que se adaptan a lo que necesitás en cada momento de tu camino.
            </p>
            <p>
              No se trata de tener respuestas, sino de crear un espacio seguro para que puedas escucharte, sentirte y encontrar tu propia dirección.
            </p>
            <p className="mt-auto pt-8 font-heading text-2xl md:text-3xl font-light italic text-foreground text-right">
              Daniela
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
