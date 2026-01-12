"use client"

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

export function KioskModel({ open }: { open: boolean }) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials } = useGLTF("/models/cafe-kiosk.glb")
  
  // Find the door mesh in the loaded model
  // This assumes the door mesh is named "Door" in your Blender file.
  const door = useRef<THREE.Mesh>()

  useEffect(() => {
    if (nodes) {
        for (const nodeKey in nodes) {
            if (nodes[nodeKey].name === 'Door') {
                 door.current = nodes[nodeKey] as THREE.Mesh;
                 // Set the pivot point for rotation to the edge of the door
                 const box = new THREE.Box3().setFromObject(door.current);
                 const size = new THREE.Vector3();
                 box.getSize(size);
                 door.current.position.x += size.x / 2;
                 break;
            }
        }
    }
  }, [nodes]);


  useFrame((_, delta) => {
    // Auto-rotate the whole model when the door is closed
    if (!open) {
      group.current.rotation.y += delta * 0.2
    }

    // Animate the door opening and closing
    if (door.current) {
      door.current.rotation.y = THREE.MathUtils.lerp(
        door.current.rotation.y,
        open ? -Math.PI / 2 : 0,
        0.1
      )
    }
  })

  return (
    <group ref={group} scale={1.4} dispose={null}>
      <primitive object={nodes.Scene} />
    </group>
  )
}

useGLTF.preload("/models/cafe-kiosk.glb")
