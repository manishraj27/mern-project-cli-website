import Heading from "@/components/ui/Heading";
import CLICommandDesc from "./CLICommandDesc";
import { ArrowRight, Command } from "lucide-react";
import PulsatingButton from "@/components/ui/pulsating-button";

const essentialCommands = [
  {
    title: "Quick Start",
    commands: [
      {
        command: "devcli create <project_name>",
        description: "Create a new MERN project instantly",
      },
      {
        command: "devcli create-frontend <project_name> --shadcn",
        description: "Create a new React frontend with Shadcn UI",
      },
    ],
  },
  {
    title: "Core Features",
    commands: [
      {
        command: "devcli mongodb-connect",
        description: "Connect to MongoDB with default configuration",
      },
      {
        command: "devcli mongoose-schema <schema_name> field:type",
        description: "Generate Mongoose schema quickly",
      },
      {
        command: "devcli add-redux --init",
        description: "Add Redux to your project with initial setup",
      },
      {
        command: "devcli add-redux --slice user --actions='login,logout' --state='name:String,email:String'",
        description: "Add Redux slice with actions and state",
      },
      {
        command: "devcli init-dockerfiles",
        description: "Initialize Dockerfiles for your project",
      }
    ],
  },
];

const Commands = () => {
  return (
    <section
      id="commands"
      aria-label="commands-section"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <Heading title="Essential Commands" />
          <p className="mt-4 text-center text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Get started with these commonly used commands. Need more? Check out
            our full command reference.
          </p>
        </div>

        <div className="space-y-12">
          {essentialCommands.map((section, index) => (
            <div key={index} className="max-w-3xl mx-auto">
              <h3 className="text-2xl text-center font-semibold mb-6">
                {section.title}
              </h3>
              <CLICommandDesc commands={section.commands} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <PulsatingButton
            pulseColor="255, 99, 71"
            className="mt-4 md:mt-0 md:ml-4 w-full md:w-auto flex justify-center items-center group relative bg-gradient-to-r from-purple-500  text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => (window.location.href = "/command-showcase")}
          >
            <div className="flex items-center space-x-3">
              <Command className="w-5 h-5 text-white" />
              <span className="text-lg">Show All Available Commands</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </PulsatingButton>
        </div>
      </div>
    </section>
  );
};

export default Commands;
