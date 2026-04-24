import React from 'react'
import img from '../assets/images/patern-dark-bg.jpg'

const Lunch = () => {
    return (
        <>
            <div className="row">
                <div
                    className="col-sm-12 mx-auto p-0 m-0"
                    style={{ position: "relative" }}
                >
                    <img src={img} alt="" className="img-fluid w-100 " style={{height:"300px"}} />

                    
                    <div
                        className="row w-100"
                        style={{
                            position: "absolute",
                            top: "37%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
                        }}
                    >
                        <div className="col-sm-11 mx-auto text-white"><br />
                            <hr />
                            <div className="row mt-5 ">
                                <div className="col-sm-4">
                                    <p>
                                        Sono Japanese Restaurant Portside <br />
                                        Level 1, Portside Wharf <br />
                                        39 Hercules St, Hamilton QLD <br />
                                        (opposite Dendy Cinemas) <br />
                                        (07) 3268 6655 <br />
                                        contact@sonorestaurant.com.au <br />
                                        Blog
                                    </p>
                                </div>

                                <div className="col-sm-4">
                                    <p>
                                        <span className="fs-4 fw-bold">LUNCH</span> <br />
                                        <span style={{ color: "#b7985d" }}>Friday – Sunday</span> <br />
                                        Bookings from 12:00 pm, kitchen closes at 2:30 pm. <br />
                                        Teppanyaki from 12:30 pm on Saturday & Sunday <br /><br />
                                        Sono is closed Mondays and all public holidays.
                                    </p>
                                </div>

                                <div className="col-sm-4 ">
                                    <p>
                                        <span className="fw-bold fs-4">DINNER</span> <br />
                                        Tuesday - Thursday <br />
                                        Bookings from 5:30 pm, kitchen closes at 9:30 pm <br />
                                        <span style={{ color: "#b7985d" }}>Friday & Saturday</span> <br />
                                        Bookings from 5:30 pm, kitchen closes 10:00 pm <br />
                                        Teppanyaki seatings at 5:30 pm and 8:00 pm <br />
                                        <span style={{ color: "#b7985d" }}>Sunday</span> <br />
                                        Bookings from 5:30 pm, kitchen closes 9:30 <br /> pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Lunch
