import type { LucideIcon } from "lucide-react";
import { Flower2, Heart, Droplets, Hand } from "lucide-react";

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  mode: string;
  description: string;
  benefits: string[];
  /** Si está definido, sustituye la lista de etiquetas por este texto (p. ej. “ideal para: …”). */
  idealFor?: string;
};

export const services: ServiceItem[] = [
  {
    slug: "medicina-tradicional-china",
    icon: Flower2,
    title: "Medicina Tradicional China",
    mode: "Presencial",
    description:
      "Restaurá el equilibrio energético de tu cuerpo a través de técnicas milenarias que promueven el bienestar físico y emocional.",
    benefits: [],
    idealFor:
      "ideal para: alivio del dolor, trastornos digestivos, lumbalgias, cefaleas, bruxismo, estrés, ansiedad, insomnio, y mucho más.",
  },
  {
    slug: "compassionate-inquiry",
    icon: Heart,
    title: "Compassionate Inquiry",
    mode: "Online",
    description:
      "Un acompañamiento emocional profundo basado en la conciencia, para explorar las raíces de tus patrones y liberar lo que ya no te sirve.\n\nUn acercamiento al trauma de manera amorosa, segura y a tu ritmo.",
    benefits: ["Conciencia emocional", "Sanación profunda", "Autoconocimiento", "Experiencia somática"],
  },
  {
    slug: "terapia-floral-bach",
    icon: Droplets,
    title: "Terapia Floral Bach",
    mode: "Online",
    description:
      "Trabajo emocional sutil y poderoso a través de esencias florales, para acompañar procesos de cambio y transformación interior.",
    benefits: ["Equilibrio emocional", "Acompañamiento suave", "Transformación interior"],
  },
  {
    slug: "masajes-terapeuticos",
    icon: Hand,
    title: "Masajes Terapéuticos",
    mode: "Presencial",
    description:
      "Relajación profunda, alivio de tensiones y una invitación a reconectar con tu cuerpo desde la calma y la presencia.",
    benefits: ["Relajación profunda", "Alivio de tensiones", "Conexión corporal"],
  },
];

export function getServiceBySlug(slug: string | undefined): ServiceItem | undefined {
  if (!slug) return undefined;
  return services.find((s) => s.slug === slug);
}

/** Si completás una URL (https://…), "Ver más" y /servicios/:slug abren ese enlace. Si queda vacío, se usa /landings/:slug/ en este sitio. */
export const externalLandingUrls: Partial<Record<string, string>> = {
  "medicina-tradicional-china": "https://barolands.github.io/caminoadentro-medicinachina/",
  "compassionate-inquiry": "https://barolands.github.io/web/",
};

export function getServiceLandingUrl(slug: string): string {
  const raw = externalLandingUrls[slug]?.trim();
  if (raw) return raw;
  return `${import.meta.env.BASE_URL}landings/${slug}/`;
}
