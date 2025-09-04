import React from "react";
import Link from "next/link";
import { Section } from "./section";
import { GithubIcon } from "@/app/components/icons/GithubIcon";
import { Linkedin } from "@/app/components/icons/LinkedinIcon";

type NavItem = {
  key: string;
  label: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
  download?: boolean;
  group?: "primary" | "secondary";
};

export const FOOTER_NAV_ITEMS: NavItem[] = [
  // --- Navigation principale (affichée dans le bloc "Navigation")
  { key: "about",      label: "About Me",   href: "#about",      ariaLabel: "Go to About section",       group: "primary" },
  { key: "technos",    label: "Technologies", href: "#technos",  ariaLabel: "Go to Technologies section", group: "primary" },
  { key: "projects",   label: "Projects",   href: "#projects",   ariaLabel: "Go to Projects section",    group: "primary" },
  { key: "skillsTree", label: "Skills Tree", href: "#skillsTree", ariaLabel: "Go to Skills Tree section", group: "primary" },

  // --- Entrées utiles déjà prêtes (tu peux les afficher ailleurs si besoin)
  { key: "experience", label: "Experience", href: "#experience", ariaLabel: "Go to Experience section",  group: "secondary" },
  { key: "contact",    label: "Contact",    href: "/contact",    ariaLabel: "Open Contact page",         group: "secondary" },
  { key: "resume",     label: "Resume (PDF)", href: "/YohanRegad_Resume.pdf", ariaLabel: "Open resume PDF", external: true, download: true, group: "secondary" },
  { key: "demos",      label: "3D Demos",   href: "#demos",      ariaLabel: "Go to 3D demos section",    group: "secondary" },
  { key: "faq",        label: "FAQ",        href: "#faq",        ariaLabel: "Go to FAQ section",         group: "secondary" },
  { key: "blog",       label: "Blog / Articles", href: "/blog",  ariaLabel: "Read my articles",          group: "secondary" },
];


export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const primaryNav = FOOTER_NAV_ITEMS.filter(i => i.group === "primary");

  return (
    <Section className="px-6 py-12">
      <footer
        aria-label="Site footer"
        role="contentinfo"
        className="text-neutral-300 text-center text-sm border-t-2 border-[#e3ba59]/20 dark:border-[#e3ba59]/30 pt-16"
      >
        {/* Container */}
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_98px_1fr_1fr] pl-24">
          {/* Identité */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold font-serif text-[#e3ba59] -mt-0.5">Yohan Regad</h2>
            <p className="mt-3 text-lg font-serif text-[#333333] dark:text-[#f5f5dc]">
              Web developer who loves challenges and exploring innovative solutions.
            </p>
          </div>

          {/* Navigation (data-driven) */}
          <nav aria-label="Footer navigation" className="flex flex-col">
            <h3 className="text-xl font-semibold font-serif mb-3 text-[#e3ba59]">Navigation</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              {primaryNav.map(item => (
                <li key={item.key}>
                  {item.external ? (
                    <a
                      href={item.href}
                      aria-label={item.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.download}
                      className="font-serif text-base text-[#333333] dark:text-[#f5f5dc] transition-colors hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      aria-label={item.ariaLabel}
                      className="font-serif text-base text-[#333333] dark:text-[#f5f5dc] transition-colors hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Séparateur vertical */}
          <div className="hidden lg:block w-[2px] h-full bg-[#e3ba59]/20 dark:bg-[#e3ba59]/30 ml-0 mr-auto" />

          {/* Contact */}
          <div className="flex flex-col lg:pr-20">
            <h3 className="text-xl font-semibold font-serif mb-3 text-[#e3ba59]">Contact</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li>
                <a
                  href="mailto:contact@yohanregad.dev"
                  className="font-serif transition-colors text-base text-[#333333] dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                >
                  yohan.regad@hotmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-serif transition-colors text-base text-[#333333] dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                >
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col items-center lg:items-start lg:pl-14">
            <h3 className="text-xl font-semibold font-serif mb-3 text-[#e3ba59]">Follow me</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/YohReg10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-transform hover:scale-110 focus-visible:scale-110 text-[#333333] dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59]"
              >
                <GithubIcon size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/yohan-regad-4b44132b5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform hover:scale-110 focus-visible:scale-110 text-[#333333] dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59]"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-20 text-center text-base text-[#333333] dark:text-[#f5f5dc] border-top border-t-2 border-[#e3ba59]/20 dark:border-[#e3ba59]/30 pt-4">
          © {year} Yohan Regad – All rights reserved.
        </div>
      </footer>
    </Section>
  );
};
