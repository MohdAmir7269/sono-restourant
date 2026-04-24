import React from 'react'
import Award from '../Component/Award'
import Lunch from '../Component/Lunch'
import Seemore from '../Component/Seemore'
import Joinsono from '../Component/Joinsono'
import Leaf from '../Component/Leaf'
import { Link } from 'react-router-dom'
const GiftCard = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 p-0 m-0" >
          <div id='GiftCard' className='w-100'>
            <div className='ms-5' style={{position:"absolute", zIndex:"10", marginTop:"170px"}}>
              <p style={{color:"#b7985d"}}><h1 style={{color:"white"}}>Gift Cards</h1> <br /><br />
              Share the Sono Experience.<br/><br />
              A personalised Sono Gift Card can be purchased <br />
              for any value from $50. <br />
              <br />
              <Link to="Purchase Sono Gift Card" style={{ color:"white" }}>Purchase Sono Gift Card</Link>
                
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


export default GiftCard