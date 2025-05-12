import Navbar from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"
import Hero from "@/components/hero";
import Projects from "@/components/project";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Education from "@/components/education";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navbar />
      <PageTransition>
        <main>
          <Hero />
          <Experiences />
          <Projects />
          <Skills />
          <Testimonial/>
          <Education />
          <Contact/>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
}
