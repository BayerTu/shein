import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { DotPattern } from "@/components/ui/dot-pattern";
import { HyperText } from "@/components/ui/hyper-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-green-500 font-sans bg-black">
      <main className="flex flex-col ">

        <section className="text-xl">
          <HyperText
            className="px-20 text-xl font-mono"
            duration={10000}
            characterSet={[
            
              '#', '@', '%', '&', '*',
              'Ω', 'Ψ', 'Δ', 'λ',
              'ø', 'ß', '¿', '¡',
              '☠', '☢', '✖'
            ]}
          >
            Olá, Mavi! Seja bem-vindo ao seu site. É bem simples, mas foi feito com bastante intenção e carinho. Espero que goste!
          </HyperText>
                    
        </section>

      </main>
    </div >
  );
}
