// Section Techno

import { Section } from "./Section";

export const SectionTechno = () => {
    return (
        <Section className="flex flex-wrap gap-8 justify-between p-5 rounded-lg mt-20 mx-auto w-full">
            <div className="card ">
                <img src="react_img.svg" />
            </div>
            <div className="card ">
                <img src="javascript_img.svg" /> 
            </div>
            <div className="card ">
                <img src="mysql_img.svg" style={{ marginTop: "-10px", width: "125px", height: "125px" }} />
            </div>
            <div className="card ">
                <img src="symfony_img.svg" />
            </div>
            <div className="card ">
                <img src="figma_img.svg" />
            </div>
            <div className="card ">
                <img src="github_img.svg" />
            </div>
</Section>

    )
}