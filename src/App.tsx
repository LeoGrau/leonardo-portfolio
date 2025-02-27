// import { useState } from 'react'
import './App.css'
import AboutMe from './components/about-me/about-me'
import Hero from './components/hero/hero'
import JobExperience from './components/job-experience/job-experience'
import MyProjects from './components/my-projects/my-projects'
import PortfolioNavbar from './components/portfolio-navbar/portfolio-navbar'
import SidebarDock from './components/sidebar-dock/sidebar-dock'

function App() {

  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <MyProjects></MyProjects>
      <JobExperience></JobExperience>
      <footer id="footer" className="h-[80px] flex flex-col items-center justify-center bg-zinc-800 text-gray-400 text-sm">
        <span>&#169; 2025 Leonardo Grau. All rights reserved.</span>
        <SidebarDock></SidebarDock>
      </footer>
    </>
  )
}

export default App
