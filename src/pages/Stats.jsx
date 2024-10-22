import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Users, Package, GitFork, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import NumberTicker from "@/components/ui/number-ticker";
import Heading from "@/components/ui/Heading";

const StatCard = ({ icon: Icon, value, label }) => (
  <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
    <CardContent className="p-6">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <div className="rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />
        </div>
        
        <div className="flex flex-col items-center sm:items-start">
          <span className={cn(
            "text-2xl sm:text-3xl font-bold",
            "bg-gradient-to-r from-purple-600 to-pink-600",
            "bg-clip-text text-transparent",
            "animate-in fade-in slide-in-from-bottom-1 duration-1000"
          )}>
            <NumberTicker value={value} />
          </span>
          <p className="text-xs sm:text-sm font-medium text-muted-foreground tracking-wide uppercase">
            {label}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
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
        const [npmResponse, weeklyResponse] = await Promise.all([
          fetch('https://api.npmjs.org/downloads/point/last-month/mern-project-cli'),
          fetch('https://api.npmjs.org/downloads/point/last-week/mern-project-cli')
        ]);
        const [npmData, weeklyData] = await Promise.all([
          npmResponse.json(),
          weeklyResponse.json()
        ]);

        // Fetch GitHub data
        const [githubResponse, contributorsResponse, releasesResponse] = await Promise.all([
          fetch('https://api.github.com/repos/manishraj27/mern-project-cli'),
          fetch('https://api.github.com/repos/manishraj27/mern-project-cli/contributors'),
          fetch('https://api.github.com/repos/manishraj27/mern-project-cli/releases')
        ]);
        const [githubData, contributorsData, releasesData] = await Promise.all([
          githubResponse.json(),
          contributorsResponse.json(),
          releasesResponse.json()
        ]);

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
    { icon: Download, value: stats.npmDownloads, label: "Total Downloads" },
    { icon: Star, value: stats.githubStars, label: "GitHub Stars" },
    { icon: Users, value: stats.contributors, label: "Contributors" },
    { icon: Package, value: stats.weeklyDownloads, label: "Weekly Downloads" },
    { icon: GitFork, value: stats.forks, label: "Forks" },
    { icon: Tag, value: stats.releases, label: "Releases" }
  ];

  return (
    <section 
      id="stats" 
      aria-label="stats-section"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <Heading title="Growth in Numbers" />
          <p className="text-muted-foreground mt-2">
            Track our progress and community engagement
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {statsList.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;