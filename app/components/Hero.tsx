// Introduction du site

import { Section } from "./section";

export const Hero = () => {
    return (
        <Section id="about" className="flex justify-between items-start max-lg:flex-col mt-20 mx-auto" aria-labelledby="hero-title">
            <div className="flex-[2] ml-20">
                <h1 id="hero-title" className="font-caption text-4xl font-bold text-[#e3ba59] dark:text-[#d9b96d]">Yohan Regad</h1>
                <h2 className="font-caption text-3xl font-bold dark:text-[#f5f5dc]">Student Web Developer</h2>
                <h3 className="font-caption text-xl font-bold text-[#e3ba59] dark:text-[#d9b96d] pt-4">Who I am?</h3>

            <div className="font-serif text-xl leading-relaxed mb-4 text-justify text-[#333333] dark:text-[#f5f5dc]">
                <p>
                    I am a full-stack web development student with a strong orientation toward front-end technologies.
                </p>
                <p>
                    I love crafting modern, fluid, and responsive interfaces with React and Next.js, while keeping accessibility and design in mind.
                </p>
                <p>
                    At the same time, I enjoy challenging myself on back-end development. Managing data, building APIs,
                </p>
                <p> 
                    and exploring architectures give me the opportunity to strengthen my versatility and push my skills further.
                </p>
                <p>
                    I’m curious, determined, and a sunny person who loves to joke every day 😅
                </p>
                <p>
                    I consider myself a challenger 💪 — always seeking new perspectives through stimulating and enriching projects.
                </p>
            </div>

                <p className="font-serif text-xl mb-2 text-[#e3ba59] dark:text-[#d9b96d]">My passions are:</p>
                <ul className="list-none font-serif text-xl mt-2 text-[#e3ba59] dark:text-[#d9b96d]">
                    <li>✈️ Traveling</li>
                    <li>🏋️‍♂️ Sports</li>
                    <li>🎧 Music (nothing better for escaping for a moment)</li>
                    <li>🕹️ Video games</li>
                </ul>
                <blockquote className=" font-serif text-lg italic mt-4 block text-[#e3ba59] dark:text-[#d9b96d]" aria-label="Japanese proverb">
                    "When you think you can't, try once more." - Japanese proverb 🍀
                </blockquote>
            </div>
            <div className="flex-1 mt-0">
                <img 
                    src="yohan_noir_blanc_bis2024.jpg"
                    className="h-auto rounded-3xl border-2 border-[#e3ba59] mx-auto w-[75%]"
                    alt="Yohan's portrait in black and white with a confident smile"
                    style={{ maxWidth: '90%', height: 'auto' }}
                />
            </div>
        </Section>
    );
};
