
import React from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'


const Slider = () => {
  return (
    <div className='row'>
      <div className="col-sm-12 p-0 m-0">
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" >
          <div className="carousel-indicators" autoplay-delay="2500"  autoplay-disable-on-interaction="true">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active"><img
              src={img1}
              className="d-block w-100"
              alt="..."
              style={{
                height: "500px",
                objectFit: "cover"
              }}
            />

              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ fontSize: "55px", marginTop: "-300px" }}>Award Winning </h5>
                <span className='fs-3' >Brisbane's Best Authentic Japanese Restaurant</span>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100"
                alt="..."
                style={{
                  height: "500px",
                  objectFit: "cover"
                }}
              />

              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ fontSize: "55px", marginTop: "-340px" }}>Irsshaimasse</h1>
                <h2>(welcome)</h2>
                <div className="row">
                  <div className="col-sm-10 mx-auto">
                    <span className='fs-5' style={{ color: "#b7985d", textAlign: 'center' }}>Relax and experiance the essence of
                      Japan with speciacular dishes made with the finest
                      ,freshest seasonal ingredients.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-100"
                alt="..."
                style={{
                  height: "500px",
                  objectFit: "cover"
                }}
              />

              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ fontSize: "55px", marginTop: "-265px" }}>Tradition,   Untouched</h1>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider