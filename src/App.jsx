import { useState } from 'react'
import NavBar from './Components/NavBar';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';
import Experience from './Sections/Experience';
import Contacts from './Sections/Contacts';

function App() {
 

  return (
    <div className="bg-[#020617] text-white">
      <NavBar />

      <Hero />
      <About/>
      <Skills />
      <Experience />
      <Projects />
      
      <Contacts />
    </div>
  )
}

export default App
