import React, { JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export function Memory(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('models/dalithe_persistence_of_memory.glb')
  const cloned = useMemo(() => scene.clone(), [scene])
  return <primitive object={cloned} {...props} dispose={null} />
}

useGLTF.preload('models/dalithe_persistence_of_memory.glb')

