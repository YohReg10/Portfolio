import { Section } from "./section";

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="flex-[2]" style={{ marginLeft: '8rem' }}> {/* Utilisation de style en ligne pour ajuster la marge */}
                <h2 className="font-caption text-4xl font-bold" style={{ color: '#d9b96d' }}>Yohan Regad</h2>
                <h3 className="font-caption text-3xl font-bold" style={{ color: '#f5f5dc' }}>Student Web Developer</h3>
                <h4 className="font-caption text-xl font-bold" style={{ color: '#d9b96d', marginTop: '1rem' }}>Who I am?</h4>

                <p className="font-serif text-lg" style={{ color: '#e0e0e0', lineHeight: '1.5', marginBottom: '1rem', textAlign: 'justify' }}>
                    My name is Yohan Regad👽 <br />
                    I am a development student who has completed my training and is looking for an internship to further enhance my skills. <br />
                    I specialize in back-end development because managing and manipulating data is what excites me the most!<br />
                    I am curious, determined, and a sunny person who loves to joke every day! 😄<br />
                    I consider myself a challenger because I love taking on challenges. That’s why I am always seeking new perspectives through stimulating and enriching projects. 💪 
                </p>
                <p className="font-serif text-lg" style={{ color: '#d9b96d', marginBottom: '0.5rem' }}>My passions are:</p>
                <ul className="list-none mt-2" style={{ color: '#e0e0e0' }}>
                    <li>✈️ Traveling</li>
                    <li>🏋️‍♂️ Sports</li>
                    <li>🎧 Music (nothing better for escaping for a moment)</li>
                    <li>🕹️ Video games</li>
                </ul>
                <span className="italic mt-4 block" style={{ color: '#e0e0e0' }}> "When you think you can't, try once more."</span> - Japanese proverb 🍀
            </div>
            <div className="flex-1 max-lg:w-full mt-8 ml-8">
                <img 
                    src="yohan_noir_blanc_bis2024.jpg"
                    className="w-full h-auto rounded-3xl"
                    alt="Yohan's portrait"
                    style={{ maxWidth: '70%', height: 'auto' }} // Réduit la largeur de l'image à 70%
                />
            </div>
        </Section>
    );
};
