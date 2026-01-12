"use client"

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { grpMaterial, metalMaterial, glassMaterial } from "./materials"

export function KioskModel({ open }: { open: boolean }) {
  const group = useRef<THREE.Group>(null!)
  const door = useRef<THREE.Object3D | null>(null)

  const { scene } = useGLTF("/models/cafe-kiosk.glb")

  useEffect(() => {
    scene.traverse((obj: any) => {
      if (!obj.isMesh) return

      obj.castShadow = true
      obj.receiveShadow = true

      if (obj.name.includes("Body") || obj.name.includes("Door")) {
        obj.material = grpMaterial
        if (obj.name.includes("Door")) {
            door.current = obj
             // Set the pivot point for rotation to the edge of the door
             const box = new THREE.Box3().setFromObject(door.current);
             const size = new THREE.Vector3();
             box.getSize(size);
             door.current.position.x += size.x / 2;
        }
      }

      if (obj.name.includes("Metal")) {
        obj.material = metalMaterial
      }

      if (obj.name.includes("Glass")) {
        obj.material = glassMaterial
      }
    })
  }, [scene])

  useFrame((_, delta) => {
    if (!open) {
      group.current.rotation.y += delta * 0.2
    }

    if (door.current) {
      door.current.rotation.y = THREE.MathUtils.lerp(
        door.current.rotation.y,
        open ? -Math.PI / 2 : 0,
        0.08
      )
    }
  })

  return (
    <group ref={group} scale={1.4} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload("/models/cafe-kiosk.glb")