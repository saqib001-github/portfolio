import React from 'react'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Navbar from './components/Navbar'
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from './sections/FeatureCards';
import ExperienceSection from './sections/ExperienceSection';
import TechStack from './sections/TeahStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Showcase/>
      {/* <LogoShowcase/> */}
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App