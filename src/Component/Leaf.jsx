import React from 'react'
import leaf1 from '../assets/images/banner-design-left.png'
import leaf2 from '../assets/images/banner-design-right.png'
const Leaf = () => {
  return (
   <>
   <div className="leafleft mt-5 py-2">
    <img src={leaf1} alt="" className='img-fluid' />
   </div>
   <div className="leafRight">
    <img src={leaf2} alt="" className='img-fluid' />
   </div>
   
   </>
  )
}

export default Leaf