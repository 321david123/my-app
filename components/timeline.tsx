"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

interface TimelineEvent {
  year: number
  title: string
  description: string
}

const events: TimelineEvent[] = [
  {
    year: 2005,
    title: "Fundación de Célula",
    description: "Justo72 establece Célula como un grupo élite de programación en la preparatoria.",
  },
  {
    year: 2006,
    title: "Generación 2",
    description: "La segunda generación comienza, expandiendo el alcance del programa.",
  },
  {
    year: 2007,
    title: "Generación 3",
    description: "Célula gana su primer concurso de programación a nivel estatal.",
  },
  {
    year: 2008,
    title: "Generación 4",
    description: "Se implementa un nuevo currículo enfocado en desarrollo web y móvil.",
  },
  { year: 2009, title: "Generación 5", description: "Célula organiza su primera hackathon interna." },
  {
    year: 2010,
    title: "Generación 6",
    description: "Victoria en la Convención de Inventos con un proyecto innovador.",
  },
  {
    year: 2011,
    title: "Generación 7",
    description: "Se establece una asociación con universidad local para proyectos avanzados.",
  },
  {
    year: 2012,
    title: "Generación 8",
    description: "Lanzamiento del primer producto comercial desarrollado por estudiantes de Célula.",
  },
  {
    year: 2013,
    title: "Generación 9",
    description: "Célula expande su programa para incluir inteligencia artificial y aprendizaje automático.",
  },
  {
    year: 2014,
    title: "Generación 10",
    description: "Celebración del décimo aniversario con una conferencia tecnológica.",
  },
  {
    year: 2015,
    title: "Generación 11",
    description: "Implementación de un programa mentoría con exalumnos Célula.",
  },
  {
    year: 2016,
    title: "Generación 12",
    description: "Célula gana reconocimiento nacional por su innovador programa educativo.",
  },
  {
    year: 2017,
    title: "Generación 13",
    description: "Lanzamiento de una incubadora startups para proyectos estudiantes.",
  },
  {
    year: 2018,
    title: "Generación 14",
    description: "Colaboración internacional con escuelas de programación en otros países.",
  },
  {
    year: 2019,
    title: "Generación 15",
    description: "Célula introduce un enfoque en tecnologías emergentes como blockchain y IoT.",
  },
  {
    year: 2020,
    title: "Generación 16",
    description: "Adaptación exitosa a la educación remota durante pandemia global.",
  },
  {
    year: 2021,
    title: "Generación 17",
    description: "La generación final marca el cierre de Célula, dejando un legado duradero.",
  },
  {
    year: 2022,
    title: "Legado Continuo",
    description: "Los graduados de Célula continúan impactando la industria tecnológica en diversos roles.",
  },
  {
    year: 2023,
    title: "Celebración del Legado",
    description: "Reunión virtual global de ex-alumnos para conmemorar el impacto duradero Célula.",
  },
]

const TimelineCard = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={cardRef}
      className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
      style={{ y, opacity }}
    >
      <div className="order-2 md:order-1 w-full md:w-5/12">
        <motion.div
          className={`p-4 bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out ${
            isHovered ? "shadow-2xl -translate-y-1" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{event.title}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{event.description}</p>
        </motion.div>
      </div>
      <div className="z-20 flex items-center justify-center order-1 md:order-2 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
        <h1 className="font-semibold text-xl text-white">{event.year}</h1>
      </div>
      <div className="order-3 w-full md:w-5/12 px-6 py-4"></div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">El Viaje de Célula</h2>
      <div className="relative wrap overflow-hidden p-4 md:p-10">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border border-neutral-200 left-1/2 hidden md:block dark:border-neutral-800"></div>
        {events.map((event, index) => (
          <TimelineCard key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  )
}

