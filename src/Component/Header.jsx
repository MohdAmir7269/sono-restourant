import React from 'react'

const Header = () => {
  return (
    <>
      <div className='row justify-content-center'>
        <div className="col-sm-12 mx-auto p-0 m-0" id='hed'>
          <h4 className='text-center mt-5 py-5' style={{ color: "white" }}>View Our Menus</h4>
          <a href="#" className='an'>A` la Carte</a>
          <a href="#" className='an'>Banquets & Tasting Courses</a>
          <a href="#" className='an'>Teppanyaki</a>
          <a href="#" className='an'>Gluten Free & Vegetarian</a>
          <a href="#" className='an'>Beverages</a>
          <h1 className='so'>Sono Japanese Restaurant Brisbane</h1>
          <h1 className='' style={{fontSize:"28px", textAlign:"center", color:"white", marginTop:"23px"}}>Traditional Japanese Cuisine at Sono</h1>
          <p style={{ textAlign:"center", color:"white", marginTop:"40px"}}>
            At Sono, we pride ourselves on offering a truly authentic
             Japanese dining experience. Our delicious menu showcases the finest
              traditional Japanese cuisine, crafted with culinary prowess and care
               from locally-sourced seasonal produce as well as fresh premium imported 
               Japanese meats and seafood. We encapsulate and infuse the
                essence of Japan throughout everything we do.
                 This ensures that we not only serve the most <br /> <span style={{color:"#b7985d"}}>authentic Japanese  </span>
                  food Brisbane has to offer, but that everyone who dines with us
                   leaves with a memorable experience.</p>
                   <h2 className='mt-3 py-5'  style={{ fontSize:"25px",  textAlign:"center", color:"white", marginTop:"25px"}}>READ MORE</h2>
        </div>

      </div>
    </>
  )
}

export default Header