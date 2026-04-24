import React from 'react'
import Award from '../Component/Award'
import Lunch from '../Component/Lunch'
import Seemore from '../Component/Seemore'
import Joinsono from '../Component/Joinsono'
import Leaf from '../Component/Leaf'
import { Link } from 'react-router-dom'
const SonoSakuru = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 p-0 m-0" >
                    <div id='SonoSakuru' className='w-100'>
                        <div className='ms-4' style={{ position: "absolute", zIndex: "10", marginTop: "210px" }}>
                            <p style={{ color: "#b7985d" }}><h1 style={{ color: "white" }}>SonoSakuru</h1> <br />
                                Join Sono’s exclusive inner circle. Enjoy the <br /> benefits of Sono Sakuru, Sono’s exclusive, <br />
                                 invitation-only rewards program for our most loyal <br />customers. <br /> <br />
                                <span style={{ borderBottom: "2px", color: "white" }}>Program Benefits</span><br />
                                <input type="text" className='border-0 border-bottom bg-transparent pb-1 mb-2'  />
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


export default SonoSakuru