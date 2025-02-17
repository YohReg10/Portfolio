// Introduction du site

import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section className="flex justify-between items-start max-lg:flex-col mt-20 mx-auto">
    <div className="flex-[2] ml-20">
        <h2 className="font-caption text-4xl font-bold text-[#e3ba59] dark:text-[#d9b96d]">Yohan Regad</h2>
        <h3 className="font-caption text-3xl font-bold text-[#] dark:text-[#f5f5dc]">Student Web Developer</h3>
        <h4 className="font-caption text-xl font-bold text-[#e3ba59] dark:text-[#d9b96d]">Who I am?</h4>

        <p className="font-serif text-lg leading-relaxed mb-4 text-justify text-[#333333] dark:text-[#e0e0e0]">
            My name is Yohan Regad👽 <br />
            I am a development student who has completed my training and is looking for an internship to further enhance my skills. <br />
            I specialize in back-end development because managing and manipulating data is what excites me the most!<br />
            I am curious, determined, and a sunny person who loves to joke every day! 😄<br />
            I consider myself a challenger because I love taking on challenges. That’s why I am always seeking new perspectives through stimulating and enriching projects. 💪 
        </p>
        <p className="font-serif text-lg mb-2 text-[#e3ba59] dark:text-[#d9b96d]">My passions are:</p>
        <ul className="list-none mt-2 text-[#e3ba59] dark:text-[#d9b96d]">
            <li>✈️ Traveling</li>
            <li>🏋️‍♂️ Sports</li>
            <li>🎧 Music (nothing better for escaping for a moment)</li>
            <li>🕹️ Video games</li>
        </ul>
        <span className="italic mt-4 block text-[#e3ba59] dark:text-[#d9b96d]" > "When you think you can't, try once more."</span> - Japanese proverb 🍀
    </div>
    <div className="flex-1 mt-0">
        <img 
            src="yohan_noir_blanc_bis2024.jpg"
            className="w-[70%] h-auto rounded-3xl border-2 border-[#e3ba59] mx-auto"
            alt="Yohan's portrait"
            style={{ maxWidth: '90%', height: 'auto' }}
        />
    </div>
</Section>
    );
};
