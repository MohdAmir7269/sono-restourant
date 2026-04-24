import React from 'react'
import Award from '../Component/Award'
import Lunch from '../Component/Lunch'
import Seemore from '../Component/Seemore'
import Joinsono from '../Component/Joinsono'
import Leaf from '../Component/Leaf'
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 p-0 m-0" >
          <div id='Events' className='w-100'>
            <div className='ms-5' style={{position:"absolute", zIndex:"10", marginTop:"170px"}}>
              <p style={{color:"#b7985d"}}><h1 style={{color:"white"}}>Events</h1> <br />
                Sono is perfect for private functions, with seating<br />
                 for up to 150 guests and cocktail events for up to <br />
                200 guests. <br/><br />We invite you to select from a range of delectable<br/>

                Japanese catering and beverage options to suit <br />any occasion.<br /><br/>
                 <Link to="" style={{color:"white",fontSize:"14px"}} >Group Dining</Link><span style={{color:"goldenrod"}}>|</span><Link to="" style={{color:"white", fontSize:"14px"}}>Birthdays</Link><br /><br />
                <span style={{ borderBottom: "2px", color:"white" }}>View Function Packages</span>
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


export default Events