import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Amenities from './Amenities'
import Contact from './Contact'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Gallery from './Galary'

const MicroSite = () => {
   const { id } = useParams();
  const project = useSelector((state) =>
    state.project.projects.find((p) => p.id === id)
  );

  if (!project) return <div>Not Found</div>;

  return (
    
    <div className='bg-red-100'>
         <Home project={project} />
      <About project={project} />
      <Gallery project={project} />
      <Amenities project={project} />
      <Contact project={project} />
    </div>
  )
}

export default MicroSite