import { Package, Terminal, Zap } from "lucide-react";

const Features = () => {
  const featureItems = [
    {
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      title: "Lightning Fast Setup",
      description: "Generate complete MERN projects in seconds with a single command",
    },
    {
      icon: <Terminal className="h-5 w-5 text-green-500" />,
      title: "Production Ready",
      description: "Pre-configured with best practices and optimal folder structure",
    },
    {
      icon: <Package className="h-5 w-5 text-blue-500" />,
      title: "Zero Config",
      description: "MongoDB integration and environment setup, right out of the box",
    },
  ];

  return (
    <section 
      id="features" 
      aria-label="features-section"
      className=" py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Features
        </h2> */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;