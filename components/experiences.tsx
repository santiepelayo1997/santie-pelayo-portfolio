"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Technology {
  name: string
  icon: string
}

interface Experience {
  position: string
  company: string
  period: string
  duration: string
  description: string
  activities?: string[]
  technologies?: Technology[]
  logo: string
  companyUrl?: string
}

const technologies = {
  html: "HTML",
  css: "CSS",
  vue: "Vue.js",
  vuetify: "Vuetify",
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  nextjs: "Next.js",
  laravel: "Laravel",
  nodejs: "Node.js",
  express: "Express",
  mongodb: "MongoDB",
  mysql: "MySQL",
  php: "PHP",
  bootstrap: "Bootstrap",
  tailwind: "Tailwind CSS",
  jquery: "jQuery",
  git: "Git",
  figma: "Figma",
  github: "GitHub",
  gitlab: "GitLab",
  composer: "Composer",
  python: "Python",
  vwo: "Convert A/B Testing",
  googletag: "Google Tag Manager",
  googleoptimize: "Google Optimize",
}

const experiences: Experience[] = [
  {
    position: "Frontend Developer",
    company: "The Good Company",
    period: "May 2022 - February 2025",
    duration: "(2 years, 9 months)",
    description: "Translated design team’s UX wireframe and mockups into responsive, interactive features, using Javascript, HTML5/CSS3, TailwindCSS, Typescript, and modern framework (e.g., React)",
    activities: [
      "Build reusable components and front-end libraries to streamline development and improve consistency.",
      "Implement pixel-perfect designs while ensuring a seamless user experience across desktop and mobile platforms.",
      "Translated design mockups into functional components.",
      "Integrated RESTful APIs and third-party services.",
      "Optimized web applications for performance and accessibility.",
      "Monitor front-end performance with tools like Sentry.",
    ],
    technologies: [
      { name: technologies.react, icon: "react" },
      { name: technologies.typescript, icon: "typescript" },
      { name: technologies.tailwind, icon: "tailwind" },
      { name: technologies.javascript, icon: "javascript" },
      { name: technologies.html, icon: "html" },
      { name: technologies.css, icon: "css" },
      { name: technologies.vwo, icon: "vwo" },
      { name: technologies.googleoptimize, icon: "googleoptimize" },
      { name: technologies.googletag, icon: "googletag" },
      { name: technologies.github, icon: "github" },
    ],
    logo: "/thegood.png?height=150&width=150",
    companyUrl: "https://thegood.com/",
  },
  {
    position: "Frontend Developer",
    company: "Spiderhook",
    period: "September 2020 - April 2022",
    duration: "(1yr and 7 months)",
    description: "Develop and maintain responsive web applications using HTML5, CSS3, JavaScript and modern frameworks like Vue.JS",
    activities: [
      "Collaborate with UX/UI designers to translate wireframes and prototypes into high-quality code.",
      "Collaborate with back-end developers to define and implement cohesive solutions.s",
      "Build reusable components and front-end libraries to streamline development and improve consistency",
      "Maintain code quality through version control systems (e.g., Git) and participate in code reviews.",
    ],
    technologies: [
      { name: technologies.vue, icon: "Vue" },
      { name: technologies.vuetify, icon: "vuetify" },
      { name: technologies.laravel, icon: "laravel" },
      { name: technologies.bootstrap, icon: "bootstrap" },
      { name: technologies.html, icon: "html" },
      { name: technologies.css, icon: "css" },
      { name: technologies.figma, icon: "figma" },
      { name: technologies.git, icon: "git" },
    ],
    logo: "/spiderhook.jpg?height=200&width=200",
    companyUrl: "https://www.linkedin.com/company/spiderhookph/#",
  },
  {
    position: "Software Developer",
    company: "IRipple Inc.",
    period: "May 2018 - August 2020",
    duration: "(2 years, 4 months)",
    description:
      "Developed responsive web applications and user interfaces for various clients. Focused on creating accessible and performant web experiences.",
    activities: [
      "Created responsive websites for various clients across different industries",
      "Build modular layouts, reusable code, and libraries for future use.",
      "Optimized website performance and accessibility",
      "Work in Agile/Scrum environments, participating in sprint planning, stand-ups, and retrospectives."
    ],
    technologies: [
      { name: technologies.vue, icon: "Vue" },
      { name: technologies.php, icon: "php" },
      { name: technologies.mongodb, icon: "mongodb" },
      { name: technologies.express, icon: "express" },
      { name: technologies.bootstrap, icon: "bootstrap" },
      { name: technologies.html, icon: "html" },
      { name: technologies.css, icon: "css" },
      { name: technologies.figma, icon: "figma" },
      { name: technologies.git, icon: "git" },
    ],
    logo: "/iripple.jpg?height=200&width=200",
    companyUrl: "https://iripple.com/#",
  },
]

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:max-w-5xl md:mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-1 flex items-center text-foreground/80">
            Experience<span className="text-blue-500">.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline dotted line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full border-l-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary md:transform md:-translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                experience={exp}
                index={index}
                isExpanded={expandedIndex === index}
                toggleExpand={() => toggleExpand(index)}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  experience,
  index,
  isExpanded,
  toggleExpand,
  isMobile,
}: {
  experience: Experience
  index: number
  isExpanded: boolean
  toggleExpand: () => void
  isMobile: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 ">
        <div className="max-sm:w-5 max-sm:h-5 w-6 h-6 rounded-full bg-blue-500"></div>
      </div>


      {isMobile && (
        <div className="ml-12">
          <div className="max-sm:flex-col flex items-start gap-4 mb-4 max-sm:gap-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex-shrink-0 w-18 h-18 flex items-center justify-center">
              <Image
                src={experience.logo || "/placeholder.svg"}
                alt={experience.company}
                width={68}
                height={68}
                className="object-contain rounded-lg"
              />
            </div>

            <div className="flex-1">
              <h3 className="max-sm:text-[16px] text-xl font-bold text-foreground/80">{experience.position}</h3>
              <p className="text-muted-foreground mb-1">{experience.company}</p>
              <p className="text-sm text-muted-foreground/70 mb-4 max-sm:mb-2">
                {experience.period} {experience.duration && <span>{experience.duration}</span>}
              </p>
            </div>
          </div>

          <p className="text-foreground/80  mb-4 max-sm:text-[14px]">{experience.description}</p>

          {isExpanded && experience.activities && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-1 text-foreground/80 list-disc pl-5 max-sm:text-[14px]">
                {experience.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>

              {experience.technologies && (
                <>
                  <h4 className="font-bold text-foreground mt-6 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}

          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleExpand}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-3xl mt-6 w-fit justify-center py-3 px-5 pr-6"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" /> See less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" /> See more
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Desktop layout with alternating sides */}
      {!isMobile && (
        <div className="grid grid-cols-2 gap-20">
          {/* Left side */}
          <div className={cn(isEven ? "text-left" : "text-right flex justify-end items-start")}>
            {isEven ? (
              // Content for even items (left side)
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground">{experience.position}</h3>
                <p className="text-muted-foreground mb-1">{experience.company}</p>
                <p className="text-sm text-muted-foreground/70 mb-4">
                  {experience.period} {experience.duration && <span>{experience.duration}</span>}
                </p>

                <p className="text-foreground/80 mb-4">{experience.description}</p>

                {isExpanded && experience.activities && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-1 text-foreground/80 list-disc pl-5">
                      {experience.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>

                    {experience.technologies && (
                      <>
                        <h4 className="font-bold text-foreground mt-6 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary">
                              {tech.name}
                            </Badge>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}

                <div className="mt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={toggleExpand}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-3xl"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-1" /> See less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-1" /> See more
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ) : (
              // Logo for odd items (left side)
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md inline-flex items-center justify-center w-24 h-24 mt-0">
                <Image
                  src={experience.logo || "/placeholder.svg"}
                  alt={experience.company}
                  width={100}
                  height={100}
                  className="object-contain rounded-lg"
                />
              </div>
            )}
          </div>

          <div className={cn(!isEven ? "text-left" : "text-right flex items-start")}>
            {!isEven ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground">{experience.position}</h3>
                <p className="text-muted-foreground mb-1">{experience.company}</p>
                <p className="text-sm text-muted-foreground/70 mb-4">
                  {experience.period} {experience.duration && <span>{experience.duration}</span>}
                </p>

                <p className="text-foreground/80 mb-4">{experience.description}</p>

                {isExpanded && experience.activities && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-1 text-foreground/80 list-disc pl-5">
                      {experience.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>

                    {experience.technologies && (
                      <>
                        <h4 className="font-bold text-foreground mt-6 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary">
                              {tech.name}
                            </Badge>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}

                <div className="mt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={toggleExpand}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-3xl"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-1" /> See less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-1" /> See more
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ) : (
            
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md inline-flex items-center justify-center w-24 h-24 mt-0">
                <Image
                  src={experience.logo || "/placeholder.svg"}
                  alt={experience.company}
                  width={100}
                  height={100}
                  className="object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
