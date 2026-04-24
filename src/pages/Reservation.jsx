import React from 'react'
import Award from '../Component/Award'
import Lunch from '../Component/Lunch'
import Seemore from '../Component/Seemore'
import Joinsono from '../Component/Joinsono'
import Leaf from '../Component/Leaf'
import { Link } from 'react-router-dom';
const Reservation = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 p-0 m-0" >
          <div id='resimg' className='w-100'>
            <div className='ms-4' style={{position:"absolute", zIndex:"10", marginTop:"140px"}}>
              <p style={{color:"#b7985d"}}><h1 style={{color:"white"}}>Reservations</h1> <br />
                We highly recommended making a booking.<br /><br/>

                Click the link below or call <span style={{color:"white"}}>07 3268 6655</span> to <br />  make a reservation.<br /><br/>

                Please note teppanyaki bookings can only be <br /> made via phone.<br /><br/>

              <Link to="Make a Reservation" className=' text-light'>Make a Reservation</Link>
              </p>
            </div>
          </div>
          <Leaf/>
          <Award />
          <Lunch />
          <Seemore />
          <Joinsono />
        </div>
      </div>
    </>
  )
}


export default Reservation