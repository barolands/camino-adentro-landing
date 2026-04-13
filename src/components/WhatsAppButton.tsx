import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5491168344165?text=Hola!%20Me%20gustaría%20consultar%20por%20una%20sesión"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,40%)] text-[hsl(40,33%,97%)] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
