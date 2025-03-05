import { Section } from "./Section";

export const SectionProjects = () => {
    return(
        <Section className="flex flex-row gap-8 justify-between p-5 rounded-lg mt-32 mx-auto w-[92%] bg-pink-700">
            {/* Colonne de gauche : Projets */}
            <div className="w-2/4">
                <p>Blabla</p>
            </div>
    
            {/* Description à droite */}
            <div className="w-2/4">
                <p>blabla</p>
            </div>

            
            
        </Section>
    )
}
