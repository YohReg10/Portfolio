import { Button } from "@/components/ui/button";
import { section as Section } from "./section";

export const header = () => {
    return (
        <header className="sticky top-0">
            <Section className="flex items-baseline">
                <h1 className="text-4xl font-bold text-primary-foreground">
                yohan.com
                </h1>
                <div className="flex-1"/>
                <ul>
                    <Button className="size-6"></Button>
                </ul>
            </Section>
        </header>
    );
};