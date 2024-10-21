
import Heading from "@/components/ui/Heading";
import { Card, CardContent } from "@/components/ui/card";

const CommandBlock = ({ command, description }) => (
  <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
    <CardContent className="p-6">
      <div className="flex flex-col space-y-3">
        <div className="relative rounded-lg bg-neutral-950 p-4 font-mono text-sm text-neutral-50">
          <div className="absolute top-3 left-3 flex space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          </div>
          <pre className="mt-4 text-neutral-100">{command}</pre>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </CardContent>
  </Card>
);

const CommandShowcase = () => {
  const commands = [
    {
      title: "Installation",
      steps: [
        {
          command: "npm install -g mern-project-cli",
          description: "Install the CLI tool globally on your system"
        },
        {
          command: "devcli --version",
          description: "Verify the installation by checking the CLI version"
        }
      ]
    },
    {
      title: "Project Creation",
      steps: [
        {
          command: "devcli create my-awesome-project",
          description: "Create a new MERN project with the specified name"
        },
        {
          command: "npm run dev",
          description: "Start the backend server in development mode"
        },
        {
          command: "cd ../frontend && npm start",
          description: "Navigate to frontend directory and start the React development server"
        }
      ]
    },
    {
      title: "MongoDB Integration",
      steps: [
        {
          command: "devcli mongodb-connect",
          description: "Connect to a local MongoDB instance with default configuration"
        },
        {
          command: "devcli mongodb-connect --p customDBName",
          description: "Connect MongoDB with a custom project name"
        }
      ]
    },
    {
      title: "Schema Generation",
      steps: [
        {
          command: "devcli mongoose-schema User name:String email:String age:Number",
          description: "Generate a Mongoose schema for User with specified fields and types"
        }
      ]
    }
  ];

  return (
    <section 
      id="examples" 
      aria-label="usage-section"
      className="relative py-16 sm:py-24"
    >
      {/* Background decoration */}
      

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            
            <Heading title="Commands Showcase" />
          </div>
          <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Follow these simple steps to get started with your MERN project using our CLI tool.
            Each command is designed to streamline your development workflow.
          </p>
        </div>
        
        <div className="space-y-16">
          {commands.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                {section.title}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {section.steps.map((step, stepIndex) => (
                  <CommandBlock
                    key={stepIndex}
                    command={step.command}
                    description={step.description}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandShowcase;



// import { Terminal, ArrowRight } from "lucide-react";
// import Heading from "@/components/ui/Heading";
// import { Card, CardContent } from "@/components/ui/card";

// const StepCard = ({ step, title, description, code }) => (
//   <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
//     <CardContent className="p-6">
//       <div className="flex items-start gap-4">
//         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-500 font-semibold">
//           {step}
//         </div>
//         <div className="space-y-3">
//           <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
//             {title}
//           </h3>
//           <p className="text-sm text-neutral-600 dark:text-neutral-400">
//             {description}
//           </p>
//           {code && (
//             <div className="relative mt-4 rounded-lg bg-neutral-950 p-4">
//               <pre className="text-sm font-mono text-neutral-100">
//                 {code}
//               </pre>
//             </div>
//           )}
//         </div>
//       </div>
//     </CardContent>
//   </Card>
// );

// const CommandShowcase = () => {
//   const steps = [
//     {
//       title: "Initialize Blog Project",
//       description: "Start by creating a new MERN blog project with a single command. This sets up both frontend and backend with the necessary dependencies.",
//       code: "devcli create mern-blog"
//     },
//     {
//       title: "Generate Blog Schema",
//       description: "Create the MongoDB schema for blog posts with title, content, author, and timestamp fields.",
//       code: "devcli mongoose-schema BlogPost title:String content:String author:String createdAt:Date"
//     },
//     {
//       title: "Add User Authentication",
//       description: "Set up user authentication schema and routes for your blog. The CLI automatically generates necessary models and endpoints.",
//       code: "devcli mongoose-schema User email:String password:String name:String role:String"
//     },
//     {
//       title: "Connecting Database",
//       description: "Connect your blog to MongoDB with a custom database name for better organization.",
//       code: "devcli mongodb-connect --p mern-blog-db"
//     },
//     {
//       title: "Ready to Develop",
//       description: "Your blog project is now set up with authentication, database connection, and necessary schemas. Start the development servers and begin building your features.",
//     }
//   ];

//   return (
//     <section 
//       id="examples" 
//       aria-label="usage-section"
//       className="relative py-16 sm:py-24"
//     >
//       {/* Background decoration */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-l from-purple-500/5 to-transparent blur-3xl" />
//         <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-purple-500/5 to-transparent blur-3xl" />
//       </div>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center mb-16">
//           <div className="flex items-center gap-2 mb-4">
//             <Terminal className="h-8 w-8 text-purple-500" />
//             <Heading title="Usage Story" />
//           </div>
//           <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl">
//             Let's build a full-featured blog website using our CLI tool. 
//             Follow this example to see how quickly you can set up a MERN stack blog with authentication.
//           </p>
//         </div>
        
//         <div className="relative">
//           <div className="absolute left-8 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
          
//           <div className="space-y-8">
//             {steps.map((step, index) => (
//               <div key={index} className="relative">
//                 <StepCard
//                   step={index + 1}
//                   title={step.title}
//                   description={step.description}
//                   code={step.code}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 flex justify-center">
//             <Card className="bg-purple-500/10 border-none p-6">
//               <div className="flex items-center gap-4">
//                 <p className="text-sm font-medium text-purple-500">
//                   Your blog project is now ready for development!
//                 </p>
//                 <ArrowRight className="h-4 w-4 text-purple-500" />
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommandShowcase;