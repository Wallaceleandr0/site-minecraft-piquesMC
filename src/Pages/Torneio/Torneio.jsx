import './Torneio.css'

function Torneio() {
  return (
    <div className='Torneio'>
      <div className="Torneio-banner">
        <h2>Torneio Piques</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio obcaecati quos dolore ducimus debitis aspernatur minus dolorum ipsam quasi, cum consequuntur deserunt, ex fuga voluptates. Modi quaerat consectetur eum adipisci.</p>
      </div>

      <div className="Torneio-flex">
        <div className="Torneio-flex-table">
          <h4 id='h4-torneio'>ÚLTIMO TORNEIO</h4>
          <div className="Torneio-flex-table-list">
            <h4>WINNER</h4>
            <div className="Torneio-flex-table-list-box"></div>
            <h4>MVP</h4>
            <div className="Torneio-flex-table-list-box"></div>
            <h4>2 Lugar</h4>
            <div className="Torneio-flex-table-list-box"></div>
            <h4>3 Lugar</h4>
            <div className="Torneio-flex-table-list-box"></div>
          </div>
        </div>

      <div className="Torneio-flex-participate">
        <img src="banner-minigame.jpg" id="banner-participate" alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure earum amet nihil reprehenderit voluptate, omnis debitis aut commodi culpa, neque esse quia fugit! Reiciendis maxime recusandae, omnis quas architecto quisquam.</p>
        <a href="#">PARTICIPAR</a>
      </div>

      </div>

    </div>
  )
}

export default Torneio