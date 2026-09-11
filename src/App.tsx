import { Navbar } from "./components/common/navbar"
import { Hero } from "./components/landing/hero"
import { About } from "./components/landing/about"
import { Experience } from "./components/landing/experience"
import { Projects } from "./components/landing/projects"
import { Contact } from "./components/landing/contacts"
import { Footer } from "./components/common/footer"

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
