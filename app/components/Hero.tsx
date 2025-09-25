import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section id="about" className="flex flex-col lg:flex-row justify-between items-start max-lg:flex-col mt-12 lg:mt-20 mx-auto"
            aria-labelledby="hero-title">

            {/* Image en haut sur mobile/iPad */}
            <div className="flex justify-center w-full lg:hidden mb-6">
                <img
                    src="yohan_noir_blanc_bis2024.jpg"
                    className="
                        h-auto rounded-3xl border-2 border-[#e3ba59]
                        /* Mobile (par défaut) */
                        w-[75%]
                        /* iPad (>= 768px) */
                        md:w-[44%]  
                    "
                    alt="Yohan's portrait in black and white with a confident smile"
                />
            </div>

            {/* Contenu texte */}
            <div className="flex-[2] w-full lg:w-auto text-center lg:text-left lg:ml-20">
                <h1 id="hero-title" className="font-caption text-3xl lg:text-4xl font-bold text-[#e3ba59] dark:text-[#d9b96d]">Yohan Regad</h1>
                <h2 className="font-caption text-2xl lg:text-3xl font-bold dark:text-[#f5f5dc]">Student Web Developer</h2>
                <h3 className="font-caption text-xl font-bold text-[#e3ba59] dark:text-[#d9b96d] pt-4">Who I am?</h3>
                <div className="font-serif text-lg lg:text-xl leading-relaxed mb-4 text-justify mx-auto lg:mx-0 max-w-prose">
                    <p>
                        I am a full-stack web development student with a strong orientation toward front-end technologies.
                    </p>
                    <p>
                        I love crafting modern, fluid, and responsive interfaces with React and Next.js, while keeping accessibility and design in mind.
                    </p>
                    <p>
                        At the same time, I enjoy challenging myself on back-end development. Managing data, building APIs
                        and exploring architectures give me the opportunity to strengthen my versatility and push my skills further.

                    </p>
                    <p>
                        I’m curious, determined, and a sunny person who loves to joke every day 😅
                    </p>
                    <p>
                        I consider myself a challenger 💪 — always seeking new perspectives through stimulating and enriching projects.
                    </p>
                </div>
                <p className="font-serif text-lg lg:text-xl mb-2 text-[#e3ba59] dark:text-[#d9b96d]">My passions are:</p>
                <ul className="list-none font-serif text-lg lg:text-xl mt-2 text-[#e3ba59] dark:text-[#d9b96d]">
                    <li>✈️ Traveling</li>
                    <li>🏋️‍♂️ Sports</li>
                    <li>🎧 Music (nothing better for escaping for a moment)</li>
                    <li>🕹️ Video games</li>
                </ul>
                <blockquote className="font-serif text-base lg:text-lg italic mt-4 block text-[#e3ba59] dark:text-[#d9b96d]" aria-label="Japanese proverb">
                    "When you think you can't, try once more." - Japanese proverb 🍀
                </blockquote>
            </div>

            {/* Image à droite sur MacBookPro */}
            <div className="hidden lg:flex flex-1 mt-0">
                <img
                    src="yohan_noir_blanc_bis2024.jpg"
                    alt="Yohan's portrait in black and white with a confident smile"
                    className="
                         h-auto rounded-3xl border-2 border-[#e3ba59]

                        /* tailles desktop génériques */
                        lg:w-[68%]
                        xl:w-[60%]
                        2xl:w-[75%]
                        max-w-[680px]

                        /* MacBook Pro-like (inclut 1440×900) */
                        min-[1366px]:max-[1536px]:!w-[85%]
                    "
                />
            </div>
        </Section>
    );
};
