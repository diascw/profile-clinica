import { Logo } from "@/components/atoms/Logo";

interface HeaderProps {
  name: string;
  description: string;
}

export function Header({ name, description }: HeaderProps) {
  return (
    <header className="text-center space-y-4 animate-slide-up">
      <div className="flex justify-center">
        <Logo src="/logo.png" alt={name} fallbackText={name[0]} size={96} />
      </div>

      <div className="space-y-2">
        <p className="text-white/80 text-sm px-4 leading-relaxed">
          {description}
        </p>
      </div>
    </header>
  );
}
