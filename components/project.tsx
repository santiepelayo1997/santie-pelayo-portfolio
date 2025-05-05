"use client"

import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "AI Assitant Chabot for Portfolio",
    description:
      "An AI-powered chatbot that provides information about projects, skills, and services offered, enhancing user experience and engagement powered by Google Gemini 2.0.",
    image: "/chatwithsantie.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini 2.0", "Aceternity UI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Manager with Supabase",
    description:
      "A task management application with login authentication using Supabase. Users can create, update and delete tasks. A Task manager app helps you take control of your day with ease.",
    image: "/todo-app.png",
    tags: ["React", "Tailwind CSS", "Supabase", "Typescript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-commerce Store Build with Shopify",
    description:
      "Clothing e-commerce store built with Shopify, featuring a custom theme, product management, and payment integration. Users can browse products, add to cart, and complete purchases seamlessly.",
    image: "/shopify.png",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const { ref, isInView } = useScrollAnimation(0.2)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
         <div className="mb-16 md:max-w-5xl md:mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-1 flex items-center text-foreground/80">
            Projects<span className="text-blue-500">.</span>
          </h2>       
            <h3
              className="text-md mb-8 text-muted-foreground text-left"
            >
                Here are some of my recent projects.
            </h3>
        </div>
     
        </motion.div>

        <motion.div
          ref={ref}
          className="space-y-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border-none shadow-lg py-0">
                  <div className={cn("flex flex-col md:flex-row", !isEven && "md:flex-row-reverse")}>
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <CardTitle className="max-sm:!text-md text-lg mb-2 text-foreground/80">{project.title}</CardTitle>
                        <CardDescription className="text-base mb-4 max-sm:text-sm">{project.description}</CardDescription>

                        <div className="flex flex-wrap gap-2 mb-6 max-sm:mb-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* <div className="flex gap-4 mt-auto">
                        <Button variant="outline" size="sm" asChild className="transition-transform hover:scale-105">
                          <Link href={project.githubUrl}>
                            <Github className="mr-2 h-4 w-4" /> Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="transition-transform hover:scale-105">
                          <Link href={project.demoUrl}>
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      </div> */}
                    </div>

                    <div className="md:w-1/2 relative h-64 md:h-auto">
                      <div className={cn("h-full w-full relative overflow-hidden max-sm:mt-2 mt-8 shadow-2xl rounded-lg -right-10 transition-transform duration-500 hover:scale-105", !isEven && "-left-10")}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover "
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
