// This component has been replaced by hero-cafe-3d.tsx and can be safely deleted.
// Keeping it for reference in case of rollback.
"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { getImage } from "@/lib/images"

export default function HeroCafeKiosk() {
  const [open, setOpen] = useState(false)
  const kioskImage = getImage("cafe-kiosk-hero");

  return (
    <section className="relative overflow-hidden bg-emphz-hero text-white">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            GRP Modular Café Kiosk
            <br />
            <span className="text-emphz-teal">Engineered to Launch Faster</span>
          </h1>

          <ul className="mt-6 space-y-2 text-steel">
            <li>• Factory-built GRP structure</li>
            <li>• Custom layout & dimensions</li>
            <li>• Plug-and-play deployment</li>
          </ul>

          <div className="mt-8 flex gap-4">
            <Button
              className="bg-emphz-teal hover:bg-emphz-teal-dark"
              onClick={() => setOpen(true)}
            >
              View Specs
            </Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emphz-midnight"
            >
              Request Quote
            </Button>
          </div>
        </div>

        {/* RIGHT INTERACTIVE MODEL */}
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="relative cursor-pointer rounded-2xl bg-white/5 p-4 backdrop-blur"
          >
            {kioskImage && (
                <Image
                src={kioskImage.url}
                alt={kioskImage.description}
                width={600}
                height={400}
                className="rounded-xl"
                data-ai-hint={kioskImage.hint}
                priority
                />
            )}

            <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm">
              Tap to explore
            </div>
          </motion.div>

          {/* SPEC PANEL */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 z-10 rounded-2xl bg-emphz-midnight p-6 text-white shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">
                    Café Kiosk – Specifications
                  </h3>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-steel hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <ul className="mt-6 space-y-3 text-steel">
                  <li>• Structure: GRP sandwich panels</li>
                  <li>• Size: Custom (standard 10–20 ft)</li>
                  <li>• Electrical: Pre-wired</li>
                  <li>• Plumbing: Ready ports</li>
                  <li>• Installation: No civil work</li>
                </ul>

                <Button className="mt-8 w-full bg-emphz-teal">
                  Request Specification PDF
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
