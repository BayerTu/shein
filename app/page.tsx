import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Lightbulb } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans bg-white dark:bg-black">
      <main>
        <AnimatedThemeToggler />
      </main>
    </div>
  );
}
