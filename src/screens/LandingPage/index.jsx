import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css';

const index = () => {
  return (
    <div className='container_bg'>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonial/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default index