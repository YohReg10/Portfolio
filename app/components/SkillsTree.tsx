import React from 'react';
import '../tree.css';
import { Section } from './section';

export const SkillsTree = () => {
  return (
    <Section className="flex flex-col p-5 rounded-lg mt-32 mx-auto w-[92%]">
      <h1 className="font-serif text-4xl font-bold text-center text-[#e3ba59] dark:text-[#d9b96d]">
        My Skills Tree
      </h1>

      <div className="skillsTreeWrapper">
        <div className="skillsTreeContainer">
          {/* Racine */}
          <div className="skillsRoot" />

          {/* Ligne verticale */}
          <div className="skillsVerticalLine" />

          {/* Branche 1 + boîte */}
          <div className="skillsBranch branch-left1" />
          <div className="skillsBox box-left1">
            <div className="skillsBoxHeader">
              <div className="skillsBoxIcon">
                <img src="monitor-svgrepo-com.svg" alt="Front-end icon" />
              </div>
              <h3 className="skillsBoxTitle">Front-end & UI</h3>
            </div>
            <p className="skillsBoxText font-serif text-xl tracking-tight mb-4 text-justify">
              Je conçois des interfaces modernes avec React et Next.js, en mettant l'accent sur un design responsive et fluide.
              Les animations et l'accessibilité font partie de mes priorités pour offrir une expérience utilisateur claire et agréable.
            </p>
          </div>
            
          {/* Branche 2 + boîte */}
          <div className="skillsBranch branch-right1" />
          <div className="skillsBox box-right1">
            <div className="skillsBoxHeader">
              <div className="skillsBoxIcon">
                <img src="database-svgrepo-com.svg" alt="Back-end icon" />
              </div>
              <h3 className="skillsBoxTitle">Back-end & Data</h3>
            </div>
            <p className="skillsBoxText font-serif text-xl tracking-tight mb-4 text-justify">
              Je structure et gère des bases relationnelles (PostgreSQL, MySQL) et connecte le front au back via des API.
              L’utilisation d’ORM comme Prisma me permet de garder un code organisé, robuste et évolutif.
            </p>
          </div>

          {/* Branche 3 + boîte */}
          <div className="skillsBranch branch-left2" />
          <div className="skillsBox box-left2">
            <div className="skillsBoxHeader">
              <div className="skillsBoxIcon">
                <img src="cube-1-svgrepo-com.svg" alt="3D icon" />
              </div>
              <h3 className="skillsBoxTitle">3D & Visualisation</h3>
            </div>
            <p className="skillsBoxText font-serif text-xl tracking-tight mb-4 text-justify">
              Grâce à Three.js et VTKLoader, j’intègre et manipule des modèles 3D interactifs directement dans le navigateur.
              J’utilise les plans de coupe et la mise en couleur pour rendre les données visuelles plus compréhensibles.
            </p>
          </div>

          {/* Branche 4 + boîte */}
          <div className="skillsBranch branch-right2" />
          <div className="skillsBox box-right2">
            <div className="skillsBoxHeader">
              <div className="skillsBoxIcon">
                <img src="team-svgrepo-com.svg" alt="Collaboration icon" />
              </div>
              <h3 className="skillsBoxTitle">Collaboration & Méthodologie</h3>
            </div>
            <p className="skillsBoxText font-serif text-xl tracking-tight mb-4 text-justify">
              J’adopte un workflow clair avec GitHub (branches, PR, rebase) et applique une organisation agile pour avancer efficacement en équipe.
              La communication et le partage de connaissances sont au cœur de ma façon de travailler.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
