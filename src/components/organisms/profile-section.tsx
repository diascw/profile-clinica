import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileSection() {
  return (
    <div className="text-center mb-8">
      <div className="relative mb-4">
        <Avatar className="w-24 h-24 mx-auto border-4 border-primary">
          <AvatarImage src="/logo.png" alt="Clínica Médica" />
          <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
            CM
          </AvatarFallback>
        </Avatar>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed">
        Cuidando da sua saúde com excelência e dedicação. Especialistas em
        diversas áreas médicas.
      </p>
    </div>
  );
}
