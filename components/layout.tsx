"use client"

import Head from "next/head"
import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuVariants = {
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Célula</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold hover:text-blue-400 transition-colors duration-300">
            Célula
          </Link>
          <nav className="hidden md:flex space-x-4">
            {["Línea de Tiempo", "Profesores", "Testimonios", "Proyectos"].map((item) => (
              <span
                key={item}
                className={`${
                  item === "Línea de Tiempo" || item === "Proyectos"
                    ? "text-gray-500 cursor-not-allowed"
                    : "hover:text-blue-400 transition-colors duration-300"
                } text-lg font-semibold`}
              >
                {item === "Línea de Tiempo" || item === "Proyectos" ? (
                  <span>{item}</span> // Non-clickable span for disabled items
                ) : (
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-").replace(/í/g, "i")}`}
                    className="block"
                  >
                    {item}
                  </Link>
                )}
              </span>
            ))}
          </nav>
          <motion.button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 45, y: 2 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="w-6 h-0.5 bg-white absolute"
            />
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="w-6 h-0.5 bg-white absolute"
            />
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: -45, y: -2 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="w-6 h-0.5 bg-white absolute"
            />
          </motion.button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 space-y-2"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.5 }}
            >
              {["Línea de Tiempo", "Profesores", "Testimonios", "Proyectos"].map((item, index) => (
                <motion.div key={item} variants={menuItemVariants} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <span
                    className={`block ${
                      item === "Línea de Tiempo" || item === "Proyectos"
                        ? "text-gray-500 cursor-not-allowed"
                        : "hover:text-blue-400 transition-colors duration-300"
                    } text-lg font-semibold`}
                  >
                    {item === "Línea de Tiempo" || item === "Proyectos" ? (
                      <span>{item}</span> // Non-clickable span for disabled items
                    ) : (
                      <Link
                        href={`/${item.toLowerCase().replace(/ /g, "-").replace(/í/g, "i")}`}
                        className="block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    )}
                  </span>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Célula. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}