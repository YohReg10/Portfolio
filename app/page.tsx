import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md"/>
      <Hero />    
    </main>
  );
}
