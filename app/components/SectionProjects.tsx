import { Section } from "./Section";

const listProjects = [
    {imgSrc : "Portfolio-Desk-620x410.jpg", alt : "Yohan's portfolio preview", href : "https://github.com/YohReg10/Portfolio", textTechno : "Made with React ⚛️, TypeScript 💪, Tailwind CSS 🎨", textDescription : "Interactive portfolio designed to showcase my projects, technical skills, and developer identity. Built to provide smooth and responsive navigation, it combines modernity, dynamism, and subtle animations to create an immersive user experience.", textAll : "✨ A project crafted with care, passion, and a touch of love for detail... 👽"},
    {imgSrc : "ProjetTestTechnique.jpg", alt : "Test Technique enginer motor", href : "https://github.com/YohReg10/test-alternant", textTechno : "Made with React ⚛️, TypeScript 💪, Tailwind CSS 🎨", textDescription : "Un moteur de recherche d’activités à Montpellier, avec une interface fluide permettant de trouver facilement des aventures en intérieur et extérieur", textAll : "✨ A project crafted with care, passion, and a touch of love for detail... 👽"},
    {imgSrc : "ProjetChavigny.jpg", alt : "Projet booking rooms", href : "https://github.com/SCollinPerso/PrivateChavigny", textTechno : "Made with Symfony, JavaScript, CSS", textDescription : "Une plateforme de réservation pour la ferme familiale, permettant à chacun d’accéder à son espace personnel, de voir les disponibilités des chambres, de réserver et de savoir qui est présent grâce à un calendrier intégré.", textAll : "✨ A project crafted with care, passion, and a touch of love for detail... 👽"},
];

export const SectionProjects = () => {
    return (
        <Section className="flex flex-col gap-12 p-5 rounded-lg mt-32 mx-auto w-[92%]">
            {listProjects.map((projects) => (
                <div key={projects.href} className="flex flex-row items-center gap-8">

                    {/* Image à gauche */}
                    <div className="w-1/3">
                        <div className="relative">
                            <img
                                src={projects.imgSrc}
                                alt={projects.alt}
                                className="h-auto rounded-3xl border-2 border-[#e3ba59] mx-auto w-[100%] ml-0 hover:opacity-90 transition-opacity"
                                loading="lazy"
                            />

                            {/* Span avec le lien autour du texte */}
                            <a
                                href={projects.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#F1C40F] text-[#2C3E50] w-full text-center px-4 py-2 rounded-md text-sm font-medium absolute bottom-0 left-0 transition-colors"
                            >
                                👀 View Project
                            </a> 
                        </div>               
                    </div>

                        {/* Description à droite */}
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
           
        </Section>
    );
};





