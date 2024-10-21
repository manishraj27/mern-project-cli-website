
import { ArrowRight, Command } from "lucide-react";
import Heading from "@/components/ui/Heading";
import { Card, CardContent } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";

const TerminalWindow = ({ title, commands }) => (
  <Card className="group overflow-hidden bg-neutral-950 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
    <div className="border-b border-neutral-800 bg-neutral-900 p-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-neutral-400">{title}</div>
        <div className="w-16"></div>
      </div>
    </div>
    <CardContent className="p-0">
      <div className="font-mono text-sm">
        {commands.map((cmd, index) => (
          <div key={index} className="border-b border-neutral-800 last:border-0">
            <div className="space-y-2 p-4">
              <div className="flex items-center space-x-2 text-green-400">
                <span>$</span>
                <span>{cmd.command}</span>
              </div>
              {cmd.output && (
                <div className="text-neutral-400">
                  {cmd.output}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const UsageExample = () => {
  const blogExample = {
    title: "Creating a Blog with MERN CLI",
    commands: [
      {
        command: "devcli create mern-blog",
        output: "✓ Creating MERN project: mern-blog\n✓ Installing dependencies\n✓ Project setup complete!"
      },
      {
        command: "devcli mongoose-schema BlogPost title:String content:String author:String",
        output: "✓ Generated BlogPost schema\n✓ Created API routes"
      },
      {
        command: "devcli mongodb-connect --p mern-blog-db",
        output: "✓ Connected to MongoDB\n✓ Database: mern-blog-db"
      }
    ]
  };

  return (
    <section 
      id="examples" 
      aria-label="usage-section"
      className="relative py-16 sm:py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
            <Heading title="Usage Story" />
          <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Create a full-stack MERN blog in minutes with just a few commands.
            <br />
            <span className="text-purple-500">
              Check out our showcase page for more complex examples!
            </span>
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <TerminalWindow 
            title={blogExample.title} 
            commands={blogExample.commands} 
          />
          
          <div className="mt-8 flex justify-center">
            <Card className="border-none bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
              <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
                Your blog project is ready for development!     
              </p>
            </Card>
            <RainbowButton className="ml-4"
            onClick={() => window.location.href = "/command-showcase"}>
            
                <Command />
                Show All Availabe Commands
                <ArrowRight />
                </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageExample;