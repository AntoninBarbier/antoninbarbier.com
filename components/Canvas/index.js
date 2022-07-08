import React, { FunctionComponent, useEffect, useLayoutEffect, useRef } from 'react'
import styles from './styles.module.scss'

const Canvas = () => {
  const canvasRef = useRef < HTMLCanvasElement > null

  let atoms = []

  const animate = (ctx) => {
    console.log('animate')
    atoms.forEach((atom, index) => {
      ctx.fillStyle = 'white'
      atom.draw()
      atom.updateSpeed()
      atom.updateSize()

      if (atom.radius < 0.3) {
        atoms.splice(index, 1)
      }
    })
    ctx.save()
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.restore()
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    animate(context)
  })

  return <canvas className={styles.canvas} ref={canvasRef}></canvas>
}

class Atom {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.radius = Math.random() * 4 + 2
    this.speedX = Math.random() * 5 - 2.5
    this.speedY = Math.random() * 5 - 2.5
  }

  updateSpeed() {
    this.x += this.speedX
    this.y += this.speedY
  }

  updateSize() {
    this.radius -= 0.02
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}

const point = {
  x: 500,
  y: 500,
}

const generateAtoms = () => {
  atoms.push(new Atom(point.x, point.y))
  point.x += 1
  requestAnimationFrame(generateAtoms)
}

generateAtoms()

export default Canvas
