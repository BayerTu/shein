'use client'
import { Confetti, ConfettiRef } from "@/components/ui/confetti"
import { useRef } from "react"
import Image from "next/image"



export default function SecondPage() {
  const confettiRef = useRef<ConfettiRef>(null)
  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-300 bg-black flex-col">
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({})
        }}
      />

      <Image
        src="/jappones.jpeg"
        width={600}
        height={400}
        className="rounded-3xl" alt={""}
      />

    </main>
  )
}
