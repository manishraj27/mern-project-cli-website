import Heading from "@/components/ui/Heading";
import CLICommandDesc from "./CLICommandDesc";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, Command } from "lucide-react";
import PulsatingButton from "@/components/ui/pulsating-button";

const commandList = {
  initial: [
    {
      command: "devcli create <project_name>",
      description: "Creates a new MERN project with the given project name.",
    },
  ],
  backend: [
    {
      command: "devcli mongodb-connect",
      description:
        "Automatically connects your project to a local MongoDB instance.",
    },
    {
      command: "devcli mongodb-connect --p customDBName",
      description: "Connects your MongoDB instance with a custom project name.",
    },
    {
      command:
        "devcli mongoose-schema <schema_name> <field1>:<type> <field2>:<type> ...",
      description:
        "Generates a Mongoose schema with the given schema name and fields.",
    },
  ],
  frontend: [
    {
      command: "devcli add-redux --init",
      description: "Adds Redux to your project with initial setup.",
    },
    {
      command: "devcli add-redux --slice <sliceName> ",
      description: "Adds a Redux slice with the given slice name.",
    },
    {
      command:
        'devcli add-redux --slice <slice_name> --actions="action1,action2"',
      description: "Adds a Redux action to the specified slice.",
    },
    {
      command:
        'devcli add-redux --slice <slice_name> --state="field1:type,field2:type"',
      description: "Adds a Redux state to the specified slice.",
    },
  ],
};

const Commands = () => {
  return (
    <section
      id="commands"
      aria-label="commands-section"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-12">
          <Heading title="CLI Commands" />
        </div>

        {/* Initial Setup Commands */}
        <div className="mb-12">
          <h3 className="text-2xl text-center font-semibold mb-6">
            Project Setup
          </h3>
          <div className="max-w-2xl mx-auto">
            <CLICommandDesc commands={commandList.initial} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Backend Commands */}
          <div>
            <h3 className="text-2xl text-center font-semibold mb-6">
              Backend Commands
            </h3>
            <CLICommandDesc commands={commandList.backend} />
          </div>

          {/* Frontend Commands */}
          <div>
            <h3 className="text-2xl text-center font-semibold mb-6">
              Frontend Commands
            </h3>
            <CLICommandDesc commands={commandList.frontend} />
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <PulsatingButton
            className="mt-4 md:mt-0 md:ml-4 w-full md:w-auto flex justify-center items-center group relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => (window.location.href = "/command-showcase")}
            pulseColor="255, 99, 71" // RGB for pulsing waves (e.g., red-orange color)
          >
            <div className="flex items-center space-x-3">
              <Command className="w-5 h-5 text-white" />
              <span className="text-lg">Show All Available Commands</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>

            {/* Glowing Border Effect */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 blur-lg group-hover:opacity-100 transition-opacity duration-300"></span>
          </PulsatingButton>
        </div>


      </div>

    </section>
  );
};

export default Commands;
