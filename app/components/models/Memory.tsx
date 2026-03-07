import React, { JSX } from 'react'
import { useGLTF } from '@react-three/drei'

export function Memory(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('models/dalithe_persistence_of_memory.glb')
  return <primitive object={scene} {...props} dispose={null} />
}

useGLTF.preload('models/dalithe_persistence_of_memory.glb')

