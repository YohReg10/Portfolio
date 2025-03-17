import Link from "next/link";
import { Section } from "./section";

const listProjects = [
    {
        imgSrc: "Portfolio-Desk-620x410.jpg",
        alt: "Yohan's portfolio preview",
        href: "https://github.com/YohReg10/Portfolio",
        textTechno: "Made with React ⚛️, TypeScript 💪, Tailwind CSS 🎨",
        textDescription:
            "Interactive portfolio designed to showcase my projects, technical skills, and developer identity. "
            + "Built to provide smooth and responsive navigation, it combines modernity, dynamism, and subtle animations "
            + "to create an immersive user experience.",
        textAll: "✨ A personal digital journey, reflecting my skills and vision, crafted with care and attention to detail. 👽",
        status : "finished",
    },
    {
        imgSrc: "ProjetTestTechnique.jpg",
        alt: "Test Technique engine motor",
        href: "https://github.com/YohReg10/test-alternant",
        textTechno: "Made with React ⚛️, TypeScript 💪, Tailwind CSS 🎨",
        textDescription:
            "A search engine for activities in Montpellier, with a smooth interface allowing users to easily find indoor and outdoor adventures.",
        textAll: "✨ A project that brings local adventures to life, created with precision and passion for a seamless user experience. 👽",
        status : "finished",
    },
    {
        imgSrc: "ProjetChavigny.jpg",
        alt: "Projet booking rooms",
        href: "https://github.com/SCollinPerso/PrivateChavigny",
        textTechno: "Made with Symfony, JavaScript, CSS",
        textDescription:
            "A booking platform for the family house, allowing each user to access their personal space, view room availability,"
            + "make reservations, and see who is present through an integrated calendar.",
        textAll: "✨ Built with care to simplify bookings and enhance the experience of both guests and hosts. 👽",
        status : "in production",
    }
];

export const SectionProjects = () => {
    return (
        <Section className="flex flex-col gap-12 p-5 rounded-lg mt-32 mx-auto w-[92%]">
            <h1 className=" font-serif text-4xl font-bold text-center text-[#e3ba59] dark:text-[#d9b96d] mb-20">
                My Projects
            </h1>

            {listProjects.map((projects) => (
                <div key={projects.href} className="flex flex-row items-center gap-8">

                    <div className="w-1/3">
                        <div className="relative">
                            <img
                                src={projects.imgSrc}
                                alt={projects.alt}
                                className="w-[575px] h-[382px] object-cover rounded-3xl border-2 border-[#e3ba59] mx-auto hover:opacity-90 transition-opacity"                                loading="lazy"
                            />
                            {projects.status === "in production" && (
                                <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-m font-serif rounded-tr-lg rounded-bl-lg">
                                    In production
                                </div>
                            )}

                            <a
                                href={projects.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#e3ba59] text-[#333333] dark:text-[#f5f5dc] w-full text-center px-4 py-2 rounded-3xl text-xl font-serif absolute bottom-0 left-0 transition-colors"
                            >
                                👀 View Github
                            </a> 
                        </div>               
                    </div>

                    <div className="w-2/4 mt-0 mr-24">
                        <h2 className="font-serif text-3xl mb-2 font-bolt text-[#e3ba59] dark:text-[#d9b96d]">
                            {projects.textTechno}
                        </h2>
                        <p className="font-serif text-xl leading-relaxed mb-4 text-justify text-[#333333] dark:text-[#e0e0e0]">
                            {projects.textDescription}
                        </p>
                        <p className="font-serif text-xl leading-relaxed mb-4 text-justify text-[#333333] dark:text-[#e0e0e0]">
                        {projects.textAll}               
                        </p>
                    </div>         
                </div>               
                
            ))} 

        <div className="text-center mt-8">
            <Link href="/more-projects" className="inline-block text-[#333333] dark:text-[#f5f5dc] bg-[#e3ba59] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#e3ba59] transition-all">
                View More
            </Link>
        </div>
    
           
        </Section>
    );
};





