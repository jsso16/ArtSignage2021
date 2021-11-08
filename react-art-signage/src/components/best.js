import '../styles/best.css'

function Best() {
  
  return (
    <section className="arts">
      <div className="art-wrap">
        <div className="txt-area-a">
          <h1 className="bubbles">Weekly best pick</h1>
          <span className="m-txt">Meet famous artworks of this week</span>
          <span className="s-txt">Oct 17, 2019</span>
        </div>
        <div className="bests">
          <div className="best1">
            <div className="card-art">
              <div className="mask"></div>
              <img src="./img/leemi3_250.jpeg" className="art-img" alt="leemi3" />
            </div>
          </div>
          <div className="best2">
            <div className="card-art">
              <div className="mask"></div>
              <img src="./img/leemi2_250.jpeg" className="art-img" alt="leemi2" />
            </div>
          </div>
          <div className="best3">
            <div className="card-art">
              <div className="mask"></div>
              <img src="./img/leemi1_250.jpeg" className="art-img" alt="leemi1" />
            </div>
          </div>
          <div className="best4">
            <div className="card-art">
              <div className="mask"></div>
              <img src="./img/yeon2_250.jpeg" className="art-img" alt="yeon2" />
            </div>
          </div>
          <div className="best5">
            <div className="card-art">
              <div className="mask"></div>
              <img src="./img/yeon1_250.jpeg" className="art-img" alt="yeon1" />
            </div>
          </div>
          <div className="best6">
            <div className="card-art">
              <div className="mask"></div>
              <img src="./img/shin3_250.jpeg" className="art-img" alt="shin3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Best