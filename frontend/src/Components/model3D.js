/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { AccordionActions } from '@material-ui/core'

/////////////// Animation List:
// AirSquat: 
// AirSquat2: 
// BigCut: 
// Dying: 
// HitToBody: 
// JoyfulJump: 
// RumbaDance: 
// Shuffling: 
// Sitting2: 
// SittingClap: 
// Standing: 
// Thankful: 
// Uprock: 
// assasination: 
// break1990: 
// breakFreeze: 
// flair: 
// hip-hop: 
// playDrum: 
// silly_dance: 
// sitting: 
// situpus: 
// zombie-down: 

function usePrevious(value){
  const ref = useRef(value)
  useEffect(()=>{
    ref.current = value
  })
  return ref.current
}
export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/girl25Actions.gltf')
  const { actions } = useAnimations(animations, group)
  const nowAnimation = props.myAnimation
  const prevAnimation = usePrevious(nowAnimation)
  let scale = [0.028, 0.028, 0.028]
  let position = [0,-1.9,0]
  let rotation = [Math.PI / 2, 0, -0.5]
  console.log("Animation List:",actions)
  if(props.start){
    scale = [0.025, 0.025, 0.025]
    position = [-0, -3, 0]
  }
  if(nowAnimation === 'kick'){
    rotation = [Math.PI / 2, 0, -0.]
  }
  useEffect(()=>{
    actions[prevAnimation].stop()
    actions[nowAnimation].play()
  },[nowAnimation])
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={rotation} scale={scale} position={position}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Girl_Body_Geo.geometry}
          material={materials.Girl01_Body_MAT1}
          skeleton={nodes.Girl_Body_Geo.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Girl_Brows_Geo.geometry}
          material={materials.Girl01_Brows_MAT1}
          skeleton={nodes.Girl_Brows_Geo.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Girl_Eyes_Geo.geometry}
          material={materials.Girl01_Eyes_MAT1}
          skeleton={nodes.Girl_Eyes_Geo.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Girl_Mouth_Geo.geometry}
          material={materials.Girl01_Mouth_MAT1}
          skeleton={nodes.Girl_Mouth_Geo.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/girl25Actions.gltf')
