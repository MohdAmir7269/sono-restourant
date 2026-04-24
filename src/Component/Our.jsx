
import React from 'react'
import drinkImg  from '../assets/images/Drinks-1536x1013.jpg'
import fishImg from '../assets/images/fish.png'

const Our = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 mx-auto" style={{ backgroundColor: "#160908" }}>
                    <div className="row">
                        <div className="col-sm-11 mx-auto">
                            <div className="row mt-4 py-3 ">
                                <div className="col-sm-6">
                                   <img src={drinkImg} alt=""  className='img-fluid'/>
                                </div>
                                <div className="col-sm-6 mx-auto">
                                    <p className='text-end fs-2' style={{ color: "white" }}>Our Carefully Curated Beverage Selection</p>
                                    <p className='text-white mt-5 text-end'>
                                        At Sono, we believe that a true Japanese dining
                                        experience is complemented by an exquisite selection
                                        of beverages. Our curated sake list features a variety
                                        of premium options, ranging from crisp and refreshing
                                        to rich and complex, ensuring that there is a perfect
                                        pairing for every dish. In addition to sake, we offer a diverse
                                        range of Japanese beer, spirits and liqueurs as well as vibrant
                                        cocktails and a fine selection of wines – all carefully selected
                                        to enhance your meal.</p>
                                    <h4 className='text-white text-end mt-4'>Read More</h4>
                                    <a href="" style={{ color: "white", fontSize: "20px", marginTop: "150px", marginLeft: "328px" }}>Bevarage Menu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-11 mx-auto py-5">
                            <div className="row mt-4 py-3 ">
                                <div className="col-sm-6">
                                    <p className='text-start fs-2' style={{ color: "white" }}>Authentic Japanese Dining Brisbane</p>
                                    <p className='text-white mt-5 text-start'>

                                        For an unparalleled Japanese dining experience in Brisbane,
                                         Sono offers an exceptional setting that blends traditional charm with modern comfort
                                         . Our <a href="" style={{color:"#b7985d", textDecoration:"hover"}}>tatami private dining rooms</a> provide an authentic and intimate atmosphere,
                                          perfect for a romantic date night or special event. Whether you’re seeking a 
                                          relaxed atmosphere or the vibrant energy of our teppanyaki bar, Sono Japanese
                                           Brisbane Portside delivers an ambiance that caters to every occasion.</p>
                                    <h4 className='text-white text-start mt-4'>Read More</h4>
                                    <a href="" style={{ color: "white", fontSize: "20px", }}>Make A Reservation</a>
                                </div>
                                <div className="col-sm-6">
                                    <img src={fishImg} alt="image" className='img-fluid'/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Our