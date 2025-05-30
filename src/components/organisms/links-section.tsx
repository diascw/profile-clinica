import { LinkCard } from "@/components/molecules/link-card";
import {
  Stethoscope,
  Clock,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { OperatingHoursModal } from "@/components/molecules/operating-hours-modal";

const mainLinks = [
  {
    title: "Nossa Localização",
    description: "Encontre nossa clínica",
    href: "#",
    icon: MapPin,
    variant: "tertiary" as const,
  },
  {
    title: "WhatsApp",
    description: "Fale conosco pelo WhatsApp",
    href: "https://wa.me/5511999999999",
    icon: MessageCircle,
    variant: "primary" as const,
  },
];

const operatingHoursLink = {
  title: "Horários de Funcionamento",
  description: "Confira nossos horários",
  icon: Clock,
  variant: "secondary" as const,
};

const socialLinks = [
  {
    title: "Instagram",
    href: "#",
    icon: Instagram,
    variant: "secondary" as const,
  },
  {
    title: "Facebook",
    href: "#",
    icon: Facebook,
    variant: "tertiary" as const,
  },
];

export function LinksSection() {
  return (
    <div className="space-y-4 mb-8">
      {mainLinks.map((link, index) => (
        <LinkCard key={index} {...link} />
      ))}

      <OperatingHoursModal>
        <div className="w-full">
          <LinkCard {...operatingHoursLink} href="#" />
        </div>
      </OperatingHoursModal>

      <div className="pt-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">
          Redes Sociais
        </h3>
        <div className="flex gap-4 justify-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`w-14 h-14 rounded-full flex items-center justify-center group transition-transform hover:scale-105 ${
                social.variant === "secondary"
                  ? "bg-secondary/20 hover:bg-secondary/30"
                  : "bg-tertiary/20 hover:bg-tertiary/30"
              }`}
            >
              <social.icon
                className={`w-6 h-6 ${
                  social.variant === "secondary"
                    ? "text-secondary"
                    : "text-tertiary"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
