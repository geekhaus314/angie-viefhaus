import Nav from './components/Nav'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Portfolio from './components/Portfolio'
import Series from './components/Series'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Portfolio />
        <Series />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
