"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const CircuitBackground: React.FC<{ animationSpeed?: number }> = ({ animationSpeed = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const mouse = { x: 0, y: 0 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x!: number
      y!: number
      size!: number
      speedX!: number
      speedY!: number

      constructor() {
        if (!canvas) return
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 2 * animationSpeed
        this.speedY = (Math.random() - 0.5) * 2 * animationSpeed
      }

      attractToMouse(mouseX: number, mouseY: number) {
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 120) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (120 - distance) / 120
          this.x += forceDirectionX * force * 0.5
          this.y += forceDirectionY * force * 0.5
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (canvas && (this.x < 0 || this.x > canvas.width)) this.speedX *= -1
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.speedY *= -1
      }

      draw() {
        ctx!.fillStyle = "rgba(0, 100, 255, 0.5)"
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const particlesCount = Math.floor((canvas.width * canvas.height) / 9000)
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].attractToMouse(mouse.x, mouse.y)
        particles[i].draw()

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, 100, 255,${1 - distance / 100})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }

        const dx = mouse.x - particles[i].x
        const dy = mouse.y - particles[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          ctx.strokeStyle = `rgba(0, 200, 255,${1 - distance / 120})`
          ctx.lineWidth = 0.6
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(particles[i].x, particles[i].y)
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)

    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [animationSpeed])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(to bottom, #000000, #1a1a2e)" }}
    />
  )
}

export default CircuitBackground

