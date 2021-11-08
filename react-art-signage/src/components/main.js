import '../styles/main.css'

function Main() {
  
  return (
    <section className="main">
      <div className="canvas-demo">
        <div className="canvas fit">
          <div className="canvas-wrap">
            <img src="./img/img_sample_yellow.jpeg" className="canvas-image" alt="sample_yellow" />
          </div>
        </div>
      </div>
      <div className="main-wrap">
        <div className="text-wrap">
          <span className="sub-title1">DIGITAL ART DISPLAY</span>
          <h1 className="title">Show Digital Art in <br /> Your Space</h1>
          <span className="sub-title2">
            Discover your favorite digital artworks.<br />
            Appreciate any artwork with ‘Artprimeclub’<br />
            Also you can communicate, share information and<br />
            support many modern artists.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Main