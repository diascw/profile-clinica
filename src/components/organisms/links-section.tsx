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
    title: "WhatsApp",
    description: "Fale conosco pelo WhatsApp",
    href: "https://wa.me/5533998420633",
    icon: MessageCircle,
    variant: "primary" as const,
  },
  {
    title: "Localização",
    description: "Encontre nossa clínica",
    href: "https://www.google.com/maps/place/Cl%C3%ADnica+M%C3%A9dica+Vale+Viver/@-16.2513684,-40.1513323,17z/data=!3m1!4b1!4m6!3m5!1s0x749ef5353c51749:0x32814216bfe303fd!8m2!3d-16.2513684!4d-40.1513323!16s%2Fg%2F11krbr3k_s?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    icon: MapPin,
    variant: "tertiary" as const,
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
    href: "https://www.instagram.com/clinicamedicavaleviver/",
    icon: Instagram,
    variant: "secondary" as const,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/clinicamedicavaleviver/",
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
