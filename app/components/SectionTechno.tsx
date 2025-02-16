import { Section } from "./Section";

export const SectionTechno = () => {
    return (
        <Section className="flex flex-wrap gap-8 justify-between p-5 rounded-lg mt-32 mx-auto w-full">
            <div className="card">
                <img src="react_img.svg" alt="Logo React" />
                <h3 className="font-caption text-[18px] text-[#f5f5dc] mb-20">React/NextJS</h3>
            </div>
            <div className="card ">
                <img src="javascript_img.svg" alt="Logo JavaScript" /> 
                <h3 className="font-caption text-[18px] dark:text-[#f5f5dc] mb-20">JavaScript</h3>
            </div>
            <div className="card ">
                <img src="mysql_img.svg" alt="Logo MySQL" style={{ marginTop: "-10px", width: "125px", height: "125px" }} />
                <h3 className="font-caption text-[18px] dark:text-[#f5f5dc] mb-20">MySQL</h3>
            </div>
            <div className="card ">
                <img src="symfony_img.svg" alt="Logo Symfony" />
                <h3 className="font-caption text-[18px] dark:text-[#f5f5dc] mb-20">Symfony</h3>
            </div>
            <div className="card ">
                <img src="figma_img.svg" alt="Logo Figma" />
                <h3 className="font-caption text-[18px] dark:text-[#f5f5dc] mb-20">Figma</h3>
            </div>
            <div className="card ">
                <img src="github_img.svg" alt="Logo Github" />
                <h3 className="font-caption text-[18px] dark:text-[#f5f5dc] mb-20">Github</h3>
            </div>
</Section>

    )
}