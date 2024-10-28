import { Database, Settings2, Blocks, Zap, Code, Monitor, Container } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Heading from "@/components/ui/Heading";
import Marquee from "@/components/ui/marquee";

const codeSnippets = [
  {
    name: "Create Project",
    body: "devcli create my-awesome-app",
  },
  {
    name: "package.json",
    body: "\"scripts\": { \"dev\": \"nodemon server.js\" }",
  },
  {
    name: "connection.js",
    body: "mongoose.connect(process.env.MONGODB_URI)",
  },
  {
    name: ".env",
    body: "PORT=5000\nMONGODB_URI=mongodb://localhost:27017",
  },
  {
    name: "server.js",
    body: "app.use(express.json())\napp.use('/api', routes)",
  },
];

const features = [
  {
    Icon: Zap,
    name: "One Command Setup",
    description: "Generate both frontend and backend with a single command. Skip the boring setup and jump straight into building.",
    href: "#commands",
    cta: "Get Started",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {codeSnippets.map((f, idx) => (
          <figure
            key={idx}
            className="relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Blocks,
    name: "Industry-Standard Structure",
    description: "Pre-configured MVC folder structure following best practices, perfect for scalable applications.",
    href: "#structure",
    cta: "View Structure",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <div className="grid grid-cols-3 gap-4 p-4 transform transition-all duration-300 ease-out group-hover:scale-105">
          {['models', 'views', 'controllers', 'routes', 'middleware', 'utils'].map((folder) => (
            <div key={folder} className="text-xs font-mono p-2 rounded-lg bg-gray-900/10 dark:bg-gray-50/10">
              {folder}
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    Icon: Database,
    name: "MongoDB Integration",
    description: "Connect to MongoDB with zero configuration. Includes database setup and mongoose integration.",
    href: "#mongodb",
    cta: "devcli mongodb-connect",
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Monitor,
    name: "Modern Frontend Setup",
    description: "Initialize your frontend with Vite + Tailwind or ShadcN UI components. Get a beautiful, responsive UI out of the box.",
    href: "#frontend",
    cta: "devcli frontend-init",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <div className="grid grid-cols-2 gap-4 p-4 transform transition-all duration-300 ease-out group-hover:scale-105">
          {['shadcn/ui', 'tailwind', 'vite', 'components'].map((tech) => (
            <div key={tech} className="text-xs font-mono p-2 rounded-lg bg-gray-900/10 dark:bg-gray-50/10">
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    Icon: Container,
    name: "Docker Integration",
    description: "Generate production-ready Dockerfiles and docker-compose configurations with a single command.",
    href: "#docker",
    cta: "devcli docker-init",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <div className="grid grid-rows-2 gap-4 p-4 transform transition-all duration-300 ease-out group-hover:scale-105">
          {['Dockerfile', 'docker-compose.yml'].map((file) => (
            <div key={file} className="text-xs font-mono p-2 rounded-lg bg-gray-900/10 dark:bg-gray-50/10">
              {file}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    Icon: Settings2,
    name: "Pre-configured Environment",
    description: "Environment files included with sensible defaults. No more missing configurations.",
    className: "col-span-3 lg:col-span-1",
    href: "#config",
    cta: "View Config",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="grid grid-rows-3 gap-2 transform transition-all duration-300 ease-out group-hover:scale-105">
          {['.env', '.env.example'].map((file) => (
            <div key={file} className="text-xs font-mono p-2 rounded-lg bg-gray-900/10 dark:bg-gray-50/10">
              {file}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    Icon: Code,
    name: "Code Snippets for CRUD & JWT Operations",
    description: "Basic code snippets available for CRUD Operations, JWT Auth, and more.",
    href: "#code-snippets",
    cta: "View Snippets",
    className: "col-span-3 lg:col-span-1 lg:row-span-1 flex flex-col",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="grid grid-cols-1 gap-4 transform transition-all duration-300 ease-out group-hover:scale-105">
          <div className="text-xs font-mono p-2 rounded-lg bg-gray-900/10 dark:bg-gray-50/10">
            CRUD Operations
          </div>
          <div className="text-xs font-mono p-2 rounded-lg bg-gray-900/10 dark:bg-gray-50/10">
            JWT Authentication
          </div>
        </div>
      </div>
    ),
  }
];

const Features = () => {
  return (
    <section 
      id="features" 
      aria-label="features-section"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-12">
          <Heading title="Why Choose MERN CLI?" />
        </div>
        
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Features;