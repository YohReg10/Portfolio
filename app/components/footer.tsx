import React from "react";
import Link from "next/link";
import { Section } from "./section";
import { GithubIcon } from "@/app/components/icons/GithubIcon";
import { Linkedin } from "@/app/components/icons/LinkedinIcon";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Section className="px-6 py-12">
        <footer
            aria-label="Site footer"
            role="contentinfo"
            className="text-neutral-300 text-center text-sm border-t-2 border-[#e3ba59]/20  dark:border-[#e3ba59]/30 pt-16"
        >

            {/* Container */}
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_98px_1fr_1fr] pl-24">
                
            {/* Identité */}
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold font-serif text-[#e3ba59] -mt-0.5">
                Yohan Regad
                </h2>
                <p className="mt-3 text-lg font-serif text-[#333333] dark:text-[#f5f5dc]">
                Web developer who loves challenges and exploring innovative
                solutions.
                </p>
            </div>

            {/* Navigation */}
            <nav aria-label="Footer navigation" className="flex flex-col">
                <h3 className="text-xl font-semibold font-serif mb-3 text-[#e3ba59]">
                    Navigation
                </h3>
                <ul className="list-none p-0 m-0 space-y-2">
                    <li>
                        <Link
                        href="#about"
                        className="font-serif text-base text-[#333333] dark:text-[#f5f5dc] transition-colors hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                        >
                        About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="#technos"
                        className="font-serif text-base text-[#333333] dark:text-[#f5f5dc] transition-colors hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                        >
                        Technologies
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="#projects"
                        className="font-serif text-base text-[#333333] dark:text-[#f5f5dc] transition-colors hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                        >
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="#skillsTree"
                        className="font-serif text-base text-[#333333] dark:text-[#f5f5dc] transition-colors hover:text-[#e3ba59] dark:hover:text-[#e3ba59] focus-visible:text-[#e3ba59] dark:focus-visible:text-[#e3ba59]"
                        >
                        Skills Tree
                        </Link>
                    </li>
                </ul>
            </nav>
            
            {/* Séparateur vertical */}
            <div className="hidden lg:block w-[2px] h-full bg-[#e3ba59]/20 dark:bg-[#e3ba59]/30 ml-0 mr-auto" />


            {/* Contact */}
            <div className="flex flex-col lg:pr-20">
                <h3 className="text-xl font-semibold font-serif mb-3 text-[#e3ba59]">
                    Contact
                </h3>
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
                <h3 className="text-xl font-semibold font-serif mb-3 text-[#e3ba59]">
                    Follow me
                </h3>
                <div className="flex gap-6">
                    <a
                    href="https://github.com/YohReg10"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="
                    transition-transform hover:scale-110
                    focus-visible:scale-110 text-[#333333]
                    dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59]"            
                    >
                    <GithubIcon size={32}/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/yohan-regad-4b44132b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="
                    transition-transform hover:scale-110
                    focus-visible:scale-110 text-[#333333]
                    dark:text-[#f5f5dc] hover:text-[#e3ba59] dark:hover:text-[#e3ba59]"                  >
                    <Linkedin size={32}/>
                    </a>
                    </div>
                </div>
            </div>

            {/* Bas du footer */}
            <div className="mt-20 text-center text-base text-[#333333] dark:text-[#f5f5dc] border-t-2 border-[#e3ba59]/20  dark:border-[#e3ba59]/30 pt-4">
                © {year} Yohan Regad – All rights reserved.
            </div>
        </footer>
    </Section>
  );
};
