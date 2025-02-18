// Barre de navigation

import { buttonVariants } from "@/app/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "@/app/components/icons/GithubIcon";
import { Linkedin } from "@/app/components/icons/LinkedinIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 w-full">
      <Section className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        
        <h1 className="text-lg font-bold text-primary-foreground">yohan.com</h1>

        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/YohReg10"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 border border-[#d9b96d]"
            )}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/feed/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 border border-[#d9b96d]"
            )}
          >
            <Linkedin size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>

      <div className="absolute top-3 right-6">
        <ModeToggle className="size-9 p-0 border border-[#d9b96d]" />
      </div>
    </header>
  );
};
