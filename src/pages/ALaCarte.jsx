import React from 'react'
import Award from '../Component/Award'
import Lunch from '../Component/Lunch'
import Seemore from '../Component/Seemore'
import Joinsono from '../Component/Joinsono'
import Leaf from '../Component/Leaf'
import { Link } from 'react-router-dom';
const ALaCarte = () => {
    return (
        <>

            <div className="row">
                <div className="col-sm-12 p-0 m-0" >
                    <div id='ALaCarte' className='w-100'>
                        <div className='ms-5' style={{ position: "absolute", zIndex: "10", marginTop: "170px" }}>
                            <p className='text-start mt-1 ' style={{ color: "#b7985d", marginLeft: "650px" }}><h1 style={{ color: "white" }}>À La Carte</h1><br />
                                Experience true tradition with our vast selection <br />
                                of authentic Japanese dishes made with the finest <br /> seasonal ingredients. <br />
                                <br />
                                <Link to="View A La Carte Menu" style={{ marginTop: "10px", color: "white", fontSize: "14px" }}>View A La Carte Menu</Link><br />
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


export default ALaCarte