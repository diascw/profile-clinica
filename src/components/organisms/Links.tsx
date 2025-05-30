"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import { Buttons } from "../atoms/Buttons";

interface LinksProps {
  whatsapp: string;
  facebookUrl: string;
  instagramUrl: string;
  email: string;
}

export function Links({
  whatsapp,
  facebookUrl,
  instagramUrl,
  email,
}: LinksProps) {
  const handleOpen = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-3 animate-slide-up">
      <Buttons
        icon={FaWhatsapp}
        label="Agendar pelo WhatsApp"
        variant="whatsapp"
        size="lg"
        fullWidth
        onClick={() => handleOpen(`https://wa.me/${whatsapp}`)}
      />

      <div className="grid grid-cols-2 gap-3">
        <Buttons
          icon={FaFacebook}
          label="Facebook"
          variant="facebook"
          onClick={() => handleOpen(facebookUrl)}
        />

        <Buttons
          icon={FaInstagram}
          label="Instagram"
          variant="instagram"
          onClick={() => handleOpen(instagramUrl)}
        />
      </div>

      <Buttons
        icon={Mail}
        label="Enviar E-mail"
        variant="clinic-primary"
        fullWidth
        onClick={() => handleOpen(`mailto:${email}`)}
      />

      <Button
        icon={MapPin}
        label="Como Chegar"
        variant="clinic-tertiary"
        fullWidth
        onClick={() =>
          handleOpen(
            "https://www.google.com/maps/place/Cl%C3%ADnica+M%C3%A9dica+Vale+Viver/data=!4m2!3m1!1s0x0:0x32814216bfe303fd?sa=X&ved=1t:2428&ictx=111"
          )
        }
      />
    </div>
  );
}
