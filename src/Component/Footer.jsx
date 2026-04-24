import React from 'react'

const Footer = () => {
  return (
   <>
   <div className="row">
    <div className="col-sm-12 p-2" style={{backgroundColor:"#090303"}}>
        <div className="row">
            <div className="col-sm-6">
                <p className='text-white' style={{fontSize:"14px", marginTop:"10px"}}>© Sono Restaurant - Brisbane’s most awarded authentic Japanese restaurant</p>
            </div>
            <div className="col-sm-4"></div>

            <div className="col-sm-2 text-end py-2"> <i class="fa-brands fa-facebook text-white fs-3"></i>
            <i class="fa-brands fa-instagram text-white fs-3"></i>
           </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer