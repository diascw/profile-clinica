import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  variant?: "default" | "primary" | "secondary" | "tertiary";
}

export function LinkCard({
  title,
  description,
  href,
  icon: Icon,
  variant = "default",
}: LinkCardProps) {
  const variantStyles = {
    default: "hover:bg-muted/50 border-border",
    primary: "bg-primary/10 hover:bg-primary/20 border-primary",
    secondary: "bg-secondary/10 hover:bg-secondary/20 border-secondary",
    tertiary: "bg-tertiary/10 hover:bg-tertiary/20 border-tertiary",
  };

  const iconStyles = {
    default: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  return (
    <a href={href} className="block">
      <Card
        className={cn(
          "transition-all duration-200 hover:scale-[1.02] hover:shadow-md border-2",
          variantStyles[variant]
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                variant === "primary" && "bg-primary/20",
                variant === "secondary" && "bg-secondary/20",
                variant === "tertiary" && "bg-tertiary/20",
                variant === "default" && "bg-muted"
              )}
            >
              <Icon className={cn("w-6 h-6", iconStyles[variant])} />
            </div>
            <div className="flex-1">
              <h3
                className={cn(
                  "font-semibold",
                  variant === "primary" && "text-primary",
                  variant === "secondary" && "text-secondary",
                  variant === "tertiary" && "text-tertiary",
                  variant === "default" && "text-foreground"
                )}
              >
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
