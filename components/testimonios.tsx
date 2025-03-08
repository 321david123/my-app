"use client"
import Head from "next/head"
import { motion } from "framer-motion"
import { useState } from "react"
import Script from "next/script"

export default function Testimonios() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Your testimonies—unchanged
  const testimonies = [
    {
      name: "Anónimo",
      year: "17",
      quote: "Ser parte de célula me hizo crecer profesionalmente así como también crecer como persona y ser humano.",
    },
    {
      name: "Juan Martin Arriaga Alejos",
      year: "16",
      quote: "Fue un lugar en el cual descubrí parte de mi pasión en esta vida. Dónde podía aprender siendo un niño todavía. Grandes experiencias viví y recuerdos que se quedarán.",
    },
    {
      name: "Pedro González Arriaga",
      year: "13",
      quote: "Excelente. En todo momento, el profesor Justo tuvo un enfoque muy humano y pedagógico, algo que hace mucha falta en las escuelas, especialmente en el ámbito de la tecnología. Aunque ya no me dedico a la programación y ahora estoy enfocado en las artes, las habilidades y experiencias que adquirí me acompañarán toda la vida. Aprendí que soy capaz de llevar a cabo proyectos desafiantes y concretarlos con éxito. Además, viví experiencias extraordinarias, como viajes y escaladas, que no habrían sido posibles sin el compromiso y la pasión del profesor Justo.",
    },
    {
      name: "Gerardo Antonio Correa Álvarez",
      year: "15",
      quote: "Mi experiencia en célula fue algo demasiado especial, si bien yo ya sabía lo que me interesaba para estudiar en la Universidad y que definitivamente era relacionado a las computadoras, a la hora de entrar al Cecyte Cortázar no me esperaba que la experiencia fuera tan grata, Justo demostró ser un profesor que hizo que mi interés se captara completamente en los proyectos y actividades que nos planteó, los conocimientos que me hizo aprender son cosas que hasta hoy en día sigo aplicando y agradezco infinitamente, aún más allá que los conocimientos, las experiencias que tuve dentro son invaluables, gracias por todo a mis profesores y compañeros de generación.",
    },
    {
      name: "Lau",
      year: "17",
      quote: "Al ser parte del programa célula lo que más valoro es el aprender sobre cómo formar parte de una comunidad o grupo estudiantil, siendo de gran ayuda para aprender a comunicarme y trabajar colaborativamente, ya sea por un objetivo en común dentro del campo de las STEM o por brindar ayuda en orientar a alguien a conseguir una meta, e incluso ser solidaria y tener un sentido de unión, aspectos fundamentales para reunir memorias y experiencias valiosas y muchas lecciones aprendidas que nos ayudan a subir peldaños en nuestras carreras o vidas, lo que se agradece como herramienta en diversos entornos, como el institucional o laboral, de manera que me hizo crecer no solo profesional sino también como humana.",
    },
    {
      name: "Jesús Jiménez",
      year: "17",
      quote: "Gracias a Celula, me formé como un mejor estudiante, cambié mi perspectiva de lo que es ser estudiante, gracias a eso estoy en la universidad que siempre quise estar, le doy las gracias a todo el equipo de Celula, pero en especial al maestro Justo 72.",
    },
    {
      name: "Carlos Eduardo",
      year: "17",
      quote: "El haber estado en célula me hace sentir muy orgulloso, en célula logramos ampliar nuestro panorama y hacer cosas que no veíamos que pudiéramos lograr en la escuela, célula me dejó muchos conocimientos, pero también me dejó experiencias increíbles y grandes amistades con las cuales he crecido, estoy sumamente agradecido con los maestros por habernos dado la oportunidad de formar la última generación célula, los llevaré siempre en mi corazón.",
    },
  ]

  return (
    <>
      <Head>
        <title>Testimonios | Célula</title>
        <link rel="icon" href="https://miguelin777.github.io/Clubdel100/assets/image/fix2.png" />
      </Head>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Todos los Testimonios</h2>
          <div className="flex flex-col items-center gap-8">
            {testimonies.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md w-full max-w-md transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? "shadow-2xl -translate-y-1" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col m-1 items-center"> {/* Centered content */}
                  <p className="text-gray-700 italic mb-4 text-center">"{testimonial.quote}"</p>
                  <p className="text-center">
                    <span className="font-bold text-gray-900">{testimonial.name}</span>
                    <span className="text-gray-500 ml-2">Generación {testimonial.year}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div data-tf-live="01JMK2GYQKFMY69P7Y10W23JCV"></div>
      <Script src="//embed.typeform.com/next/embed.js" />
    </>
  )
}