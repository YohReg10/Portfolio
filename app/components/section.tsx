import { cn } from "@/lib/utils";
import { PropsWithChildren, HTMLAttributes } from "react";

type SectionProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section className={cn("w-full px-4 m-auto", className)} {...props}>
      {children}
    </section>
  );
};