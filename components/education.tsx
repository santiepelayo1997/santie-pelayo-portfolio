"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function Education() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
            },
        },
    }
    
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }
  return (
    <section  id="education" className="bg-muted/30 text-white md:py-24 py-20">
      <div className="container px-4 md:px-6 mx-auto md:max-w-5xl">
        <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-foreground/80 dark:text-white" variants={itemVariants}>
          Education<span className="text-blue-500">.</span>
        </motion.h2>

        <div className="grid gap-8">
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center bg-white object-contain rounded-3xl overflow-hidden aspect-square w-[90px] h-[90px] min-w-[90px] sm:w-[110px] sm:h-[110px] sm:min-w-[110px]">
              <Image
                src="/qcpu.jpg?height=80&width=80"
                alt="University Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="mb-1">
                <span className="text-gray-400 text-sm">Degree:</span>
              </div>
              <h3 className="max-sm:text-md text-lg font-semibold flex items-center gap-1 text-foreground/80 dark:text-white">
                Bachelor of Science in Information Technology
                <Link href="https://qcu.edu.ph/" className="text-gray-400 hover:text-blue-500">
                  <ExternalLink size={16} />
                </Link>
              </h3>
              <p className="text-gray-400 mt-1 sm:text-sm text-sm">June 2014 - April 2018</p>
              <p className="mt-1 text-foreground/80 dark:text-white text-sm">Quezon City University</p>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}
