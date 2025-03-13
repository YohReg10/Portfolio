// MoreProjects.tsx

import Link from "next/link";
import {Section} from "../components/Section"; // Assurez-vous d'utiliser l'importation par défaut

const MoreProjects = () => {
  return (
    <div>
      <div className="text-center mt-12">
        <Link href="/" passHref>
          <button className="bg-[#F1C40F] text-[#2C3E50] py-2 px-6 rounded-md text-lg">
            Retour au portfolio
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center text-[#F1C40F]">🚀 Projets à venir</h1>
      <p className="text-lg text-gray-500 text-center mt-2">
        Voici quelques idées de projets en préparation. Stay tuned !
      </p>

      <Section className="flex flex-wrap lg:flex-nowrap gap-8 justify-between p-5 rounded-lg mt-32 mx-auto w-1/3">
        <div className="flex flex-col items-center">
          <img src="pico8.jpg" width="1000" height="1000" />
        </div>
        <div className="flex flex-col items-center">
          <img src="pico8.jpg" />
        </div>
        <div className="flex flex-col items-center">
          <img src="pico8.jpg" />
        </div>
      </Section>
    </div>
  );
};

export default MoreProjects;
