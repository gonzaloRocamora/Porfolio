import React from 'react'
import About from './components/about/About'
import Contact from './components/contact.jsx/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'

export default function HOLA() {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />
    
    </div>
  )
}
