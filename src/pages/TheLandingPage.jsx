import GridPattern from "@/components/ui/animated-grid-pattern";
import CommandsPage from "./CommandsPage";
import Features from "./Features";
import Hero from "./Hero";
import Stats from "./Stats";
import StructurePage from "./StructurePage";
import UsageExample from "./UsageExample";
import { cn } from "@/lib/utils";

const TheLandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <CommandsPage />
      <StructurePage />
      <UsageExample />
      <Stats />
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </>
  );
};

export default TheLandingPage;
