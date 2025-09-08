import { Section } from "./section";

const listTechno = [
    {imgSrc : "react_img.svg", alt : "Logo React", name : "React", cercles : 6},
    {imgSrc : "javascript_img.svg", alt : "Logo JavaScript", name : "JavaScript", cercles : 6},
    {imgSrc : "mysql_img.svg", alt : "Logo MySQL", name : "MySQL", cercles : 4},
    // {imgSrc : "symfony_img.svg", alt : "Logo Symfony", name : "Symfony", cercles : 3},
    {imgSrc : "figma_img.svg", alt : "Logo Figma", name : "Figma", cercles : 6},
    {imgSrc : "github_img.svg", alt : "Logo Github", name : "Github", cercles : 7}
];

export const SectionTechno = () => {
    return (
        <Section id="technos" className="flex flex-wrap gap-8 p-5 rounded-lg mt-32 mx-auto w-[92.5%] justify-center">
            <div className="w-full text-center">
                <h1 className="font-serif text-4xl font-bold text-[#e3ba59] dark:text-[#d9b96d] mb-20">
                    My Technologies
                </h1>
            </div>
            
            <div className="w-full flex flex-wrap justify-between gap-8">
                {listTechno.map((techno) => (
                    <div key={techno.name} className="card flex flex-col items-center w-[15%] min-w-[150px]">
                        <img src={techno.imgSrc} alt={techno.alt} className="w-20 h-20" />
                        <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">{techno.name}</h3>
                        <p className="font-caption text-[18px] dark:text-[#f5f5dc] mb-0">Expertise :</p>

                        {/* Cercles de compétence */}
                        <div className="flex gap-2 mb-0">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className={`h-3 w-3 rounded-full ${i < techno.cercles ? "bg-[#e3ba59]" : "bg-gray-700"}`}></div>
                            ))}
                        </div>
                    </div>
            ))}
            </div>
        </Section>
    )
}
