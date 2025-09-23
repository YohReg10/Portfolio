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
  { key: "about",      label: "About Me",     href: "#about",      ariaLabel: "Go to About section",        group: "primary" },
  { key: "technos",    label: "Technologies", href: "#technos",    ariaLabel: "Go to Technologies section", group: "primary" },
  { key: "projects",   label: "Projects",     href: "#projects",    ariaLabel: "Go to Projects section",     group: "primary" },
  { key: "skillsTree", label: "Skills Tree",  href: "#skillsTree",  ariaLabel: "Go to Skills Tree section",  group: "primary" },
  { key: "experience", label: "Experience",   href: "#experience",  ariaLabel: "Go to Experience section",   group: "secondary" },
  { key: "contact",    label: "Contact",      href: "/contact",     ariaLabel: "Open Contact page",          group: "secondary" },
  { key: "resume",     label: "Resume (PDF)", href: "/YohanRegad_Resume.pdf", ariaLabel: "Open resume PDF", external: true, download: true, group: "secondary" },
  { key: "demos",      label: "3D Demos",     href: "#demos",       ariaLabel: "Go to 3D demos section",     group: "secondary" },
  { key: "faq",        label: "FAQ",          href: "#faq",         ariaLabel: "Go to FAQ section",          group: "secondary" },
  { key: "blog",       label: "Blog / Articles", href: "/blog",     ariaLabel: "Read my articles",           group: "secondary" },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const primaryNav = FOOTER_NAV_ITEMS.filter(i => i.group === "primary");

  return (
    <Section className="px-6 py-12">
      <footer
        aria-label="Site footer"
        role="contentinfo"
        className="text-neutral-300 text-center text-sm border-t-2 border-[#e3ba59]/20 dark:border-[#e3ba59]/30 pt-16 overflow-x-hidden"
      >
        {/* Container */}
        <div
          className={[
            "max-w-[1800px] mx-auto grid grid-cols-1 gap-8 items-center",
            "max-[390px]:px-4 max-[390px]:gap-6",
            "md:grid-cols-[1.25fr_1fr_auto_1fr_1fr] md:auto-rows-min md:gap-x-8 md:gap-y-0 md:px-6 md:items-start md:text-left",
            "lg:grid-cols-[1.10fr_1fr_98px_1fr_1fr] lg:pl-24"
          ].join(" ")}
        >
          {/* Identité */}
          <div className="flex flex-col items-center md:items-start md:col-start-1 md:max-w-[420px] md:pr-6">
            <h2 className="font-serif font-bold text-[#e3ba59] -mt-0.5 text-2xl md:text-2xl lg:text-3xl">
              Yohan Regad
            </h2>
            <p className="mt-3 font-serif text-[#333333] dark:text-[#f5f5dc] text-base md:text-base lg:text-lg leading-relaxed">
              Web developer who loves challenges and exploring innovative solutions.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-col items-center md:items-start md:col-start-2 md:pr-8 lg:ml-16">
            <h3 className="font-serif font-semibold mb-3 text-[#e3ba59] text-lg md:text-lg lg:text-xl">
              Navigation
            </h3>
            <ul className="list-none p-0 m-0 space-y-2">
              {primaryNav.map(item => (
                <li key={item.key} className="text-center md:text-left touch-manipulation">
                  {item.external ? (
                    <a
                      href={item.href}
                      aria-label={item.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.download}
                      className="font-serif text-[0.95rem] md:text-[0.98rem] lg:text-base text-[#333333] dark:text-[#f5f5dc] transition-colors hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      aria-label={item.ariaLabel}
                      className="font-serif text-[0.95rem] md:text-[0.98rem] lg:text-base text-[#333333] dark:text-[#f5f5dc] transition-colors hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Séparateur vertical */}
          <div className="hidden md:block w-[2px] h-full bg-[#e3ba59]/20 dark:bg-[#e3ba59]/30 absolute left-[calc(1.25fr+1rem)] top-0 bottom-0 md:relative md:left-auto md:ml-0 md:mr-4" />
          {/* Contact */}
          <div className="flex flex-col items-center md:items-start md:col-start-4 md:pr-4 lg:pr-20 lg:ml-16">
                <h3 className="font-serif font-semibold mb-3 text-[#e3ba59] text-lg md:text-lg lg:text-xl">
              Contact
            </h3>
            <ul className="list-none p-0 m-0 space-y-2">
              <li className="text-center md:text-left touch-manipulation">
                <a
                  href="mailto:contact@yohanregad.dev"
                  className="font-serif transition-colors text-[0.95rem] md:text-[0.98rem] lg:text-base text-[#333333] dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                >
                  yohan.regad@hotmail.com
                </a>
              </li>
              <li className="text-center md:text-left touch-manipulation">
                <Link
                  href="/contact"
                  className="font-serif transition-colors text-[0.95rem] md:text-[0.98rem] lg:text-base text-[#333333] dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                >
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-col items-center md:items-start md:col-start-5 md:row-start-1 md:self-start md:mt-0 lg:col-start-auto lg:row-start-auto lg:pl-14 lg:ml-16">
            <h3 className="font-serif font-semibold mb-3 text-[#e3ba59] text-lg md:text-lg lg:text-xl">
              Follow me
            </h3>
            <div className="flex gap-5 justify-center md:justify-start">
              <a
                href="https://github.com/YohReg10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-transform hover:scale-110 focus-visible:scale-110 text-[#333333] dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59] touch-manipulation"
              >
                <GithubIcon size={28} className="md:h-8 md:w-8" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yohan-regad-4b44132b5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform hover:scale-110 focus-visible:scale-110 text-[#333333] dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59] touch-manipulation"
              >
                <Linkedin size={28} className="md:h-8 md:w-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-16 max-[390px]:mt-12 text-center text-[0.95rem] md:text-[0.98rem] lg:text-base text-[#333333] dark:text-[#f5f5dc] border-t-2 border-[#e3ba59]/20 dark:border-[#e3ba59]/30 pt-4">
          © {year} Yohan Regad – All rights reserved.
        </div>
      </footer>
    </Section>
  );
};
