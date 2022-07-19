import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { FunctionComponent, ReactNode, useRef } from 'react'
import * as THREE from 'three'
import { Vector3 } from 'three'
import styles from './styles.module.scss'

interface StarGeometryType extends Partial<Vector3> {
  x: number
  y: number
  z: number
  velocity: number
  acceleration: number
}

interface StarsPropsType {
  count: number
}

interface SceneProps {
  children?: ReactNode
}

const Stars: FunctionComponent<StarsPropsType> = ({ count }) => {
  const mesh = useRef<THREE.BufferGeometry>(null!)
  const points = useRef<THREE.Points>(null)
  const vertices: Array<Vector3> = []
  const particles: Array<StarGeometryType> = []
  for (let i = 0; i < count; i++) {
    let vertex = new THREE.Vector3(Math.random() * 1200 - 600, Math.random() * 1200 - 600, Math.random() * 1200 - 600)
    let starGeometry = {
      ...vertex,
      velocity: 0,
      acceleration: 0.001,
    }
    vertices.push(vertex)
    particles.push(starGeometry)
  }

  useFrame((state) => {
    mesh.current.setFromPoints(vertices)
    vertices.forEach((vertex, i) => {
      particles[i].velocity += particles[i].acceleration
      vertex.y -= particles[i].velocity
      if (vertex.y < -200) {
        vertex.y = 500
        particles[i].velocity = 0
      }
    })
    if (points.current) {
      points.current.rotation.y += 0.001
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry attach='geometry' ref={mesh} />
      <pointsMaterial size={0.2} color={'white'} opacity={0.2} sizeAttenuation={true} />
    </points>
  )
}

const Scene: FunctionComponent<SceneProps> = ({ children }) => {
  useThree(({ camera }) => {
    camera.rotation.set(Math.PI / 2, 0, 0)
  })
  const sceneRef = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (sceneRef.current) {
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, (state.mouse.y * Math.PI) / 20, 1)
      sceneRef.current.rotation.z = THREE.MathUtils.lerp(sceneRef.current.rotation.y, (state.mouse.x * Math.PI) / 20, 1)
    }
  })
  return <group ref={sceneRef}>{children}</group>
}

const StarsBackground: FunctionComponent = () => {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Scene>
          <Stars count={5000} />
        </Scene>
      </Canvas>
    </div>
  )
}

export default StarsBackground
