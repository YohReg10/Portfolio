import React from 'react';
import '../tree.css';
import { Section } from './section';

export const SkillsTree = () => {
  return (
    <Section className="flex flex-col gap-12 p-5 rounded-lg mt-32 mx-auto w-[92%]">
            <h1 className=" font-serif text-4xl font-bold text-center text-[#e3ba59] dark:text-[#d9b96d] mb-20">
            My Skills Tree
            </h1>
      <div className="skillsTreeWrapper">
        <div className="skillsTreeContainer">
          {/* Racine */}
          <div className="skillsRoot"></div>

          {/* Ligne verticale */}
          <div className="skillsVerticalLine"></div>

          {/* Branche 1 + boîte */}
          <div className="skillsBranchLeft1">
            <div className="skillsBoxLeft1">
              <h3>Front-end & UI</h3> 
              <p className="skillsBoxText">
                Je conçois des interfaces modernes avec React et Next.js, en mettant l'accent sur un design responsive et fluide.
                Les animations et l'accessibilité font partie de mes priorités pour offrir une expérience utilisateur claire et agréable.
              </p>
            </div>
          </div>

          {/* Branche 2 + boîte */}
          <div className="skillsBranchRight1">
            <div className="skillsBoxRight1">
              <h3>Doelgroep</h3>
              <p className="skillsBoxText">
                We begrijpen dat het soms moeilijk is om je doelgroep te bepalen, hierbij kunnen wij je natuurlijk helpen. Samen gaan we onderzoeken waar jouw doelgroep zich op Instagram bevindt en hoe we dit de meest effectieve manier kunnen bereiken.
              </p>
            </div>
          </div>

          {/* Branche 3 + boîte */}
          <div className="skillsBranchLeft2">
            <div className="skillsBoxLeft2">
              <h3>Interactie</h3>
              <p className="skillsBoxText">
                Zodra je doelgroep helder is, starten we met de interactie. We zorgen voor dagelijkse likes op de laatste stories zodat je niet alleen opvalt, maar ook echt groot wordt.
              </p>
            </div>
          </div>

          {/* Branche 4 + boîte */}
          <div className="skillsBranchRight2">
            <div className="skillsBoxRight2">
              <h3>Optimalisatie</h3>
              <p className="skillsBoxText">
                Ook al weten we waar je doelgroep zich bevindt, streven we altijd naar verbetering. Door analytisch naar de resultaten te kijken, optimaliseren we onze aanpak voor nog meer effectiviteit en meer volgers.
              </p>
            </div>
          </div>
        </div>
      </div>
  </Section>
  );
};