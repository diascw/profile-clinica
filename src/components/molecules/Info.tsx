import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

interface QuickInfoProps {
  schedule: string;
  address: string;
  phone: string;
}

interface InfoProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

function Info({ icon: Icon, text }: InfoProps) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <Icon className="w-4 h-4 text-clinic-primary flex-shrink-0" />
      <span className="leading-relaxed">{text}</span>
    </div>
  );
}

export function QuickInfo({ schedule, address, phone }: QuickInfoProps) {
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 animate-fade-in">
      <CardContent className="p-4 space-y-3">
        <Info icon={Clock} text={schedule} />
        <Info icon={MapPin} text={address} />
        <Info icon={Phone} text={phone} />
      </CardContent>
    </Card>
  );
}
