import type { LucideIcon } from "lucide-react";
import { Flower2, Heart, Droplets, Hand } from "lucide-react";

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  mode: string;
  description: string;
  benefits: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "medicina-tradicional-china",
    icon: Flower2,
    title: "Medicina Tradicional China",
    mode: "Presencial",
    description:
      "Restaurá el equilibrio energético de tu cuerpo a través de técnicas milenarias que promueven el bienestar físico y emocional.",
    benefits: ["Equilibrio energético", "Bienestar físico", "Armonización integral"],
  },
  {
    slug: "compassionate-inquiry",
    icon: Heart,
    title: "Compassionate Inquiry",
    mode: "Online",
    description:
      "Un acompañamiento emocional profundo basado en la conciencia, para explorar las raíces de tus patrones y liberar lo que ya no te sirve.\n\nUn acercamiento al trauma de manera amorosa, segura y a tu ritmo.",
    benefits: ["Conciencia emocional", "Sanación profunda", "Autoconocimiento"],
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
