// import { useState } from 'react'
import './App.css'
import Hero from './components/hero/hero'
import PortfolioNavbar from './components/portfolio-navbar/portfolio-navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <div className="h-[calc(100%-70px)]">
        <Hero></Hero>
      </div>
    </>
  )
}

export default App
