import * as THREE from "three"

export const grpMaterial = new THREE.MeshStandardMaterial({
  color: "#F2F4F5",       // Steel White
  roughness: 0.55,
  metalness: 0.05,
})

export const metalMaterial = new THREE.MeshStandardMaterial({
  color: "#C7CED3",
  roughness: 0.35,
  metalness: 0.6,
})

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  transmission: 0.9,
  opacity: 0.9,
  roughness: 0.1,
  metalness: 0,
  thickness: 0.02,
  envMapIntensity: 1,
  transparent: true,
})
