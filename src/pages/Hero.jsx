import { ArrowRight, Package, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import SparklesText from "@/components/ui/sparkles-text";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Hero = () => {
  return (
    <section id="hero" aria-label="hero section">
      <div className="relative min-h-[700px] w-full overflow-hidden rounded-lg bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Announcement Banner */}
          <div className="z-10 pt-32 flex justify-center">
            <div className="group rounded-full border border-black/5 bg-neutral-100 transition-all hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 text-sm text-neutral-900 dark:text-neutral-200">
                <span>✨ Say goodbye to MERN setup headaches!</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 mx-auto max-w-5xl pt-8 pb-24 text-center">
            <h1 className="bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              MERN Project Generator{" "}
              <SparklesText className="text-color-2" text="CLI" />
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-semibold">
              Simplify MERN stack development with a powerful CLI that handles
              production-ready project setups, plus additional commands designed
              to streamline your workflow.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <RainbowButton size="lg" className="gap-2 w-full sm:w-auto"
              onClick={() => window.open("https://www.npmjs.com/package/mern-project-cli", "_blank")}
              >
                <Package className="h-4 w-4" />
                View on NPM
              </RainbowButton>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto"
              onClick={() => window.open("https://github.com/manishraj27/mern-project-cli", "_blank")}
              >
                <Github className="h-4 w-4" />
                Star on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;