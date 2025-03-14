"use client"
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
    name: "Baeza",
    role: "Profesor de Apoyo",
    image: "/baeza.jpg",
    description:
      "El Profesor Baeza proporcionó un apoyo y orientación invaluables, ayudando a cerrar la brecha entre teoría académica aplicación práctica.",
  },
  {
    name: "Erika",
    role: "Apoyo",
    image: "/martinez.jpg",
    description:
      "Erika demostro y fue de gran ayuda para todo tipo de actividades dentro de celula, su apoyo fue fundamental para la convivencia sana.",
  },
]

export default function Teachers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Nuestros Profesores</h2>
      <div className="space-y-12 mb-12">
        <div className="">
          <FeaturedProfessor
            name="Justo72"
            role="Fundador y Líder Principal"
            image="/justo72.jpg"
            description="Fundador de Célula, Justo72 inspiró a generaciones de estudiantes para superar retos de programacion e innovación. Su liderazgo y pasión por la tecnología fueron fundamentales para el éxito de celula."
            achievements={[
              "Fundó Célula en 2005",
              "Desarrolló un plan de estudios que combina teoría y práctica",
              "Mentor de más 200 estudiantes a lo largo 17 generaciones",
              "Instructor de Cisco Networking Academy",
            ]}
            quote="Los éxitos se ven desde la llanura"
          />
        </div>
        <div className="">
          <FeaturedProfessor
            name="Dúlce"
            role="Co-Líder y Mentora Principal"
            image="/dulce.jpg"
            description="Como la segunda figura más importante en Célula, Dulce jugó un papel crucial formación del plan de estudios y tutoría los estudiantes. Su enfoque en resolución creativa e increíble comunicacion ha sido fundamental para Célula."
            achievements={[
              "Co-desarrolló y apoyo el programa Célula",
              "Lideró diferentes iniciativas de proyectos tecnológicos",
              "Mentora de más de 100 estudiantes",
              "Participaciones en diferentes conferencias y talleres",
            ]}
            quote="" // Quote removed for Dúlce
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {teachers.map((teacher, index) => {
          // Get initial from name (first character, uppercase)
          const initial = teacher.name.charAt(0).toUpperCase()
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
                <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {initial}
                </div>
                {/* Removed Image component, keeping structure for consistency */}
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