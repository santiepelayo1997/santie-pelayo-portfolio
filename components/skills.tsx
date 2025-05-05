"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const technologies = [
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "SCSS", icon: "/icons/scss.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "Material UI", icon: "/icons/material.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "Javascript", icon: "/icons/javascript.svg" },
  { name: "jQuery", icon: "/icons/jquery.svg" },
  { name: "VueJS", icon: "/icons/vue.svg" },
  { name: "ReactJS", icon: "/icons/react.svg" },
  { name: "NextJS", icon: "/icons/nextjs.svg" },
  { name: "Typescript", icon: "/icons/typescript.svg" },
  { name: "Shopify", icon: "/icons/shopify.svg" },
  { name: "Wordpress", icon: "/icons/wordpress.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Adobe Photoshop", icon: "/icons/adobeps.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Github", icon: "/icons/github.svg" },
  { name: "NodeJs", icon: "/icons/nodejs.svg" },
  { name: "Mysql", icon: "/icons/mysql.svg" },
  { name: "Xampp", icon: "/icons/xampp.svg" },
  { name: "Visual Studio Code", icon: "/icons/vscode.svg" },
]

export default function SkillsSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = mounted && (theme === "dark" || resolvedTheme === "dark")

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
    <section id="skills" className="w-full py-20 md:py-24 bg-muted/30" >
        <motion.div  
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container px-4 md:px-6 mx-auto space-y-12 max-w-5xl">
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-1 text-foreground/80" variants={itemVariants}>
              Skills<span className="text-blue-500">.</span>
            </motion.h2>

        <motion.h3
          className="text-md mb-8 text-muted-foreground"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            color: isHovered ? "var(--blue-500)" : "var(--muted-foreground)",
          }}
          transition={{ duration: 0.3 }}
        >
          Technologies and tools
        </motion.h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <TechCard key={index} name={tech.name} icon={tech.icon} mounted={mounted} isDarkMode={isDarkMode} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function TechCard({
  name,
  icon,
  mounted,
  isDarkMode,
}: {
  name: string
  icon: string
  mounted: boolean
  isDarkMode: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  const bgClass = mounted ? (isDarkMode ? "bg-zinc-900" : "bg-zinc-100") : "bg-zinc-100 dark:bg-zinc-900"
  const textClass = mounted ? (isDarkMode ? "text-white" : "text-black") : "text-black dark:text-white"

  return (
    <motion.div
      className={`aspect-square rounded-lg flex items-center justify-center relative overflow-hidden ${bgClass}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <img src={icon || "/placeholder.svg"} alt={name} className="w-12 h-12 object-contain" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className={`text-sm px-2 py-1 text-center ${textClass}`}>{name}</div>
      </motion.div>
    </motion.div>
  )
}
