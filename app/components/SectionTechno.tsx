// Section Techno

import { Section } from "./Section";

export const SectionTechno = () => {
    return (
        <Section className="flex flex-wrap gap-8 justify-between p-5 rounded-lg mt-20 mx-auto w-full">
            <div className="card ">
                <img src="react_img.svg" />
            </div>
            <div className="card ">
                <h3>JavaScript</h3>
                <p></p>
            </div>
            <div className="card ">
                <h3>MySQL</h3>
                <p></p>
            </div>
            <div className="card ">
                <h3>Symfony</h3>
                <p></p>
            </div>
            <div className="card ">
                <h3>Figma</h3>
                <p></p>
            </div>
            <div className="card ">
                <h3>Github</h3>
                <p></p>
            </div>
</Section>

    )
}