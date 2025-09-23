import Link from "next/link";
import { Section } from "./section";

const listProjects = [
  {
    imgSrc: "Portfolio-Desk-620x410.jpg",
    alt: "Yohan's portfolio preview",
    href: "https://github.com/YohReg10/Portfolio",
    textTechno: "Made with React ⚛️, TypeScript 💪, Tailwind CSS 🎨",
    textDescription:
      "Interactive portfolio designed to showcase my projects, technical skills, and developer identity. Built to provide smooth and responsive navigation, it combines modernity, dynamism, and subtle animations to create an immersive user experience.",
    textAll:
      "✨ A personal digital journey, reflecting my skills and vision, crafted with care and attention to detail. 👽",
    status: "finished",
  },
  {
    imgSrc: "ProjetTestTechnique.jpg",
    alt: "Test Technique engine motor",
    href: "https://github.com/YohReg10/test-alternant",
    textTechno: "Made with React ⚛️, TypeScript 💪, Tailwind CSS 🎨",
    textDescription:
      "A search engine for activities in Montpellier, with a smooth interface allowing users to easily find indoor and outdoor adventures.",
    textAll:
      "✨ A project that brings local adventures to life, created with precision and passion for a seamless user experience. 👽",
    status: "finished",
  },
  {
    imgSrc: "ProjetChavigny.jpg",
    alt: "Projet booking rooms",
    href: "https://github.com/SCollinPerso/PrivateChavigny",
    textTechno: "Made with Symfony, JavaScript, CSS",
    textDescription:
      "A booking platform for the family house, allowing each user to access their personal space, view room availability, make reservations, and see who is present through an integrated calendar.",
    textAll:
      "✨ Built with care to simplify bookings and enhance the experience of both guests and hosts. 👽",
    status: "in production",
  },
];

export const SectionProjects = () => {
  return (
    <Section
      id="projects"
      className="flex flex-col gap-12 p-5 md:p-6 lg:p-8 rounded-lg mt-20 lg:mt-32 mx-auto w-[92%]"
    >
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-center text-[#e3ba59] dark:text-[#d9b96d] mb-10 md:mb-16 lg:mb-20">
        My Projects
      </h1>
      {listProjects.map((projects) => (
        <div
          key={projects.href}
          className="flex flex-col items-center lg:flex-row lg:items-center gap-6 md:gap-8 lg:gap-10"
        >
          {/* IMAGE (col gauche) */}
          <div className="w-full lg:w-1/3">
            <div className="relative mx-auto w-fit">
              <img
                src={projects.imgSrc}
                alt={projects.alt}
                className={`
                  object-cover rounded-2xl md:rounded-3xl border-2 border-[#e3ba59]
                  hover:opacity-90 transition-opacity mx-auto
                  /* iPhone 12 Pro (base) */
                  w-[280px] h-[180px]
                  /* iPad >= 768px */
                  md:w-[390px] md:h-[290px]
                  /* Desktop */
                  lg:!w-[500px] lg:!h-[400px]
                  /* 1440x900 */
                  xl:w-[460px] xl:h-[300px]
                `}
                loading="lazy"
              />
              {projects.status === "in production" && (
                <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs sm:text-sm font-serif rounded-tr-lg rounded-bl-lg">
                  In production
                </div>
              )}
              {/* Bouton overlay */}
              <a
                href={projects.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  absolute inset-x-2 md:inset-x-3 lg:inset-x-4
                  bottom-2 md:bottom-0 lg:-bottom-1
                  xl:inset-x-2 xl:padding-1
                  bg-[#e3ba59] text-[#333333] dark:text-[#f5f5dc]
                  text-center font-serif font-medium
                  px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5
                  text-xs sm:text-sm md:text-base lg:text-lg
                  rounded-lg md:rounded-xl lg:rounded-2xl shadow
                `}
              >
                👀 View Github
              </a>
              {/* Espace de sécurité pour le bouton */}
              <div className="h-10 md:h-12" />
            </div>
          </div>
          {/* TEXTE (inchangé) */}
          <div className="w-full lg:w-2/4 lg:mr-24 text-center lg:text-left mt-2 md:mt-3 lg:mt-0">
            <div className="mx-auto lg:mx-0 max-w-[340px] md:max-w-[480px] lg:max-w-none">
              <h2 className="font-serif font-bold text-2xl md:text-3xl mb-3 text-[#e3ba59] dark:text-[#d9b96d]">
                {projects.textTechno}
              </h2>
              <p className="font-serif text-base md:text-lg lg:text-xl leading-relaxed mb-4 text-[#333333] dark:text-[#e0e0e0]">
                {projects.textDescription}
              </p>
              <p className="font-serif text-base md:text-lg lg:text-xl leading-relaxed text-[#333333] dark:text-[#e0e0e0]">
                {projects.textAll}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center mt-2 md:mt-4">
        <Link
          href="/more-projects"
          className="inline-block text-[#333333] dark:text-[#f5f5dc] bg-[#e3ba59] px-6 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#e3ba59]/90 transition-all"
        >
          View More
        </Link>
      </div>
    </Section>
  );
};