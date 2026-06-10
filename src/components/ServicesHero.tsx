'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

interface ServicesHeroProps {
  label: string
  heading: string
  description: string
}

export function ServicesHero({ label, heading, description }: ServicesHeroProps) {
  return (
    <Card className="w-full h-[500px] bg-[#0A0A0A] border-white/5 relative overflow-hidden rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#C9A96E"
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">
            {label}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {heading}
          </h1>
          <p className="mt-6 text-[#888888] max-w-sm leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative hidden md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
