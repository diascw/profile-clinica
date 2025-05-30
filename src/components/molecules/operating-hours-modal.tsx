"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface OperatingHoursModalProps {
  children: React.ReactNode;
}

const scheduleData = [
  { day: "Segunda-feira", hours: "06:00 - 18:00", isOpen: true },
  { day: "Terça-feira", hours: "07:00 - 18:00", isOpen: true },
  { day: "Quarta-feira", hours: "06:00 - 18:00", isOpen: true },
  { day: "Quinta-feira", hours: "07:00 - 18:00", isOpen: true },
  { day: "Sexta-feira", hours: "07:00 - 18:00", isOpen: true },
  { day: "Sábado", hours: "Fechado", isOpen: false },
  { day: "Domingo", hours: "Fechado", isOpen: false },
];

export function OperatingHoursModal({ children }: OperatingHoursModalProps) {
  const [open, setOpen] = useState(false);

  const getCurrentDay = () => {
    const days = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-secondary">
            <Clock className="w-5 h-5" />
            Horários de Funcionamento
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <span>Hoje é {currentDay}</span>
          </div>

          {scheduleData.map((schedule, index) => (
            <Card
              key={index}
              className={cn(
                "transition-colors",
                schedule.day === currentDay && "border-primary bg-primary/5",
                !schedule.isOpen && "opacity-60"
              )}
            >
              <CardContent className="p-3">
                <div className="flex justify-between items-center">
                  <span
                    className={cn(
                      "font-medium",
                      schedule.day === currentDay && "text-primary",
                      !schedule.isOpen && "text-muted-foreground"
                    )}
                  >
                    {schedule.day}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      schedule.isOpen
                        ? "text-secondary font-medium"
                        : "text-muted-foreground",
                      schedule.day === currentDay &&
                        schedule.isOpen &&
                        "text-primary font-semibold"
                    )}
                  >
                    {schedule.hours}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="mt-6 p-4 bg-tertiary/10 rounded-lg border border-tertiary/20">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-tertiary mb-1">
                  Informações Importantes
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Os horários podem sofrer variaçõe em razão de feriados ou
                  alterações da nossa agenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
