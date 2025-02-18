import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { SectionTechno } from "./components/SectionTechno";
import { SectionProjects } from "./components/SectionProjects";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md"/>
      <Hero />   
      <SectionTechno /> 
      <SectionProjects />
    </main>
  );
}
