import { ThemeProvider } from './components/ThemeProvider'

import CommandsPage from './pages/CommandsPage'
import Features from './pages/Features'
import Hero from './pages/Hero'

import Navbar from './pages/NavBar'
// import SaasLanding from './pages/SaasLanding'

function App() {
 

  return (
    <>
     {/* <SaasLanding /> */}
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Navbar />
     <Hero />
     <Features />
     {/* <Installation/>
     <Commands/> */}
     <CommandsPage/>
    </ThemeProvider>
    </>
  )
}

export default App
