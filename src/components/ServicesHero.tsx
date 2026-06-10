'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

interface ServicesHeroProps {
  label: string
  heading: string
  description: string
}

const floatingShapes = [
  { size: 260, x: "60%", y: "10%", delay: 0, duration: 7 },
  { size: 140, x: "80%", y: "55%", delay: 1.2, duration: 9 },
  { size: 80,  x: "72%", y: "20%", delay: 0.6, duration: 6 },
  { size: 48,  x: "90%", y: "75%", delay: 2,   duration: 8 },
  { size: 200, x: "50%", y: "70%", delay: 0.3, duration: 10 },
]

export function ServicesHero({ label, heading, description }: ServicesHeroProps) {
  return (
    <Card className="w-full h-[500px] bg-[#0A0A0A] border-white/5 relative overflow-hidden rounded-none">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#C9A96E" />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#C9A96E]/20"
            style={{ width: shape.size, height: shape.size, left: shape.x, top: shape.y }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: shape.duration, delay: shape.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Gold center glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 320,
            height: 320,
            left: "65%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, #C9A96E18 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Thin horizontal lines */}
        {[30, 50, 70].map((top, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent"
            style={{ top: `${top}%`, left: "45%", right: "0%" }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 4, delay: i * 1.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Left content */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-14 max-w-xl">
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
    </Card>
  )
}
