// MoreProjects.tsx

import Link from "next/link";
import { Section } from "../components/section";

const MoreProjects = () => {
  return (
    <div>
      {/* Bouton de retour */}
      <div className="text-center mt-12">
        <Link href="/" passHref>
          <button className="bg-[#e3ba59] font-caption text-[#333333] dark:text-[#f5f5dc] py-2 px-6 rounded-md text-lg">
            Back to portfolio
          </button>
        </Link>
      </div>

      {/* Titre et description */}
      <h1 className="font-caption text-4xl font-bold text-center mt-12 text-[#e3ba59]">
        🚀 Upcoming Projects :
      </h1>
      <p className="font-caption text-lg text-[#333333] dark:text-[#f5f5dc] text-center mt-4">
        Here are some project ideas in progress. Stay tuned!
      </p>

      {/* Section des projets */}
      <Section className="flex flex-wrap gap-8 justify-center p-5 rounded-lg mt-16 mx-auto max-w-5xl">
        {/* Projet 1 avec overlay au survol */}
        <div className="flex flex-col items-center relative w-1/3 group">
          <img 
            src="pico8.jpg" 
            className="w-full h-auto max-w-[300px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-2xl"
          />
          <div className="absolute inset-0 transition-all duration-300 flex justify-center items-center font-caption text-lg text-[#4acc59] dark:text-[#f5f5dc] font-bold opacity-0 group-hover:opacity-100">
            Coming Soon !
          </div>
        </div>

        {/* Projet 2 */}
        <div className="flex flex-col items-center w-1/3">
          <img 
            src="pico8.jpg" 
            className="w-full h-auto max-w-[300px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-2xl"
          />
        </div>

        {/* Projet 3 */}
        <div className="flex flex-col items-center w-1/3">
          <img 
            src="pico8.jpg" 
            className="w-full h-auto max-w-[300px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-2xl"
          />
        </div>
      </Section>
    </div>
  );
};

export default MoreProjects;
