import React from 'react'
import Award from '../Component/Award'
import Lunch from '../Component/Lunch'
import Seemore from '../Component/Seemore'
import Joinsono from '../Component/Joinsono'
import Leaf from '../Component/Leaf'
import { Link } from 'react-router-dom';
const PrivateDining = () => {
    return (
        <>

            <div className="row">
                <div className="col-sm-12 p-0 m-0" >
                    <div id='PrivateDining' className='w-100'>
                        <div className='ms-5' style={{ position: "absolute", zIndex: "10", marginTop: "170px" }}>
                            <p className='text-start  ' style={{ color: "#b7985d", marginLeft: "650px" }}><h1 style={{ color: "white" }}>Private Dining</h1><br />
                                Immerse yourself in an authentic Japanese <br />
                                experience by privately dining in one of our <br /> traditional tatami rooms. <br />
                                <br />
                                The tatami rooms are available for groups of 1 <br />36 guests. Minimum spends apply. <br /><br />
                                
                                <Link to="View A La Carte Menu" style={{ marginTop: "10px", color: "white", fontSize: "14px" }}>Enquire Now</Link>
                                {/* <input type="text" className='border-0 border-bottom border-1  bg-transparent  ' /> */}
                            </p>
                        </div>
                    </div>
                    <Leaf />
                    <Award />
                    <Lunch />
                    <Seemore />
                    <Joinsono />
                </div>
            </div>
        </>
    )
}


export default PrivateDining