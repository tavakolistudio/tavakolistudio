'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"

interface ServicesHeroProps {
  label: string
  heading: string
  description: string
}

export function ServicesHero({ label, heading, description }: ServicesHeroProps) {
  return (
    <Card className="w-full h-[520px] bg-[#0A0A0A] border-white/5 relative overflow-hidden rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#C9A96E"
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-14 relative z-10 flex flex-col justify-center">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {label}
          </motion.p>

          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {heading}
          </motion.h1>

          <motion.p
            className="mt-6 text-[#888888] leading-relaxed text-sm md:text-base max-w-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Right content — 3D Spline scene */}
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
