"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import styles from "./galeria.module.css"

interface TimelineEvent {
  year: number
  title: string
  description: string
}

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

export default function Galeria() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">El Viaje de Célula</h2>
      <div className="relative wrap overflow-hidden p-4 md:p-10">
      <div className={styles.homeWrapper}>
      {/*==================== PROJECTS ====================*/}
      <section className={`${styles.projects} ${styles.section}`} id="projects">
        <h2 className={styles["section__title-1"]}>
          <span>Proyectos.</span>
        </h2>

        <div className={`${styles.projects__container} ${styles.container} ${styles.grid}`}>
          {/* Article 1 */}
          <article className={styles.projects__card}>
            <div className={styles.projects__image}>
              <img
                className={styles.projects__img}
                src="/assets/img/23_1x_shots_so.png"
                alt="Project image"
              />
              <a
                href="https://miguelin777.github.io/Clubdel100/"
                className={`${styles.projects__button} ${styles.button}`}
              >
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>

            <div className={styles.projects__content}>
              <h3 className={styles.projects__subtitle}>Website</h3>
              <h2 className={styles.projects__title}>Creando tu Negocio</h2>
              <p className={styles.projects__description}>
                Adquiere las habilidades necesarias para construir tu negocio desde cero,
                usando Redes Neuronales con Python, Excel, Power BI, Onshape y demás....
              </p>
            </div>

            <div className={styles.projects__buttons}>
              <a
                href="https://miguelin777.github.io/Clubdel100/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-github-line"></i> View
              </a>
              <a
                href="https://miguelin777.github.io/Clubdel100/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          {/* Article 2 */}
          <article className={styles.projects__card}>
            <div className={styles.projects__image}>
              <img
                className={styles.projects__img}
                src="/assets/img/337_1x_shots_so.png"
                alt="Project image"
              />
              <a
                href="https://www.ruedatec.com/"
                className={`${styles.projects__button} ${styles.button}`}
              >
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>

            <div className={styles.projects__content}>
              <h3 className={styles.projects__subtitle}>Website</h3>
              <h2 className={styles.projects__title}>RuedaTec</h2>
              <p className={styles.projects__description}>
                Sitio web oficial de mi proyecto y negocio RuedaTec, donde podemos ver tanto sus
                especificaciones como también la posibilidad de comprarlo.
              </p>
            </div>

            <div className={styles.projects__buttons}>
              <a
                href="https://www.ruedatec.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-github-line"></i> View
              </a>
              <a
                href="https://www.ruedatec.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          {/* Article 3 */}
          <article className={styles.projects__card}>
            <div className={styles.projects__image}>
              <img
                className={styles.projects__img}
                src="/assets/img/sonriem2.png"
                alt="Project image"
              />
              <a
                href="https://sonriemexico.org/"
                className={`${styles.projects__button} ${styles.button}`}
              >
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>

            <div className={styles.projects__content}>
              <h3 className={styles.projects__subtitle}>Website</h3>
              <h2 className={styles.projects__title}>Sonríe</h2>
              <p className={styles.projects__description}>
                Desarrollé este sitio para mi Proyecto Social "Sonríe", donde muestro todas las campañas
                y eventos que hacemos desde su inicio.
              </p>
            </div>

            <div className={styles.projects__buttons}>
              <a
                href="https://sonriemexico.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-github-line"></i> View
              </a>
              <a
                href="https://sonriemexico.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          {/* Article 4 */}
          <article className={styles.projects__card}>
            <div className={styles.projects__image}>
              <img
                className={styles.projects__img}
                src="/assets/img/771_1x_shots_so.png"
                alt="Project image"
              />
              <a
                href="https://miguelin777.github.io/proyectoFatima/"
                className={`${styles.projects__button} ${styles.button}`}
              >
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>

            <div className={styles.projects__content}>
              <h3 className={styles.projects__subtitle}>Website</h3>
              <h2 className={styles.projects__title}>Leo Muebles</h2>
              <p className={styles.projects__description}>
                Sitio web para una tienda de muebles, adaptado a las especificaciones del usuario. Este fue el
                primer sitio por así decirlo y de ahí empezó todo.
              </p>
            </div>

            <div className={styles.projects__buttons}>
              <a
                href="https://miguelin777.github.io/proyectoFatima/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-github-line"></i> View
              </a>
              <a
                href="https://miguelin777.github.io/proyectoFatima/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          {/* Article 5 */}
          <article className={styles.projects__card}>
            <div className={styles.projects__image}>
              <img
                className={styles.projects__img}
                src="/assets/img/467_1x_shots_so.png"
                alt="Project image"
              />
              <a
                href="https://miguelin777.github.io/RuedaTec/index.html"
                className={`${styles.projects__button} ${styles.button}`}
              >
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>

            <div className={styles.projects__content}>
              <h3 className={styles.projects__subtitle}>Website</h3>
              <h2 className={styles.projects__title}>Historia de RuedaTec</h2>
              <p className={styles.projects__description}>
                Diseñé este sitio para enseñarles la historia de RuedaTec y así puedan ver que no hay imposibles
                cuando se trata de algo que nos gusta.
              </p>
            </div>

            <div className={styles.projects__buttons}>
              <a
                href="https://miguelin777.github.io/RuedaTec/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-github-line"></i> View
              </a>
              <a
                href="https://miguelin777.github.io/RuedaTec/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          {/* Article 6 */}
          <article className={styles.projects__card}>
            <div className={styles.projects__image}>
              <img
                className={styles.projects__img}
                src="/assets/img/251_1x_shots_so.png"
                alt="Project image"
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.miguelin.elbichosiono&hl=es_419"
                className={`${styles.projects__button} ${styles.button}`}
              >
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>

            <div className={styles.projects__content}>
              <h3 className={styles.projects__subtitle}>App</h3>
              <h2 className={styles.projects__title}>SIUU-NO El Bicho</h2>
              <p className={styles.projects__description}>
                Desarrollé esta App para cuando tengas una duda el Bicho, Cristiano Ronaldo te pueda contestar entre
                un "SIUU" o un "No" y te mande un meme relacionado a la respuesta.
              </p>
            </div>

            <div className={styles.projects__buttons}>
              <a
                href="https://play.google.com/store/apps/details?id=com.miguelin.elbichosiono&hl=es_419"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-github-line"></i> View
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.miguelin.elbichosiono&hl=es_419"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projects__link}
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>
        </div>
      </section>

      {/*==================== GALLERY ====================*/}
      <section className={`${styles.gallery} ${styles.section}`} id="gallery">
        <div className={`${styles.container} ${styles["gallery-custom-container"]}`}>
          <h2 className={styles["section__title-1"]}>
            <span>Galería</span>
          </h2>

          <div className={styles["gallery-grid-container"]}>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-wide"]} ${styles["gallery-tall"]}`}
              style={{ backgroundImage: "url('/assets/img/43534.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-jew"]}`}
              style={{ backgroundImage: "url('/assets/img/2321.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/11.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-wide"]}`}
              style={{ backgroundImage: "url('/assets/img/43.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/78.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/4543.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-jew"]}`}
              style={{ backgroundImage: "url('/assets/img/44.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-tall"]} ${styles["gallery-wide"]}`}
              style={{ backgroundImage: "url('/assets/img/6.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-jew"]}`}
              style={{ backgroundImage: "url('/assets/img/959.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-wide"]}`}
              style={{ backgroundImage: "url('/assets/img/3543.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/9348.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-tall"]}`}
              style={{ backgroundImage: "url('/assets/img/345.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-wide"]}`}
              style={{ backgroundImage: "url('/assets/img/2123.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-jew"]}`}
              style={{ backgroundImage: "url('/assets/img/543.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/434.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-tall"]}`}
              style={{ backgroundImage: "url('/assets/img/453.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/323.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/321.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-wide"]}`}
              style={{ backgroundImage: "url('/assets/img/45.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/232.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-tall"]} ${styles["gallery-wide"]}`}
              style={{ backgroundImage: "url('/assets/img/22.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-jew"]}`}
              style={{ backgroundImage: "url('/assets/img/123.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/55.jpeg')" }}
            ></div>
            <div
              className={`${styles["gallery-grid-item"]} ${styles["gallery-tall"]}`}
              style={{ backgroundImage: "url('/assets/img/33.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/45.jpeg')" }}
            ></div>
            <div
              className={styles["gallery-grid-item"]}
              style={{ backgroundImage: "url('/assets/img/4.jpg')" }}
            ></div>
          </div>
        </div>
      </section>

    </div>
  </div>
  </div>
  )
}
