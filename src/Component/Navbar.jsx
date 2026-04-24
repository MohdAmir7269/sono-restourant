import React from 'react'
import img from "../assets/images/image.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>

            <div className='row justify-content-center ' >
                <div className="col-sm-12 p-0 m-0 mx-auto" id='nav'>

                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown" style={{ color: "#b7985d" }}>
                                        <Link className="nav-link " to="reservation" style={{ color: "#b7985d" }}  >
                                            Reservation
                                        </Link>

                                    </li>
                                   <li className="nav-item dropdown">
                                        <Link className="nav-link " to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Menus
                                        </Link>
                                        <ul className="dropdown-menu bg-transparent mb-5 " style={{top:"35px"}} >
                                            <li><Link className="dropdown-item " to="ALaCarte" style={{color:"#b7985d"}}>A`LaCarte</Link></li>
                                            <li><Link className="dropdown-item" to=""  style={{color:"#b7985d"}}>Banquet & Tasting Courses</Link></li>
                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Teppanyaki</Link></li>
                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Gluten Free & Vegetarian</Link></li>
                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Beverages</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown bg-transparent mb-5" >
                                        <Link className="nav-link " to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Restourant
                                        </Link>
                                        <ul className="dropdown-menu bg-transparent" style={{top:"35px", }} >
                                            <li><Link className="dropdown-item" to="privateDining" style={{color:"#b7985d" }}>private Dining</Link></li>                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Beverages</Link></li>
                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Dining Room</Link></li>
                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Teppanyaki</Link></li>
                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Authentic Japanese
</Link></li>
                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Sushi</Link></li>
                                            <li><Link className="dropdown-item" to="" style={{color:"#b7985d"}}>Fine Dining</Link></li>





                                                                                    
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link " to="Events" role="button">
                                            Events
                                        </Link>
                                    </li>

                                    <Link className="nav-item" to=""><img src={img} alt="logo" className='img-fluid' style={{ height: "100px" }} /></Link>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link " to="SonoSakuru" role="button" >
                                            SonoSakaru
                                        </Link>
                                        
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link " to="GiftCard" role="button">
                                            Gifts Cards
                                        </Link>
                                        
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link " to="Contact" role="button">
                                            Contact
                                        </Link>
                                        
                                    </li> <li className="nav-item dropdown">
                                        <Link className="nav-link  " to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span style={{ color: "#8b703e" }}>07269096806</span>
                                        </Link>
                                        
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>


        </>
    )
}

export default Navbar