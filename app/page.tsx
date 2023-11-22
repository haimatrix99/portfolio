import About from "@/components/about";
import Info from "@/components/info";
import Projects from "@/components/project";
import Skills from "@/components/skill";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <About />
      <Info />
      <Skills />
      <Projects />
    </main>
  );
}
