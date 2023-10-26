import React from 'react'
import "./Home.css"
import Banners from '../../components/Banners/Banners'

function Home() {
  return (
    <div className='Home'>
        <div className="Home-banner">
          <img src="logo.png" alt="" />
          <p>+100 PLAYERS ONLINE</p>
          <a href="#">Jogue agora</a>
        </div>
        <Banners />
    </div>
  )
}

export default Home