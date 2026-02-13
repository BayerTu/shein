'use client'
import { Confetti, ConfettiRef } from "@/components/ui/confetti"
import { useRef } from "react"
import Image from "next/image"
import { MorphingText } from "@/components/ui/morphing-text"
const texts = [
  "EU TE AMO",
  "FELIZ DIA DOS NAMORADOS",
]


export default function SecondPage() {
  const confettiRef = useRef<ConfettiRef>(null)
  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-300 gap-2 flex-col">
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({})
        }}
      />
      <section className="flex flex-col gap-10">
        <div>
          <Image
            src="/jappones.jpeg"
            width={500}
            height={300}
            className="rounded-3xl " alt={""}
          />
        </div>
        <div className="">
          <MorphingText texts={texts} />
        </div>
      </section>
    </main>
  )
}
