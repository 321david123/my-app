'use client'
import Image from "next/image"
import FeaturedProfessor from "./featured-professor"
import { useState } from "react"

interface Teacher {
  name: string
  role: string
  image: string
  description: string
}

const teachers: Teacher[] = [
  {
    name: "Profesor Baeza",
    role: "Profesor de Apoyo",
    image: "/baeza.jpg",
    description:
      "El Profesor Baeza proporcionó un apoyo y orientación invaluables, ayudando a cerrar la brecha entre teoría académica aplicación práctica.",
  },
  {
    name: "Profesora Martínez",
    role: "Especialista en Inteligencia Artificial",
    image: "/martinez.jpg",
    description:
      "La Profesora Martínez lideró la introducción de IA en el currículo Célula, inspirando a los estudiantes explorar las fronteras tecnología.",
  },
]

export default function Teachers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Nuestros Profesores Inspiradores</h2>

      <div className="space-y-12 mb-12">
        <div className="rounded-lg shadow-xl overflow-hidden p-8 transition-all duration-300 ease-in-out bg-gray-100">
          <FeaturedProfessor
            name="Justo72"
            role="Fundador y Líder Principal"
            image="/justo72.jpg"
            description="El visionario fundador de Célula, Justo72 inspiró a generaciones estudiantes superar los límites la programación y innovación. Su liderazgo pasión por tecnología fueron fundamentales para el éxito del programa."
            achievements={[
              "Fundó Célula en 2005",
              "Desarrolló un plan de estudios innovador que combina teoría y práctica",
              "Mentor de más 500 estudiantes a lo largo 17 generaciones",
              "Recibió el premio al Educador del Año en Tecnología 2015",
            ]}
            quote="La verdadera innovación nace cuando nos atrevemos a desafiar los límites de lo posible."
          />
        </div>

        <div className="rounded-lg shadow-xl overflow-hidden p-8 transition-all duration-300 ease-in-out bg-gray-100">
          <FeaturedProfessor
            name="Dulce"
            role="Co-Líder y Mentora Principal"
            image="/dulce.jpg"
            description="Como la segunda figura más importante en Célula, Dulce jugó un papel crucial formación del plan de estudios y tutoría los estudiantes. Su enfoque resolución creativa problemas el trabajo equipo ha sido fundamental para éxito graduados Célula."
            achievements={[
              "Co-desarrolló el programa de mentoría Célula",
              "Lideró la iniciativa de proyectos sociales tecnológicos",
              "Organizó las primeras hackathons internas de Célula",
              "Reconocida como una de las 100 mujeres más influyentes en tecnología 2018",
            ]}
            quote="La tecnología es una herramienta poderosa, pero la creatividad y empatía lo que realmente cambia el mundo."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {teachers.map((teacher, index) => {
          return (
            <div
              key={index}
              className={`bg-gray-100 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
                hoveredIndex === index ? "shadow-2xl -translate-y-1" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-48 h-48 mx-auto mt-8">
                <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
                <Image
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{teacher.name}</h3>
                <p className="text-gray-600 mb-4">{teacher.role}</p>
                <p className="text-gray-800">{teacher.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

