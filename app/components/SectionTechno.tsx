import { Section } from "./Section";

const listTechno = [
    {imgSrc : "react_img.svg", alt : "Logo React", name : "React", cercles : 3},
    {imgSrc : "javascript_img.svg", alt : "Logo JavaScript", name : "JavaScript", cercles : 5},
    {imgSrc : "mysql_img.svg", alt : "Logo MySQL", name : "MySQL", cercles : 2},
    {imgSrc : "symfony_img.svg", alt : "Logo Symfony", name : "Symfony", cercles : 1},
    {imgSrc : "figma_img.svg", alt : "Logo Figma", name : "Figma", cercles : 6},
    {imgSrc : "github_img.svg", alt : "Logo Github", name : "Github", cercles : 6}
];

export const SectionTechno = () => {
    return (
        <Section className="flex flex-wrap gap-8 justify-between p-5 rounded-lg mt-32 mx-auto w-[92%]">
            {listTechno.map((techno) => (
                <div key={techno.name} className="card flex flex-col items-center">
                    <img src={techno.imgSrc} alt={techno.alt} />
                    <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">{techno.name}</h3>
                    <p className="font-caption text-[18px] dark:text[#f5f5dc]- mb-0">Projets réalisés :</p>

                    {/* Cercles de compétence */}
                    <div className="flex gap-2 mb-0">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className={`h-3 w-3 rounded-full ${i < techno.cercles ? "bg-[#e3ba59]" : "bg-gray-700"}`}></div>
                    ))}
                    </div>
                </div>
            ))}                
        </Section>
    )
}
