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
    text: `I design modern interfaces with React and Next.js, focusing on responsive and fluid design. 
          Animations and accessibility are among my priorities to provide a clear and enjoyable user experience.`,
    side: 'left',
    slot: 1,
  },
  {
    imgSrc: 'database-svgrepo-com.svg',
    alt: 'Back-end icon',
    title: 'Back-end & Data',
    text: `I structure and manage relational databases (PostgreSQL, MySQL) and connect the front end to the back end through APIs. 
          Using an ORM like Prisma allows me to keep my code organized, robust, and scalable.`,
    side: 'right',
    slot: 1,
  },
  {
    imgSrc: 'cube-1-svgrepo-com.svg',
    alt: '3D icon',
    title: '3D & Visualisation',
    text: `Thanks to Three.js and VTKLoader, I integrate and manipulate interactive 3D models directly in the browser.
          I use clipping planes and color mapping to make visual data easier to understand.`,
    side: 'left',
    slot: 2,
  },
  {
    imgSrc: 'team-svgrepo-com.svg',
    alt: 'Collaboration icon',
    title: 'Collaboration & Méthodologie',
    text: `I adopt a clear workflow with GitHub (branches, PRs, rebases) and apply agile practices to progress efficiently as a team.
          Communication and knowledge sharing are at the core of the way I work.`,
    side: 'right',
    slot: 2,
  },
];

export const SkillsTree: React.FC = () => {
  return (
    <Section id="skillsTree" className="flex flex-col p-5 rounded-lg mt-32 mx-auto w-[92%]">
      <h1 className="font-serif text-4xl font-bold text-center text-[#e3ba59] dark:text-[#d9b96d] mt-3">
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