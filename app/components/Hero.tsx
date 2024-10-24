import { Section } from "./section";

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="flex-[2]">
                <h2 className="font-caption text-6xl font-bold text-primary">Yohan Regad</h2>
                <h3 className="font-caption text-4xl font-bold text-secondary">Student Web Developer</h3>
                <p className="font-serif text-xl text-gray-700 leading-relaxed">
                Je m'appelle Yohan Regad 🌟
Un étudiant en développement qui a terminé sa formation et est à la recherche d'une alternance pour poursuivre ma montée en compétences. Je me spécialise dans la partie back-end car la gestion et la manipulation de données est ce qui me stimule le plus !
Je suis curieux, déterminé et une personne solaire qui aime blaguer au quotidien ! 😄 Je me considère comme un challenger car j'adore relever des défis. C'est pourquoi je cherche toujours de nouvelles perspectives à travers des projets stimulants et enrichissants humainement parlant. 💪
Mes passions sont :
    Le voyage ✈️
    Le sport 🏋️‍♂️
    La musique 🎧 (rien de mieux que pour s'évader le temps d'un instant)
    Les jeux vidéo 🕹️

    "Lorsque vous pensez que vous ne pouvez pas, essayez une fois de plus." - Proverbe japonais 🍀
                </p>
            </div>
            <div className="flex-1">
                <img 
                    src="yohan_noir_blanc_bis2024.jpg"
                    className="w-full h-auto rounded-3xl"
                    alt="yohan picture"
                />
            </div>
        </Section>
    )
}
