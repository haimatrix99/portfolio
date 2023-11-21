import About from "@/components/about";
import Info from "@/components/info";
import Skills from "@/components/skill";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <About />
      <Info />
      <Skills />
    </main>
  );
}
