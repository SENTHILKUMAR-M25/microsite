import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Galary from './Galary'
import Amenities from './Amenities'
import Contact from './Contact'

const MicroSite = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Galary />
        <Amenities/>
        <Contact />
    </div>
  )
}

export default MicroSite