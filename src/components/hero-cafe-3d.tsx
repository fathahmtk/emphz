"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense, useState } from "react"
import { KioskModel } from "./kiosk-model"
import { Button } from "@/components/ui/button"

function ModelLoadingFallback() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="white" />
        </mesh>
    )
}


export default function HeroCafe3D() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative bg-emphz-hero text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-semibold leading-tight">
            GRP Modular Café Kiosk
          </h1>

          <p className="mt-4 text-steel">
            Factory-built. Custom engineered. Deployed fast.
          </p>

          <ul className="mt-6 space-y-2 text-steel">
            <li>• GRP sandwich construction</li>
            <li>• Electrical & plumbing ready</li>
            <li>• Zero civil work</li>
          </ul>

          <div className="mt-8 flex gap-4">
            <Button
              className="bg-emphz-teal hover:bg-emphz-teal-dark"
              onClick={() => setOpen(!open)}
            >
              {open ? 'Close Door' : 'Open & View Specs'}
            </Button>

            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emphz-midnight">
              Request Quote
            </Button>
          </div>
        </div>

        {/* 3D CANVAS */}
        <div className="h-[420px] rounded-2xl bg-black/20 backdrop-blur cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Suspense fallback={<ModelLoadingFallback />}>
                <KioskModel open={open} />
            </Suspense>

            <Environment preset="city" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
