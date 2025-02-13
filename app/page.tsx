import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { SectionTechno } from "./components/SectionTechno";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md"/>
      <Hero />   
      <SectionTechno /> 
    </main>
  );
}
