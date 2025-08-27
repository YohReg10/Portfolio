import React from 'react';
import '../tree.css';
import { Section } from './section';

export const SkillsTree = () => {
  return (
    <Section className="flex flex-col gap-12 p-5 rounded-lg mt-32 mx-auto w-[92%]">
      <h1 className="font-serif text-4xl font-bold text-center text-[#e3ba59] dark:text-[#d9b96d] mb-20">
        My Skills Tree
      </h1>

      <div className="skillsTreeWrapper">
        <div className="skillsTreeContainer">
          {/* Racine */}
          <div className="skillsRoot" />

          {/* Ligne verticale */}
          <div className="skillsVerticalLine" />

          {/* Branche 1 + boîte */}
          <div className="skillsBranchLeft1">
            <div className="skillsBoxLeft1 
              bg-gradient-to-br from-[#fdf8ef] to-[#f3e2b3] 
              dark:from-[#1e1e1e] dark:to-[#3b2e1a] 
              border-4 border-[#d9b96d] text-[#333333] dark:text-[#e0e0e0]">
                
              {/* Header = icône + titre sur une ligne */}
              <div className="skillsBoxHeader">
                <div className="skillsBoxIcon bg-gradient-to-r from-[#f3e2b3] to-[#d9b96d] dark:from-[#d9b96d] dark:to-[#8c6b30]">
                  <img src="monitor-svgrepo-com.svg" alt="Front-end icon" />
                </div>
                <h3 className="skillsBoxTitle">Front-end & UI</h3>
              </div>

              <p className="skillsBoxText font-serif text-xl tracking-tight mb-4 text-justify text-[#333333] dark:text-[#e0e0e0]">
                Je conçois des interfaces modernes avec React et Next.js, en mettant l'accent sur un design responsive et fluide.
                Les animations et l'accessibilité font partie de mes priorités pour offrir une expérience utilisateur claire et agréable.
              </p>
            </div>
          </div>
            
          {/* Branche 2 + boîte */}
          <div className="skillsBranchRight1">
            <div className="skillsBoxRight1">
              {/* Zone logo */}
              <div className="skillsBoxIcon">
                <img src="database-svgrepo-com.svg" alt="Back-end icon" />
              </div>

              <h3>Back-end & Data</h3>
              <p className="skillsBoxText">
                Je structure et gère des bases relationnelles (PostgreSQL, MySQL) et connecte le front au back via des API.
                L’utilisation d’ORM comme Prisma me permet de garder un code organisé, robuste et évolutif.
              </p>
            </div>
          </div>

          {/* Branche 3 + boîte */}
          <div className="skillsBranchLeft2">
            <div className="skillsBoxLeft2">
              {/* Zone logo */}
              <div className="skillsBoxIcon">
                <img src="cube-1-svgrepo-com.svg" alt="3D icon" />
              </div>

              <h3>3D & Visualisation</h3>
              <p className="skillsBoxText">
                Grâce à Three.js et VTKLoader, j’intègre et manipule des modèles 3D interactifs directement dans le navigateur.
                J’utilise les plans de coupe et la mise en couleur pour rendre les données visuelles plus compréhensibles.
              </p>
            </div>
          </div>

          {/* Branche 4 + boîte */}
          <div className="skillsBranchRight2">
            <div className="skillsBoxRight2">
              {/* Zone logo */}
              <div className="skillsBoxIcon">
                <img src="team-svgrepo-com.svg" alt="Collaboration icon" />
              </div>

              <h3>Collaboration & Méthodologie</h3>
              <p className="skillsBoxText">
                J’adopte un workflow clair avec GitHub (branches, PR, rebase) et applique une organisation agile pour avancer efficacement en équipe.
                La communication et le partage de connaissances sont au cœur de ma façon de travailler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
