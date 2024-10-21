import Heading from "@/components/ui/Heading";
import CLICommandDesc from "./CLICommandDesc";

// Sample commands with descriptions
const commandList = [
  {
    command: 'devcli create <project_name>',
    description: 'Creates a new MERN project with the given project name.',
  },
  {
    command: 'npm run dev',
    description: 'Runs the backend server in development mode.',
  },
  {
    command: 'cd ../frontend',
    description: 'Navigates to the frontend directory of your project.',
  },
  {
    command: 'npm start',
    description: 'Starts the React frontend in development mode.',
  },
  {
    command: 'devcli mongodb-connect',
    description: 'Automatically connects your project to a local MongoDB instance.',
  },
  {
    command: 'devcli mongodb-connect --p customDBName',
    description: 'Connects your MongoDB instance with a custom project name.',
  },
];

const Commands = () => {
  return (
    <section
      id="commands"
      aria-label="commands-section"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-12">
          <Heading title="CLI Commands" />
        </div>
        <CLICommandDesc commands={commandList}/>
        {/* <CLICommandDisplay commands={commandList} /> */}
      </div>
    </section>
  );
};

export default Commands;
