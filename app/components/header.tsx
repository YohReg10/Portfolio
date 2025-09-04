import { buttonVariants } from "@/app/components/ui/button";
import { Section } from "./section";
import { GithubIcon } from "@/app/components/icons/GithubIcon";
import { Linkedin } from "@/app/components/icons/LinkedinIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm py-4 border-b border-[#d9b96d]/20">
      <Section className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <h1 className="text-lg font-bold text-primary-foreground"></h1>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/YohReg10"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-10 mt-0.5 border border-[#d9b96d]"
            )}
          >
            <GithubIcon size={24} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yohan-regad-4b44132b5/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-10 mt-0.5 border border-[#d9b96d]"
            )}
          >
            <Linkedin size={24} className="text-foreground" />
          </Link>
        </ul>
      </Section>
      <div className="absolute top-3 right-6">
        <ModeToggle className="size-12 mt-0.5 border border-[#d9b96d]" />
      </div>
    </header>
  );
};
