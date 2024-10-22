import { useEffect, useState } from "react";
import Heading from "@/components/ui/Heading";
import { MagicCard } from "@/components/ui/magic-card";
import NumberTicker from "@/components/ui/number-ticker";
import { Download, Star, Users, Package, GitFork, Tag } from "lucide-react";

const StatCard = ({ icon: Icon, value, label }) => (
  <MagicCard 
    className="w-full p-8"
    gradientColor="rgba(160, 124, 254, 0.2)"
    gradientSize={300}
  >
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 p-4 transition-all duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-neutral-700 dark:text-neutral-300 transition-colors duration-300 group-hover:text-purple-500" />
      </div>
      <div className="space-y-2">
        <NumberTicker 
          value={value} 
          className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          delay={0.2}
        />
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 tracking-wide uppercase">
          {label}
        </p>
      </div>
    </div>
  </MagicCard>
);

const Stats = () => {
  const [stats, setStats] = useState({
    npmDownloads: 0,
    weeklyDownloads: 0,
    githubStars: 0,
    contributors: 0,
    forks: 0,
    releases: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch NPM data
        const npmResponse = await fetch('https://api.npmjs.org/downloads/point/last-month/mern-project-cli');
        const npmData = await npmResponse.json();

        const weeklyResponse = await fetch('https://api.npmjs.org/downloads/point/last-week/mern-project-cli');
        const weeklyData = await weeklyResponse.json();

        // Fetch GitHub data
        const githubResponse = await fetch('https://api.github.com/repos/manishraj27/mern-project-cli');
        const githubData = await githubResponse.json();

        const contributorsResponse = await fetch('https://api.github.com/repos/manishraj27/mern-project-cli/contributors');
        const contributorsData = await contributorsResponse.json();

        const releasesResponse = await fetch('https://api.github.com/repos/manishraj27/mern-project-cli/releases');
        const releasesData = await releasesResponse.json();

        // Update state with fetched stats
        setStats({
          npmDownloads: npmData.downloads,
          weeklyDownloads: weeklyData.downloads,
          githubStars: githubData.stargazers_count,
          contributors: contributorsData.length,
          forks: githubData.forks_count,
          releases: releasesData.length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const statsList = [
    { icon: Download, value: stats.npmDownloads, label: "Total NPM Downloads" },
    { icon: Star, value: stats.githubStars, label: "GitHub Stars" },
    { icon: Users, value: stats.contributors, label: "Contributors" },
    { icon: Package, value: stats.weeklyDownloads, label: "Weekly npm Downloads" },
    { icon: GitFork, value: stats.forks, label: "GitHub Forks" },
    { icon: Tag, value: stats.releases, label: "Releases" }
  ];

  return (
    <section 
      id="stats" 
      aria-label="stats-section"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-12">
          <Heading title="Growth in Numbers" />
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {statsList.map((stat) => (
            <div key={stat.label} className="flex justify-center">
              <StatCard
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
