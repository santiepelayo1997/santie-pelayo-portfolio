"use client";

import React from "react";
import Image from "next/image";
// import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion";

export default function Testimonial() {
  //   const itemVariants = {
  //     hidden: { y: 20, opacity: 0 },
  //     visible: {
  //       y: 0,
  //       opacity: 1,
  //       transition: { duration: 0.5 },
  //     },
  //   };
  return (
    <section id="testimonial" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6 mx-auto md:max-w-5xl">
        <motion.div className="flex flex-col">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-16 md:max-w-5xl md:mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-1 flex items-center text-foreground/80">
                Testimonials<span className="text-blue-500">.</span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-[35%] pr-10 flex justify-center flex-col items-center text-center">
              <Image
                src="/katy.jpg?height=80&width=80"
                alt="University Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
              <span className="text-md font-bold mt-5 text-foreground/80">
                Katy Solovewicz
              </span>
              <span className="text-gray-400">
                Technical Lead of Frontend Development
              </span>
              <span className="text-gray-400">The Good</span>
            </div>

            <div className="w-[65%] text-xl break-normal flex justify-center items-center">
              <p className="indent-[10%] text-foreground/80">
                &quot;I’ve had the pleasure of working with Santie Pelayo, and I
                can confidently say he’s one of the most reliable and skilled
                developers I’ve worked with. He brings a positive attitude to
                every project, managing his time exceptionally well while
                continuously pushing himself to learn and improve.&quot;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
