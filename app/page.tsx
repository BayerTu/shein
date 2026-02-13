
import { HyperText } from "@/components/ui/hyper-text";
import MeuComponente from "@/components/texto"
import Texto from "@/components/texto";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-green-500 font-sans bg-black">
      <main className="flex flex-col ">
        
        <section className="text-xl">
          <Texto />
        </section>

      </main>
    </div >
  );
}
