import React from "react";
import Link from "next/link";
import { Section } from "./section";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Section className="mt-32 px-6 py-12">
      <footer aria-label="Site footer" role="contentinfo" className="text-neutral-300">
        {/* Container */}
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Identité */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-pink-700 dark:text-yellow-400">Yohan Regad</h2>
            <p className="mt-3 text-lg">
              Front-end developer passionate about 3D & interactive design
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3 text-[#e3ba59]">Navigation</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><Link href="#about" className="transition-colors hover:text-[#e3ba59] focus-visible:text-[#e3ba59]">About Me</Link></li>
              <li><Link href="#skillsTree" className="transition-colors hover:text-[#e3ba59] focus-visible:text-[#e3ba59]">Skills Tree</Link></li>
              <li><Link href="#projects" className="transition-colors hover:text-[#e3ba59] focus-visible:text-[#e3ba59]">Projects</Link></li>
              <li><Link href="#technos" className="transition-colors hover:text-[#e3ba59] focus-visible:text-[#e3ba59]">Technologies</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3 text-[#e3ba59]">Contact</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li>
                <a
                  href="mailto:contact@yohanregad.dev"
                  className="transition-colors hover:text-[#e3ba59] focus-visible:text-[#e3ba59]"
                >
                  contact@yohanregad.dev
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#e3ba59] focus-visible:text-[#e3ba59]"
                >
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3 text-[#e3ba59]">Follow me</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ton-profil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-[#e3ba59] focus-visible:text-[#e3ba59]"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ton-profil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#e3ba59] focus-visible:text-[#e3ba59]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 text-center text-sm border-t border-neutral-800 pt-4">
          © {year} Yohan Regad – All rights reserved.
        </div>
      </footer>
    </Section>
  );
};
