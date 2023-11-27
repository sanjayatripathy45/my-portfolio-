import Intro from "@/components/intro"
import SectionDivider from './../components/section-divider';
import About from "@/components/about";
import Projects from "@/components/projects";
import Skils from "@/components/skils";
import Experience from "@/components/experience";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4" >
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skils />
      <Experience />

    </main>
  )
}
