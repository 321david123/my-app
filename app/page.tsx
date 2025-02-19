'use client'
import Layout from "../components/layout"
import Link from "next/link"
import Closure from "../components/closure"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const CircuitBackgroundDynamic = dynamic(() => import("../components/circuit-background"), { ssr: false })

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    
    <Layout>
        <title>Célula</title>
        <link rel="icon" href="https://miguelin777.github.io/Clubdel100/assets/image/fix2.png" />
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <CircuitBackgroundDynamic animationSpeed={0.5} />
        <div className="relative z-10 text-center space-y-8 py-20">
          <motion.h1
            className="text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Célula: Un Legado de Código e Innovación
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Celebrando el viaje de un grupo élite de programación avanzada que dio forma al futuro de la tecnología.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/linea-de-tiempo"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition duration-300"
            >
              Explora Nuestro Legado
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestro Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Estudiantes Formados", value: "500+" },
              { title: "Proyectos Realizados", value: "1000+" },
              { title: "Años de Innovación", value: "17" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? "shadow-2xl -translate-y-1" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-5xl font-bold text-blue-600 mb-4">{stat.value}</h3>
                <p className="text-xl text-gray-700">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Innovación", description: "Fomentando ideas revolucionarias" },
              { title: "Colaboración", description: "Trabajando juntos hacia el éxito" },
              { title: "Excelencia", description: "Persiguiendo los más altos estándares" },
              { title: "Impacto", description: "Cambiando el mundo con código" },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                className={`bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                  hoveredIndex === index + 3 ? "shadow-2xl -translate-y-1" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index + 3)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-700">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonios de Exalumnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ana García",
                year: "2015",
                quote: "Célula me dio las herramientas y la confianza para perseguir mis sueños en tecnología.",
              },
              {
                name: "Carlos Rodríguez",
                year: "2018",
                quote: "La mentoría y el apoyo que recibí en Célula fueron fundamentales para mi carrera.",
              },
              {
                name: "Laura Martínez",
                year: "2020",
                quote: "Célula no solo me enseñó a programar, sino pensar como una verdadera innovadora.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                  hoveredIndex === index + 7 ? "shadow-2xl -translate-y-1" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index + 7)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-right">
                  <span className="font-bold">{testimonial.name}</span>
                  <span className="text-gray-500 ml-2">Generación {testimonial.year}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Galería de Momentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={`https://placehold.co/384x256/1a1a2e/ffffff?text=Momento+Célula+${index}`}
                  alt={`Momento Célula ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Línea de Tiempo Interactiva</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            {[2005, 2010, 2015, 2020, 2023].map((year, index) => (
              <motion.div
                key={year}
                className="relative mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                  <div className="w-5 h-5 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <h3 className="text-2xl font-bold mb-2">{year}</h3>
                    <p className="text-gray-700">Hito importante en la historia de Célula</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/linea-de-tiempo"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Ver Línea de Tiempo Completa
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Tecnologías que Dominamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React",
              "Node.js",
              "Python",
              "Machine Learning",
              "IoT",
              "Blockchain",
              "Cloud Computing",
              "Mobile Development",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Closure />
    </Layout>
  )
}

