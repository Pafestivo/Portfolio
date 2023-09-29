import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import PageCover from "@/components/PageCover";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <PageCover />
      <AboutMe />
      <Projects />
      {/* let's connect */}
    </div>
  );
}
