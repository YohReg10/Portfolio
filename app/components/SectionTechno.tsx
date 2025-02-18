import { Section } from "./Section";

export const SectionTechno = () => {
    return (
        <Section className="flex flex-wrap gap-8 justify-between p-5 rounded-lg mt-32 mx-auto w-[92%]">
            <div className="card flex flex-col items-center">
                <img src="react_img.svg" alt="Logo React" />
                <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">React/NextJS</h3>

                {/* Nombres de projets réalisé */}
                <p className="font-caption text-[18px] dark:text[#f5f5dc]- mb-0">Projets réalisé :</p>

                {/* Cercles de compétence */}
                <div className="flex gap-2 mb-0">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${i < 3 ? "bg-[#e3ba59]" : "bg-gray-700"}`}
                    ></div>
                ))}
                </div>
            </div>
            <div className="card flex flex-col items-center">
                <img src="javascript_img.svg" alt="Logo JavaScript" /> 
                <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">JavaScript</h3>

                 {/* Nombres de projets réalisé */}
                 <p className="font-caption text-[18px] dark:text[#f5f5dc]- mb-0">Projets réalisé :</p>

                {/* Cercles de compétence */}
                <div className="flex gap-2 mb-0">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${i < 5 ? "bg-[#e3ba59]" : "bg-gray-700"}`}
                    ></div>
                ))}
                </div>
            </div>
            <div className="card flex flex-col items-center">
                <img src="mysql_img.svg" alt="Logo MySQL" style={{ marginTop: "-10px", width: "125px", height: "125px" }} />
                <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">MySQL</h3>

                 {/* Nombres de projets réalisé */}
                 <p className="font-caption text-[18px] dark:text[#f5f5dc]- mb-0">Projets réalisé :</p>

                {/* Cercles de compétence */}
                <div className="flex gap-2 mb-0">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${i < 2 ? "bg-[#e3ba59]" : "bg-gray-700"}`}
                    ></div>
                ))}
                </div>
            </div>
            <div className="card flex flex-col items-center">
                <img src="symfony_img.svg" alt="Logo Symfony" />
                <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">Symfony</h3>

                 {/* Nombres de projets réalisé */}
                 <p className="font-caption text-[18px] dark:text[#f5f5dc]- mb-0">Projets réalisé :</p>

                {/* Cercles de compétence */}
                <div className="flex gap-2 mb-0">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${i < 1 ? "bg-[#e3ba59]" : "bg-gray-700"}`}
                    ></div>
                ))}
                </div>
            </div>
            <div className="card flex flex-col items-center">
                <img src="figma_img.svg" alt="Logo Figma" />
                <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">Figma</h3>

                 {/* Nombres de projets réalisé */}
                 <p className="font-caption text-[18px] dark:text[#f5f5dc]- mb-0">Projets réalisé :</p>

                {/* Cercles de compétence */}
                <div className="flex gap-2 mb-0">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${i < 6 ? "bg-[#e3ba59]" : "bg-gray-700"}`}
                    ></div>
                ))}
                </div>
            </div>
            <div className="card flex flex-col items-center">
                <img src="github_img.svg" alt="Logo Github" />
                <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">Github</h3>

                 {/* Nombres de projets réalisé */}
                 <p className="font-caption text-[18px] dark:text[#f5f5dc]- mb-0">Projets réalisé :</p>

                {/* Cercles de compétence */}
                <div className="flex gap-2 mb-0">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${i < 6 ? "bg-[#e3ba59]" : "bg-gray-700"}`}
                    ></div>
                ))}
                </div>
            </div>
</Section>
    )
}