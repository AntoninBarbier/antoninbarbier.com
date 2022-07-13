import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { FunctionComponent, useRef } from 'react'
import * as THREE from 'three'
import styles from './styles.module.scss'

interface StarGeometryType {
  x: number
  y: number
  z: number
  velocity: number
  acceleration: number
}

interface StarsPropsType {
  count: number
}

const Stars: FunctionComponent<StarsPropsType> = ({ count }) => {
  useThree(({ camera }) => {
    camera.rotation.set(Math.PI / 2, 0, 0)
  })
  const mesh = useRef<THREE.BufferGeometry>(null!)
  const points = useRef()
  const particles: Array<StarGeometryType> = []
  for (let i = 0; i < count; i++) {
    let vertex = new THREE.Vector3(Math.random() * 1200 - 600, Math.random() * 1200 - 600, Math.random() * 1200 - 600)
    let starGeometry = {
      ...vertex,
      velocity: 0,
      acceleration: 0.001,
    }
    particles.push(starGeometry)
  }

  useFrame(() => {
    const positions = mesh.current.setFromPoints(particles).attributes.position.array
    console.log(positions)
    particles.forEach((particle, i) => {
      particle.velocity += particle.acceleration
      particle.y -= particle.velocity
      if (particle.y < -200) {
        particle.y = 500
        particle.velocity = 0
      }
    })
    points.current.rotation.y += 0.001
  })

  return (
    <points ref={points}>
      <bufferGeometry attach='geometry' ref={mesh} />
      <pointsMaterial size={0.2} color={'white'} opacity={0.2} sizeAttenuation={true} />
    </points>
  )
}

const StarsBackground: FunctionComponent = () => {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars count={5000} />
      </Canvas>
    </div>
  )
}

export default StarsBackground
