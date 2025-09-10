"use client";

import { Section } from "./section";
import '../cards.css';
import React, { useEffect } from "react";

const listTechno = [
  { imgSrc: "react_img.svg", alt: "Logo React", name: "React", cercles: 6 },
  { imgSrc: "javascript_img.svg", alt: "Logo JavaScript", name: "JavaScript", cercles: 6 },
  { imgSrc: "mysql_img.svg", alt: "Logo MySQL", name: "MySQL", cercles: 4 },
  { imgSrc: "figma_img.svg", alt: "Logo Figma", name: "Figma", cercles: 6 },
  { imgSrc: "github_img.svg", alt: "Logo Github", name: "Github", cercles: 7 },
];

export const SectionTechno = () => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Sauvegarde des styles existants
    const prev = {
      htmlOverflowX: html.style.overflowX,
      bodyOverflowX: body.style.overflowX,
      htmlOverscrollX: (html.style as any).overscrollBehaviorX,
      bodyOverscrollX: (body.style as any).overscrollBehaviorX,
    };

    // Verrou X global
    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";
    (html.style as any).overscrollBehaviorX = "none";
    (body.style as any).overscrollBehaviorX = "none";

    // Bloque le drag horizontal (tactile)
    let startX = 0, startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      startX = t.clientX;
      startY = t.clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const dx = Math.abs(t.clientX - startX);
      const dy = Math.abs(t.clientY - startY);
      if (dx > dy) e.preventDefault(); // si geste principalement horizontal → on bloque
    };

    // Bloque le scroll latéral au trackpad/roulette
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault();
    };

    document.addEventListener("touchstart", onTouchStart, { passive: false });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      document.removeEventListener("touchstart", onTouchStart as any);
      document.removeEventListener("touchmove", onTouchMove as any);
      window.removeEventListener("wheel", onWheel as any);
      html.style.overflowX = prev.htmlOverflowX;
      body.style.overflowX = prev.bodyOverflowX;
      (html.style as any).overscrollBehaviorX = prev.htmlOverscrollX;
      (body.style as any).overscrollBehaviorX = prev.bodyOverscrollX;
    };
  }, []);

  return (
    <Section id="technos" className="flex flex-col gap-8 p-5 rounded-lg mt-32 mx-auto w-[92.5%]">
      {/* Titre */}
      <div className="w-full text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#e3ba59] dark:text-[#d9b96d] mb-12 md:mb-20">
          My Technologies
        </h1>
      </div>

      {/* iPhone (≤639px) */}
<div className="md:hidden flex flex-wrap justify-center gap-4">
  {listTechno.map((techno) => (
    <div
      key={techno.name}
      className="card mobile flex flex-col items-center"
    >
      <img src={techno.imgSrc} alt={techno.alt} className="mb-1" />
      <h3 className="font-caption dark:text-[#f5f5dc] truncate">
        {techno.name}
      </h3>
      <p className="font-caption dark:text-[#f5f5dc]">
        Expertise :
      </p>
      <div className="flex gap-0.5 expertise-circles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${
              i < techno.cercles ? "bg-[#e3ba59]" : "bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  ))}
</div>

      {/* 📲 iPad (768–1023px) : 3 + 2 centrées, tailles homogènes via .card.tablet */}
<div className="hidden md:flex lg:hidden flex-col gap-6">
  <div className="flex justify-center gap-6">
    {listTechno.slice(0, 3).map((techno) => (
      <div key={techno.name} className="card tablet">
        <img src={techno.imgSrc} alt={techno.alt} />
        <h3 className="font-caption text-center dark:text-[#f5f5dc]">{techno.name}</h3>
        <div className="flex flex-col items-center">
          <p className="font-caption dark:text-[#f5f5dc]">Expertise :</p>
          <div className="expertise-circles">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={i < techno.cercles ? "bg-[#e3ba59]" : "bg-gray-700"} />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center gap-6">
    {listTechno.slice(3).map((techno) => (
      <div key={techno.name} className="card tablet">
        <img src={techno.imgSrc} alt={techno.alt} />
        <h3 className="font-caption text-center dark:text-[#f5f5dc]">{techno.name}</h3>
        <div className="flex flex-col items-center">
          <p className="font-caption dark:text-[#f5f5dc]">Expertise :</p>
          <div className="expertise-circles">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={i < techno.cercles ? "bg-[#e3ba59]" : "bg-gray-700"} />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* 🖥️ Grand écran (≥1024px) : inchangé */}
      <div className="hidden lg:flex flex-wrap justify-between gap-8">
        {listTechno.map((techno) => (
          <div key={techno.name} className="card flex flex-col items-center w-[15%] min-w-[150px]">
            <img src={techno.imgSrc} alt={techno.alt} className="w-20 h-20" />
            <h3 className="font-caption text-[20px] dark:text-[#f5f5dc] mb-0">{techno.name}</h3>
            <p className="font-caption text-[18px] dark:text-[#f5f5dc] mb-0">Expertise :</p>
            <div className="flex gap-2 mb-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`h-3 w-3 rounded-full ${i < techno.cercles ? "bg-[#e3ba59]" : "bg-gray-700"}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
