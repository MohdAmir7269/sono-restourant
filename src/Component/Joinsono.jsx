import React from 'react'

import bg from '../assets/images/patern-dark-bg.jpg'
import { Link } from "react-router-dom";

const Award = () => {
  return (
    <div className="row">
      <div className="col-sm-12 p-0 m-0">
        <div className="position-relative">
          <img
            src={bg}
            alt="bg"
            className="img-fluid w-100"
            style={{ height: "300px", objectFit: "cover" }} />

          <div
            className="position-absolute top-50 start-50 translate-middle "
            style={{ width: "100%" }}
          >
            <h1 className="text-white text-center">Join Sono</h1>
            <p className="text-white text-center">
              Be the first to know about Sono’s special events and news.
            </p>

            <span className='text-center' style={{justifyContent:'center',display:"flex"}}>
              
              <label htmlFor="" className='text-start' style={{color:"white"}}>Name</label> 
              <input type="text" className='border-0 border-bottom border-1 bg-transparent ' />
              
              <label htmlFor="" className='text-start' style={{color:"white"}}>Email Address</label>
              <input type="text" className='border-0 border-bottom border-1 bg-transparent' />
            </span>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Award
