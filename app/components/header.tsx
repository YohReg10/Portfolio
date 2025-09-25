import { buttonVariants } from "@/app/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "@/app/components/icons/GithubIcon";
import { Linkedin } from "@/app/components/icons/LinkedinIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm py-2 md:py-4 border-b border-[#d9b96d]/20">
      {/* Version mobile (380×844) */}
      <Section className="md:hidden flex items-center justify-between w-full max-w-screen-xl mx-auto px-2">
        <h1 className="text-base font-bold text-primary-foreground"></h1>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/YohReg10"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 border border-[#d9b96d]"
            )}
          >
            <GithubIcon size={20} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yohan-regad-4b44132b5/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 border border-[#d9b96d]"
            )}
          >
            <Linkedin size={20} className="text-foreground" />
          </Link>
          <ModeToggle className="size-8 border border-[#d9b96d]" />
        </div>
      </Section>

      {/* Version iPad (768×1024) */}
      <Section className="hidden md:flex lg:hidden items-center justify-between w-full max-w-screen-xl mx-auto px-4">
        <h1 className="text-lg font-bold text-primary-foreground"></h1>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/YohReg10"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-9 border border-[#d9b96d]"
            )}
          >
            <GithubIcon size={22} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yohan-regad-4b44132b5/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-9 border border-[#d9b96d]"
            )}
          >
            <Linkedin size={22} className="text-foreground" />
          </Link>
          <ModeToggle className="size-10 border border-[#d9b96d]" />
        </div>
      </Section>

      {/* Version MacBookPro (grand écran) */}
      <Section className="hidden lg:flex items-center justify-between w-full max-w-screen-xl mx-auto">
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
        <div className="absolute top-3 right-6">
          <ModeToggle className="size-12 mt-0.5 border border-[#d9b96d]" />
        </div>
      </Section>
    </header>
  );
};
