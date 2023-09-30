import AboutMe from "@/components/AboutMe";
import Connect from "@/components/Connect";
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
      <Connect />
    </div>
  );
}
