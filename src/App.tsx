import './App.css'

// Import components
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Demo from './components/Demo'
import TechnicalDetails from './components/TechnicalDetails'
import Documentation from './components/Documentation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Demo />
        <TechnicalDetails />
        <Documentation />
      </main>
      <Footer />
    </div>
  )
}

export default App
