"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()

    const particles: Particle[] = []
    let particleCount = 100
    let hue = 0

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update() {
        this.x += this.speedX * (isHovering ? 2 : 1)
        this.y += this.speedY * (isHovering ? 2 : 1)

        if (this.size > 0.2) this.size -= 0.1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].size <= 0.2) {
          particles.splice(i, 1)
          i--
          particles.push(new Particle())
        }
      }

      hue += 2
      requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleMouseEnter = () => {
      setIsHovering(true)
      particleCount = 200
      while (particles.length < particleCount) {
        particles.push(new Particle())
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      particleCount = 100
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isHovering])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{ background: "linear-gradient(to bottom, #000000, #1a1a2e)" }}
      />
      <div
        className="absolute inset-0 w-full h-full block md:hidden"
        style={{ background: "linear-gradient(to bottom, #000000, #1a1a2e)" }}
      />
    </>
  )
}

export default AnimatedBackground

