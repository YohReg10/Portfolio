import { Section } from "./Section";

export const SectionProjects = () => {
    return(
        <Section className="flex flex-row gap-8 justify-between p-5 rounded-lg mt-32 mx-auto w-[92%]">
            
            {/* Colonne de gauche : Projets */}
            <div className="w-2/4">
                <a href="https://github.com/YohReg10/Portfolio" target="_blank" rel="noopener noreferrer">
                    <img src="Portfolio-Desk-620x410.jpg" className="h-auto rounded-3xl mx-auto w-[70%] ml-0" alt="Image d'ordinateur pour le projet Portfolio" />
                </a>

            </div>
    
            {/* Description à droite */}

            <div className="w-2/4 mt-0 mr-24">
                <h2 className="font-serif text-3xl mb-2 font-bolt text-[#e3ba59] dark:text-[#d9b96d]">
                    Made with React ⚛️, TypeScript 💪, Tailwind CSS 🎨 <br />
                </h2>
                <p className="font-serif text-xl leading-relaxed mb-4 text-justify text-[#333333] dark:text-[#e0e0e0]">
                    Interactive portfolio designed to showcase my projects, technical skills, and developer identity. Built to provide smooth and responsive navigation, it combines modernity, dynamism, and subtle animations to create an immersive user experience. <br />                </p>
                <p className="font-serif text-xl leading-relaxed mb-4 text-justify text-[#333333] dark:text-[#e0e0e0]">
                    ✨ A project crafted with care, passion, and a touch of love for detail... 👽<br />                
                </p>
            </div>         
            
        </Section>
    )
}
