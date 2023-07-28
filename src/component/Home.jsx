import React from 'react'
import Topbar from './Topbar'
import "./home.css"
import Hero from './Hero'

export default function Home() {
  return (
    <div className='home-screen'>

        <nav  className="top-bar-static"><Topbar/></nav>
                <main className="home-jsx-hero">
                <Hero /></main>    
    </div>
  )
}
