import CLICommandDisplay from "@/components/ui/CLICommandDisplay";
import Heading from "@/components/ui/Heading";

const Installation = () => {
  // Array of commands to display in the installation section
  const commands = [
    "npm install -g mern-project-cli", 
    "devcli --version"
  ];

  return (
    <section 
      id="installation" 
      aria-label="installation-section"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading for the installation section */}
        <div className="flex justify-center items-center mb-2">
          <Heading title="Installation" />
        </div>
       
        
        {/* CLICommandDisplay component to show commands */}
        <CLICommandDisplay commands={commands} />

        {/* Additional instructions */}
        <p className="mt-8 text-center text-neutral-300">
          Run the above commands to install the CLI globally and check its version.
        </p>
      </div>
    </section>
  );
};

export default Installation;
