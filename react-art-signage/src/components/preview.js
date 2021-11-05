function Preview() { 
  
  return (
    <section className="preview">
      <div className="preview-wrap">
        <div className="text-area">
          <h1 className="title-p animated-2">Preview</h1>
          <ul className="text-list animated-2">
            <li className="txt-p">
              <span className="cursor selected">26.5" DISPLAY</span>
            </li>
            <li className="txt-p">
              <span className="cursor">49" DISPLAY</span>
            </li>
          </ul>
          <div className="display-info">
            <div className="display-img">
              <img src="../img/ic_display_26.png" alt="display" />
            </div>
            <div className="display-desc">
              <span className="desc-t">26.5" DISPLAY</span>
              <span className="desc-st">
                13.9mm thin and light design,<br /> 
                Higher video quality than the real,<br /> 
                Optimized for elaborate details,<br /> 
                Easy and fast to enjoy contents.
              </span>
            </div>
          </div>
          <div className="video-area">
            <video controls="m-info" src="https://d1gbnc4q0p7rpe.cloudfront.net/arts/bg/example_26inch.mp4" className="video"></video>
          </div>
          <div className="preview-deco">
            <div className="page-shape"></div>
            <span className="click">LEARN MORE</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preview