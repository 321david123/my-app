"use client"
import Layout from "../components/layout"
import Link from "next/link"
import Head from "next/head"
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
      <Head>
        <title>Célula</title>
        <link rel="icon" href="https://miguelin777.github.io/Clubdel100/assets/image/fix2.png" />
      </Head>
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <CircuitBackgroundDynamic animationSpeed={0.5} />
        <div className="relative z-10 text-center space-y-8 py-20">
          <motion.h1
            className="text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Célula
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Un review de nuestra historia y legado.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-lg pb-4">Explora</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestro Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Estudiantes Formados", value: "300+" },
              { title: "Proyectos Realizados", value: "30+" },
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
        { title: "Innovación", description: "Fomentando ideas revolucionarias", color: "#E0F7FA" }, // Light Blue
        { title: "Colaboración", description: "Trabajando juntos hacia el éxito", color: "#E6F4EA" }, // Light Green
        { title: "Excelencia", description: "Persiguiendo los más altos estándares", color: "#FDFDEA" }, // Light Gold
        { title: "Impacto", description: "Buscando soluciones a problemas reales", color: "#ffc7c7" }, // Light Coral
      ].map((pillar, index) => (
        <motion.div
          key={index}
          className={`p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
            hoveredIndex === index + 3 ? "shadow-2xl -translate-y-1" : ""
          }`}
          style={{ backgroundColor: pillar.color }} // Apply the custom color
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Anónimo",
                year: "17",
                quote: "Ser parte de célula me hizo crecer profesionalmente así como también crecer como persona y ser humano.",
              },
              {
                name: "Juan Martin Arriaga Alejos",
                year: "16",
                quote: "Fue un lugar en el cual descubrí parte de mi pasión en esta vida. Dónde podía aprender siendo un niño todavía. Grandes experiencias vivi y recuerdos que se quedarán.",
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
          <div className="text-center mt-12">
            <Link
              href="/testimonios"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Ver todos los Testimonios
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Galería de Momentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "https://321david123.github.io/images/4.jpeg", alt: "Momento Célula 1" },
              { src: "https://321david123.github.io/images/3.jpeg", alt: "Momento Célula 2" },
              { src: "https://321david123.github.io/images/34.jpeg", alt: "Momento Célula 3" },
              { src: "https://321david123.github.io/images/1222.jpeg", alt: "Momento Célula 4" },
              { src: "https://321david123.github.io/images/12.jpeg", alt: "Momento Célula 5" },
              { src: "https://321david123.github.io/images/2.jpeg", alt: "Momento Célula 6" },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
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
          <h2 className="text-4xl font-bold text-center mb-12">Línea de Tiempo Resumen</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            {[
              { year: 2005, text: "Celula fue creado" },
              { year: 2010, text: "Celula continua con su mejora de cursos y programas" },
              { year: 2015, text: "Colaboraciones comienzan a dar luz" },
              { year: 2020, text: "Proyectos han tenido exito en competencias internacionales" },
              { year: 2023, text: "Ultima generacion de celula marcando limites" },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                className="relative mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                  <div className="w-5 h-5 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <span
              className="inline-block bg-gray-300 text-gray-500 px-8 py-3 rounded-full font-semibold cursor-not-allowed"
            >
              Ver Línea de Tiempo Completa
            </span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Tecnologías que Dominamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Python", imgSrc: "https://321david123.github.io/images/python.png" },
              { name: "Terminal", imgSrc: "https://321david123.github.io/images/terminal.png" },
              { name: "Java", imgSrc: "https://321david123.github.io/images/java.png" },
              { name: "SQL", imgSrc: "https://321david123.github.io/images/sql.png" },
              { name: "Arduino", imgSrc: "https://321david123.github.io/images/arduino.png" },
              { name: "Excel", imgSrc: "https://321david123.github.io/images/excel.png" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-full w-30 h-40 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={tech.imgSrc}
                    alt={`${tech.name} logo`}
                    width={96}
                    height={96}
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Closure />
    </Layout>
  )
}