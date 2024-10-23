import { Section } from "./section";

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="flex-[2]">
                <h2>Yohan Regad</h2>
                <h3>Student web Developer</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vero dignissimos alias nostrum sed nisi laborum aspernatur impedit veritatis, qui, vel animi enim maiores laboriosam. Saepe eaque ad ducimus laudantium!</p>
            </div>
            <div className="flex-1">
                <img 
                    src="yohan_noir_blanc_bis2024.jpg"
                    className="w-full h-auto"
                    alt="yohan picture"
                />
            </div>
        </Section>
    )
}
