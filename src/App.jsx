import { ThemeProvider } from './components/ThemeProvider'
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
    </ThemeProvider>
    </>
  )
}

export default App
