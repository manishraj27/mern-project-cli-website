import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import CommandShowcase from "./pages/CommandShowcase";

import TheLandingPage from "./pages/TheLandingPage";
import Navbar from "./pages/NavBar";

const App=()=> {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      {/* <Hero />
      <Features />
      <CommandsPage />
      <StructurePage />
      <UsageExample />
      <Stats /> */}
      <Routes>
        <Route path="/" element={<TheLandingPage />} />
        <Route path="/command-showcase" element={<CommandShowcase />} />
      </Routes>
    </ThemeProvider>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);


export default AppWrapper;