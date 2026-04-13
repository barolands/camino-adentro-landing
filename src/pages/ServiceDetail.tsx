import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";

const WA_BASE = "https://wa.me/5491168344165?text=";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;
  const waMessage = encodeURIComponent(`Hola! Quiero consultar por ${service.title}`);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 section-padding">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/#servicios"
            className="mb-10 inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Volver a servicios
          </Link>

          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage-light text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-muted-foreground mb-2">Servicio</p>
              <h1 className="text-3xl md:text-4xl font-heading font-light text-foreground">{service.title}</h1>
              <span className="mt-2 inline-block text-xs font-body uppercase tracking-widest text-muted-foreground">
                {service.mode}
              </span>
            </div>
          </div>

          <p className="text-muted-foreground font-body font-light leading-relaxed text-lg mb-10 whitespace-pre-line">{service.description}</p>

          <div className="mb-10">
            <h2 className="text-sm font-body uppercase tracking-[0.2em] text-foreground mb-4">Enfoque</h2>
            <ul className="flex flex-wrap gap-2">
              {service.benefits.map((b) => (
                <li key={b} className="rounded-full bg-sage-light px-4 py-2 text-sm font-body text-primary">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <Button variant="hero" size="lg" className="rounded-full" asChild>
            <a href={`${WA_BASE}${waMessage}`} target="_blank" rel="noopener noreferrer">
              Consultar por este servicio
            </a>
          </Button>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServiceDetail;
