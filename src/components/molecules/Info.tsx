import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

interface ClinicInfoProps {
  schedule: string;
  address: string;
  phone: string;
}

interface InfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

function InfoItem({ icon: Icon, text }: InfoItemProps) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <Icon className="w-4 h-4 text-clinic-primary flex-shrink-0" />
      <span className="leading-relaxed">{text}</span>
    </div>
  );
}

export function ClinicInfo({ schedule, address, phone }: ClinicInfoProps) {
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 animate-fade-in">
      <CardContent className="p-4 space-y-3">
        <InfoItem icon={Clock} text={schedule} />
        <InfoItem icon={MapPin} text={address} />
        <InfoItem icon={Phone} text={phone} />
      </CardContent>
    </Card>
  );
}
