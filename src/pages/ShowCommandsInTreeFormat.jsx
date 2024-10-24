import Heading from "@/components/ui/Heading";
import { ChevronRight } from "lucide-react";

const CommandItem = ({ command, description, indent = 0 }) => (
  <div className={`flex flex-col space-y-1 mb-4 ${indent ? 'border-l-2 border-gray-200' : ''}`}>
    <div className={`flex items-start ${indent ? 'ml-6' : ''}`}>
      {indent > 0 && <ChevronRight className="w-4 h-4 mt-1 mr-2" />}
      <div>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{command}</code>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const ShowCommandInTreeFormat = () => {
  return (
    <section
      id="commands"
      aria-label="commands-section"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-12">
          <Heading title="CLI Commands" />
        </div>

        {/* Root Command */}
        <CommandItem 
          command="devcli create <project_name>" 
          description="Creates a new MERN project with the given project name"
        />

        {/* Backend Branch */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Backend Commands</h3>
          <div className="pl-4">
            <CommandItem 
              command="devcli mongodb-connect" 
              description="Automatically connects your project to a local MongoDB instance"
              indent={1}
            />
            <CommandItem 
              command="devcli mongodb-connect --p customDBName" 
              description="Connects your MongoDB instance with a custom project name"
              indent={2}
            />
            <CommandItem 
              command="devcli mongoose-schema <schema_name> <field1>:<type> <field2>:<type> ..." 
              description="Generates a Mongoose schema with the given schema name and fields"
              indent={1}
            />
          </div>
        </div>

        {/* Frontend Branch */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Frontend Commands</h3>
          <div className="pl-4">
            <CommandItem 
              command="devcli add-redux --init" 
              description="Adds Redux to your project with initial setup"
              indent={1}
            />
            <CommandItem 
              command="devcli add-redux --slice <sliceName>" 
              description="Adds a Redux slice with the given slice name"
              indent={2}
            />
            <CommandItem 
              command="devcli add-redux --slice <slice_name> --actions='action1,action2'" 
              description="Adds Redux actions to the specified slice"
              indent={2}
            />
            <CommandItem 
              command="devcli add-redux --slice <slice_name> --state='field1:type,field2:type'" 
              description="Adds Redux state to the specified slice"
              indent={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCommandInTreeFormat;