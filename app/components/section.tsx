import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const section = (props: PropsWithChildren<{className?: string}>) => {
  return (
    <section className={cn("max-w-3xl px-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
};



