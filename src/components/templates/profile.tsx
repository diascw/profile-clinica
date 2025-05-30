import { Header } from "@/components/molecules/Header";
import { ClinicInfo } from "../molecules/Info";
import { Links } from "@/components/organisms/Links";

interface ProfileProps {
  name: string;
  description: string;
  schedule: string;
  address: string;
  phone: string;
  whatsapp: string;
  facebookUrl: string;
  instagramUrl: string;
  email: string;
}

export function Profile({
  name,
  description,
  schedule,
  address,
  phone,
  whatsapp,
  facebookUrl,
  instagramUrl,
  email,
}: ProfileProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-clinic-primary via-clinic-tertiary to-clinic-secondary p-4">
      <div className="max-w-md mx-auto space-y-6 pt-8">
        <Header name={name} description={description} />

        <ClinicInfo schedule={schedule} address={address} phone={phone} />

        <Links
          whatsapp={whatsapp}
          facebookUrl={facebookUrl}
          instagramUrl={instagramUrl}
          email={email}
        />

        <footer className="text-center pt-4">
          <p className="text-white/70 text-sm">
            © 2025 {name} - Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}
