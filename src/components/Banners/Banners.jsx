import React from 'react'
import './Banners.css'

function Banners() {
  return (
    <>
    <div className="Banners">
        <iframe className='Banners-discord' src="https://discord.com/widget?id=1053772931680977006&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        <div className="Banners-minigames">
            <img src="banner-minigame.jpg"/>
        </div>
        <div className="Banners-ads">
        </div>
    </div>
      <div className="Banners-bottom">
        <h2>BANNER ADS</h2>
      </div>
    </>
  )
}

export default Banners