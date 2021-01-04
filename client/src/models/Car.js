/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: scailman (https://sketchfab.com/scailman)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-small-car-ebe7c5e98a7448b5abb2eaf0cb22b766
title: Low Poly Small car
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/car/car.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.82, 0.79, 3.1]} rotation={[0, 0, 0]}>
            <group position={[0.23, 0, 0]} rotation={[0, -1.57, 0]} scale={[1.1, 1.1, 1]}>
              <mesh material={materials.Tire} geometry={nodes.FR_Wheel_Tire_0.geometry} />
              <mesh material={materials.material} geometry={nodes.FR_Wheel_Rim_0.geometry} />
              <mesh material={materials.Handler} geometry={nodes.FR_Wheel_Handler_0.geometry} />
            </group>
          </group>
          <group position={[-1.82, 0.79, -3.19]} rotation={[0, 0, 0]}>
            <group position={[0.23, 0, 0]} rotation={[0, -1.57, 0]} scale={[1.1, 1.1, 1]}>
              <mesh material={materials.Tire} geometry={nodes.RR_Wheel_Tire_0.geometry} />
              <mesh material={materials.material} geometry={nodes.RR_Wheel_Rim_0.geometry} />
              <mesh material={materials.Handler} geometry={nodes.RR_Wheel_Handler_0.geometry} />
            </group>
          </group>
          <group position={[1.82, 0.79, 3.1]} rotation={[0, 0, 0]}>
            <group position={[-0.23, 0, 0]} rotation={[0, 1.57, 0]} scale={[1.1, 1.1, 1]}>
              <mesh material={materials.Tire} geometry={nodes.FL_Wheel_Tire_0.geometry} />
              <mesh material={materials.material} geometry={nodes.FL_Wheel_Rim_0.geometry} />
              <mesh material={materials.Handler} geometry={nodes.FL_Wheel_Handler_0.geometry} />
            </group>
          </group>
          <group position={[1.82, 0.79, -3.19]} rotation={[0, 0, 0]}>
            <group position={[-0.23, 0, 0]} rotation={[0, 1.57, 0]} scale={[1.1, 1.1, 1]}>
              <mesh material={materials.Tire} geometry={nodes.RL_Wheel_Tire_0.geometry} />
              <mesh material={materials.material} geometry={nodes.RL_Wheel_Rim_0.geometry} />
              <mesh material={materials.Handler} geometry={nodes.RL_Wheel_Handler_0.geometry} />
            </group>
          </group>
          <group position={[0, 2.25, -0.37]} rotation={[0, 0, 0]}>
            <group position={[0, 0.37, 2.37]} rotation={[0, -1.57, 0]} scale={[1, 1, 1]}>
              <mesh material={materials.InteriorPanel} geometry={nodes.Interior_InteriorPanel_0.geometry} />
              <mesh material={materials.InteriorPanel_0} geometry={nodes.Interior_InteriorPanel_0_1.geometry} />
              <mesh material={materials.Handler} geometry={nodes.Interior_Handler_0.geometry} />
              <mesh material={materials.Tire} geometry={nodes.Interior_Tire_0.geometry} />
            </group>
          </group>
          <group position={[0.92, 2.81, 1.27]} rotation={[0, 0, 0]}>
            <group position={[0, 0, -0.01]} rotation={[Math.PI / 9, 0, 0]} scale={[1, 1, 1]}>
              <mesh material={materials.InteriorPanel_0} geometry={nodes.Steerwheel_InteriorPanel_0.geometry} />
              <mesh material={materials.InteriorPanel} geometry={nodes.Steerwheel_InteriorPanel_0_1.geometry} />
              <mesh material={materials.Handler} geometry={nodes.Steerwheel_Handler_0.geometry} />
            </group>
          </group>
          <group position={[0, 2.89, -0.03]} rotation={[0, 0, 0]}>
            <group position={[0, -2.23, 0.03]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
              <mesh material={materials.Bumpers} geometry={nodes.Chassis_Bumpers_0.geometry} />
              <mesh material={materials.Chassis} geometry={nodes.Chassis_Chassis_0.geometry} />
            </group>
          </group>
          <group position={[0, 2.67, -0.03]} rotation={[0, 0, 0]}>
            <group position={[0, -2.01, 0.03]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Turn_lights} geometry={nodes.Turn_Lights_r_Turn_lights_0.geometry} />
            </group>
          </group>
          <group position={[2.06, 2.94, 1.91]} rotation={[0, 0, 0]}>
            <group position={[-2.06, 0, -1.16]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
              <mesh material={materials.Chassis} geometry={nodes.FL_Door_Chassis_0.geometry} />
              <mesh material={materials.InteriorPanel} geometry={nodes.FL_Door_InteriorPanel_0.geometry} />
              <mesh material={materials.Bumpers} geometry={nodes.FL_Door_Bumpers_0.geometry} />
              <mesh material={materials.Handler} geometry={nodes.FL_Door_Handler_0.geometry} />
              <mesh material={materials.Mirror} geometry={nodes.FL_Door_Mirror_0.geometry} />
              <mesh material={materials.Windows} geometry={nodes.FL_Door_Windows_0.geometry} />
            </group>
          </group>
          <group position={[2.05, 2.94, -0.62]} rotation={[0, 0, 0]}>
            <group position={[-2.05, 0, -1.05]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
              <mesh material={materials.Chassis} geometry={nodes.RL_Door_Chassis_0.geometry} />
              <mesh material={materials.InteriorPanel} geometry={nodes.RL_Door_InteriorPanel_0.geometry} />
              <mesh material={materials.Handler} geometry={nodes.RL_Door_Handler_0.geometry} />
              <mesh material={materials.Bumpers} geometry={nodes.RL_Door_Bumpers_0.geometry} />
              <mesh material={materials.Windows} geometry={nodes.RL_Door_Windows_0.geometry} />
            </group>
          </group>
          <group position={[-2.05, 2.94, -0.62]} rotation={[0, 0, 0]}>
            <group position={[2.05, 0, -1.05]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
              <mesh material={materials.Chassis} geometry={nodes.RR_Door_Chassis_0.geometry} />
              <mesh material={materials.InteriorPanel} geometry={nodes.RR_Door_InteriorPanel_0.geometry} />
              <mesh material={materials.Handler} geometry={nodes.RR_Door_Handler_0.geometry} />
              <mesh material={materials.Bumpers} geometry={nodes.RR_Door_Bumpers_0.geometry} />
              <mesh material={materials.Windows} geometry={nodes.RR_Door_Windows_0.geometry} />
            </group>
          </group>
          <group position={[-2.06, 2.94, 1.91]} rotation={[0, 0, 0]}>
            <group position={[2.06, 0, -1.16]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
              <mesh material={materials.Chassis} geometry={nodes.FR_Door_Chassis_0.geometry} />
              <mesh material={materials.InteriorPanel} geometry={nodes.FR_Door_InteriorPanel_0.geometry} />
              <mesh material={materials.Bumpers} geometry={nodes.FR_Door_Bumpers_0.geometry} />
              <mesh material={materials.Handler} geometry={nodes.FR_Door_Handler_0.geometry} />
              <mesh material={materials.Mirror} geometry={nodes.FR_Door_Mirror_0.geometry} />
              <mesh material={materials.Windows} geometry={nodes.FR_Door_Windows_0.geometry} />
            </group>
          </group>
          <group position={[0, 3.89, -0.76]} rotation={[0, 0, 0]}>
            <group position={[0, 0, 2.75]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Windows} geometry={nodes.Windows_Windows_0.geometry} />
            </group>
          </group>
          <group position={[0, 2.22, 4.35]} rotation={[0, 0, 0]}>
            <group position={[0, -1.56, -4.35]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Front_lights} geometry={nodes.Front_Lights_Front_lights_0.geometry} />
            </group>
          </group>
          <group position={[0, 2.91, -4.4]} rotation={[0, 0, 0]}>
            <group position={[0, -2.24, 4.4]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Brake_lights} geometry={nodes.Brake_Lights_Brake_lights_0.geometry} />
            </group>
          </group>
          <group position={[0, 2.67, -0.03]} rotation={[0, 0, 0]}>
            <group position={[0, -2.01, 0.03]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh material={materials.Turn_lights} geometry={nodes.Turn_Lights_l_Turn_lights_0.geometry} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/car/car.gltf')
