import { ThemeToggle } from "@/components/molecules/theme-toggle";

export function Header() {
  return (
    <header className="flex justify-end mb-6">
      <ThemeToggle />
    </header>
  );
}
