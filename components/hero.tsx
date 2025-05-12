"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Front End Developer";
  const typingSpeed = 150;

  function handleDownloadCv() {
    const link = document.createElement("a");
    link.href = "/Santie-Pelayo-Resume.pdf";
    link.download = "Santie_Pelayo_Resume.pdf";
    link.click();
  }

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section
      id="home"
      className="pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <motion.div
            className="w-full space-y-12 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="sm:text-[1rem] md:text-[1.5rem] py-[9px] px-8 w-fit font-semibold rounded-3xl bg-[#0001] dark:bg-[#fff1] mb-10 text-foreground/80">
              Kumusta!
              <motion.span
                className="inline-block origin-bottom-right mr-1"
                initial="initial"
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                  transition: {
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    repeatDelay: 1,
                  },
                }}
              >
                👋
              </motion.span>
              I&apos;m Santie Pelayo
            </div>

            <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-medium text-foreground/80">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                I&apos;m a{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
                  {" "}
                  front-end developer.
                </span>{" "}
                <br></br>Turning caffeine into{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
                  {" "}
                  components
                </span>{" "}
                and bugs into{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
                  {" "}
                  features.
                </span>
              </h1>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="transition-transform hover:scale-105 bg-blue-500 hover:bg-blue-600 rounded-3xl dark:text-white"
              >
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="transition-transform hover:scale-105 rounded-3xl"
                onClick={handleDownloadCv}
              >
                Resume <Download className="mr-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
