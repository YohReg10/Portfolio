import React from 'react';
import '../tree.css';
import { Section } from './section';

type Skill = {
  imgSrc: string;
  alt: string;
  title: string;
  text: string;
  side: 'left' | 'right';  // côté de la branche/boîte
  slot: 1 | 2;             // position (1 ou 2)
};

const listSkills: Skill[] = [
  {
    imgSrc: 'monitor-svgrepo-com.svg',
    alt: 'Front-end icon',
    title: 'Front-end & UI',
    text: `Je conçois des interfaces modernes avec React et Next.js, en mettant l'accent sur un design responsive et fluide.
          Les animations et l'accessibilité font partie de mes priorités pour offrir une expérience utilisateur claire et agréable.`,
    side: 'left',
    slot: 1,
  },
  {
    imgSrc: 'database-svgrepo-com.svg',
    alt: 'Back-end icon',
    title: 'Back-end & Data',
    text: `Je structure et gère des bases relationnelles (PostgreSQL, MySQL) et connecte le front au back via des API.
              L’utilisation d’ORM comme Prisma me permet de garder un code organisé, robuste et évolutif.`,
    side: 'right',
    slot: 1,
  },
  {
    imgSrc: 'cube-1-svgrepo-com.svg',
    alt: '3D icon',
    title: '3D & Visualisation',
    text: `Grâce à Three.js et VTKLoader, j’intègre et manipule des modèles 3D interactifs directement dans le navigateur.
              J’utilise les plans de coupe et la mise en couleur pour rendre les données visuelles plus compréhensibles.`,
    side: 'left',
    slot: 2,
  },
  {
    imgSrc: 'team-svgrepo-com.svg',
    alt: 'Collaboration icon',
    title: 'Collaboration & Méthodologie',
    text: `J’adopte un workflow clair avec GitHub (branches, PR, rebase) et applique une organisation agile pour avancer efficacement en équipe.
          La communication et le partage de connaissances sont au cœur de ma façon de travailler.`,
    side: 'right',
    slot: 2,
  },
];

export const SkillsTree: React.FC = () => {
  return (
    <Section className="flex flex-col p-5 rounded-lg mt-32 mx-auto w-[92%]">
      <h1 className="font-serif text-4xl font-bold text-center text-[#e3ba59] dark:text-[#d9b96d]">
        My Skills Tree
      </h1>

      <div className="skillsTreeWrapper">
        <div className="skillsTreeContainer">
          {/* Racine + ligne centrale */}
          <div className="skillsRoot" />
          <div className="skillsVerticalLine" />

          {/* Branches + boîtes via liste */}
          {listSkills.map((s) => (
            <React.Fragment key={s.title}>
              <div className={`skillsBranch branch-${s.side}${s.slot}`} />
              <div className={`skillsBox box-${s.side}${s.slot}`}>
                <div className="skillsBoxHeader">
                  <div className="skillsBoxIcon">
                    <img src={s.imgSrc} alt={s.alt} />
                  </div>
                  <h3 className="skillsBoxTitle">{s.title}</h3>
                </div>
                <p className="skillsBoxText font-serif text-xl tracking-tight mb-4 text-justify">
                  {s.text}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};