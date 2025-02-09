'use client'
import { useState } from "react"
import { motion } from "framer-motion"

interface Generation {
  number: number
  year: string
  highlight: string
}

const generations: Generation[] = [
  { number: 1, year: "2005", highlight: "El grupo pionero que lo inició todo" },
  { number: 2, year: "2006", highlight: "Expansión del programa y nuevos desafíos" },
  { number: 3, year: "2007", highlight: "Primera victoria en concurso estatal" },
  { number: 4, year: "2008", highlight: "Enfoque en desarrollo web y móvil" },
  { number: 5, year: "2009", highlight: "Organización de la primera hackathon interna" },
  { number: 6, year: "2010", highlight: "Ganadores de la Convención Inventos" },
  { number: 7, year: "2011", highlight: "Asociación con universidad local" },
  { number: 8, year: "2012", highlight: "Lanzamiento del primer producto comercial" },
  { number: 9, year: "2013", highlight: "Introducción de IA y aprendizaje automático" },
  { number: 10, year: "2014", highlight: "Celebración de una década excelencia" },
  { number: 11, year: "2015", highlight: "Inicio del programa de mentoría exalumnos" },
  { number: 12, year: "2016", highlight: "Reconocimiento nacional al programa" },
  { number: 13, year: "2017", highlight: "Lanzamiento de incubadora startups" },
  { number: 14, year: "2018", highlight: "Colaboraciones internacionales" },
  { number: 15, year: "2019", highlight: "Enfoque en blockchain e IoT" },
  { number: 16, year: "2020", highlight: "Adaptación exitosa a la educación remota" },
  { number: 17, year: "2021", highlight: "La generación final, dejando un legado duradero" },
]

export default function Generations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Generaciones de Excelencia</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {generations.map((gen, index) => (
          <motion.div
            key={gen.number}
            className={`bg-white rounded-lg shadow-xl p-6 text-center transition-all duration-300 ease-in-out ${
              hoveredIndex === index ? "shadow-2xl -translate-y-1" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-2">Generación {gen.number}</h3>
            <p className="text-gray-600 mb-4">{gen.year}</p>
            <p className="text-gray-800">{gen.highlight}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold mb-4">Generación 17: El Capítulo Final</h3>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto">
          Mientras cae el telón sobre el notable viaje de Célula, la Generación 17 se erige como un testimonio del
          espíritu perdurable de innovación y excelencia que definió a este extraordinario grupo. Sus logros sirven de
          inspiración para futuras generaciones de programadores e innovadores.
        </p>
      </motion.div>
    </div>
  )
}

