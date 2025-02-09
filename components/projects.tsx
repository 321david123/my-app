'use client'
import { motion } from "framer-motion"
import { useState } from "react"

interface Project {
  title: string
  description: string
  year: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: "CélulaLearn",
    description: "Plataforma de aprendizaje en línea que democratiza la educación programación.",
    year: "2015",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "EcoTrack",
    description: "Aplicación móvil para monitorear y reducir la huella de carbono personal.",
    year: "2017",
    tech: ["React Native", "Firebase", "TensorFlow Lite"],
  },
  {
    title: "SmartCity",
    description: "Sistema de gestión urbana inteligente utilizando IoT y análisis datos en tiempo real.",
    year: "2018",
    tech: ["Python", "Raspberry Pi", "AWS IoT"],
  },
  {
    title: "MediChain",
    description: "Plataforma blockchain para el intercambio seguro de registros médicos entre instituciones salud.",
    year: "2019",
    tech: ["Ethereum", "Solidity", "IPFS"],
  },
  {
    title: "VirtualClassroom",
    description: "Entorno de aprendizaje virtual inmersivo utilizando realidad para educación remota.",
    year: "2020",
    tech: ["Unity", "C#", "WebRTC"],
  },
  {
    title: "AICodeBuddy",
    description:
      "Asistente de programación impulsado por IA para ayudar a los estudiantes en su proceso aprendizaje.",
    year: "2021",
    tech: ["Python", "TensorFlow", "GPT-3"],
  },
  {
    title: "EcoSense",
    description: "Red de sensores ambientales para monitoreo y predicción calidad del aire en zonas urbanas.",
    year: "2021",
    tech: ["Arduino", "LoRaWAN", "Machine Learning"],
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
              hoveredIndex === index ? "shadow-2xl -translate-y-1" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">Año: {project.year}</p>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

