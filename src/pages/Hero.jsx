import { ArrowRight, Package, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import SparklesText from "@/components/ui/sparkles-text";
import CLICommandDisplay from "../components/ui/CLICommandDisplay";

const Hero = () => {
  return (
    <section id="hero" aria-label="hero section">
      <div className="relative min-h-[700px] w-full overflow-hidden rounded-lg bg-background px-4 md:shadow-xl">
        {/* Announcement Banner */}
        <div className="z-10 pt-8 flex justify-center">
          <div className="group rounded-full border border-black/5 bg-neutral-100 transition-all hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 text-sm text-neutral-900 dark:text-neutral-200">
              <span>✨ Say goodbye to MERN setup headaches!</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-5xl pt-8 pb-24 text-center px-4">
          <h1 className="bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            MERN Project Generator{" "}
            <SparklesText className="text-color-2" text="CLI" />
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Simplify MERN stack development with a powerful CLI that handles
            production-ready project setups, plus additional commands designed
            to streamline your workflow.
          </p>

          <CLICommandDisplay
            commands={["npm install -g mern-project-cli", "devcli --help"]}
          />

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 px-4">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Package className="h-4 w-4" />
              View on NPM
            </Button>
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <Github className="h-4 w-4" />
              Star on GitHub
            </Button>
          </div>
        </div>

        {/* Background Pattern */}
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-50"
          )}
        />
      </div>
    </section>
  );
};

export default Hero;