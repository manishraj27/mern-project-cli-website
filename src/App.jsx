import { ThemeProvider } from './components/ThemeProvider'
import Commands from './pages/Commands'
import Features from './pages/Features'
import Hero from './pages/Hero'
import Installation from './pages/Installation'
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
     <Installation/>
     <Commands/>
    </ThemeProvider>
    </>
  )
}

export default App
