import React from 'react'
import Award from '../Component/Award'
import Lunch from '../Component/Lunch'
import Seemore from '../Component/Seemore'
import Joinsono from '../Component/Joinsono'
import Leaf from '../Component/Leaf'
import { Link } from 'react-router-dom'
const  Contact = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 p-0 m-0"  >
          <div id='Contact' className='w-100'>
            <div className='ms-4' style={{position:"absolute", zIndex:"10", marginTop:"270px"}}>
              <p style={{color:"#b7985d"}}><h1 style={{color:"white"}}> Contact Us</h1> <br />
              Complete the form below for all enquiries<br />egarding feedback, media, and general <br />
            questions. If you wish to join the team at Sono, <br /> please email your resume, advising the position<br/>
          you are seeking.<br /><br/>
          
                <input type="text" id='name' className='border-0 border-bottom border-1 w-100 bg-transparent'/><br />
                <label htmlFor=""  style={{color:"white"}}>Name</label> <br /><br />
                 <input type="text" id='name' className='border-0 border-bottom border-1 w-100 bg-transparent'/><br />
                <label htmlFor="" style={{color:"white"}}>Phone</label> <br /><br />
                 <input type="text" id='name' className='border-0 border-bottom border-1 w-100 bg-transparent'/><br />
                <label htmlFor="" style={{color:"white"}}>Email</label> <br /><br /><br /><br />
                <input type="text" id='name' className='border-0 border-bottom border-1 w-100 bg-transparent'/><br />
                <label htmlFor="" style={{color:"white"}}>Message</label><br /><br /><br />

          <Link to="Submit" style={{color:"#b7985d",fontSize:"20px"}}>Submit</Link>
             
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


export default Contact