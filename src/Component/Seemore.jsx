import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import img1 from '../assets/images/imgseemore1.webp'
import img2 from '../assets/images/seemore2.webp'
import img3 from '../assets/images/seemore3.webp'
import img4 from '../assets/images/seemore4.webp'
import img5 from '../assets/images/seemore5.webp'
import img6 from '../assets/images/seemore6.webp'
import img7 from  '../assets/images/seemore7.webp'
import img8 from '../assets/images/seemor8.webp'
 
const Seemore = () => {
  return (
   <>
   <div className="row">
    <div className="col-sm-12 py-4 p-0 m-0" style={{backgroundColor:"#160908"}}>
      <Swiper
        slidesPerView={8}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" className='img-fluid' style={{height:"160px",width:"250px",objectFit: "cover"}} /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className='img-fluid'  style={{height:"160px",width:"250px",objectFit: "cover"}}/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" className='img-fluid'  style={{height:"160px",width:"250px",objectFit: "cover"}}/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" className='img-fluid'  style={{height:"160px",width:"250px",objectFit: "cover"}}/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" className='img-fluid'  style={{height:"160px",width:"250px",objectFit: "cover"}}/></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" className='img-fluid'  style={{height:"160px",width:"250px",objectFit: "cover"}}/></SwiperSlide>
        <SwiperSlide><img src={img7} alt="" className='img-fluid'  style={{height:"160px",width:"250px",objectFit: "cover"}}/></SwiperSlide>
        <SwiperSlide><img src={img8} alt="" className='img-fluid'  style={{height:"160px",width:"250px",objectFit: "cover"}}/></SwiperSlide>

      </Swiper>

      <a href="" className='justify-content-center d-flex'  style={{color:"white", textDecoration:"none",}}>See more @sono_restaurant</a>
    </div>
   </div>
   </>
  )
}

export default Seemore