import CommandsPage from "./CommandsPage";
import Features from "./Features";
import Hero from "./Hero";
import Stats from "./Stats";
import StructurePage from "./StructurePage";
import UsageExample from "./UsageExample";

const TheLandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <CommandsPage />
      <StructurePage />
      <UsageExample />
      <Stats />
    </>
  );
};

export default TheLandingPage;
