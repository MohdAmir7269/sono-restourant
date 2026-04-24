import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import bg from "../assets/images/patern-dark-bg.jpg";

import img1 from "../assets/images/Wine-Award-2025 (1).png";
import img2 from "../assets/images/Award-2024.png";
import img3 from "../assets/images/Award-2023.png";
import img4 from "../assets/images/agfg-award-1.png";
import img5 from "../assets/images/The-Fork-Top-100.png";
import img6 from "../assets/images/Wine-List-Award-2022.png";
import img7 from "../assets/images/Wine-Spectator-Award-2022.png";
import img8 from "../assets/images/Savour-Finalist-Best-Japanese-2022.png";
import img9 from "../assets/images/award3 (1).png";
import img10 from "../assets/images/Wine-List-Award-2021.png";
import img11 from "../assets/images/Savour-Finalist-Best-Japanese-2022.png";
import img12 from "../assets/images/Savour-Finalist-Best-Japanese-2022.png";
import img13 from "../assets/images/Savour-Finalist-Best-Japanese-2022.png";
import img14 from "../assets/images/Savour-Finalist-Best-Japanese-2022.png";
import img15 from "../assets/images/Savour-Finalist-Best-Japanese-2022.png";
import img16 from "../assets/images/Savour-Finalist-Best-Japanese-2022.png";

function Award() {
  return (
    <section
      id="awards"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "55px 0",
      }}
    >
      <div className="container">
        <div className="row text-white text-center ">

          <h3>Awards</h3>
          <p className="text-center">Brisbane’s most awarded Authentic Japanese Restaurant</p>

          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 6 },
            }}
          >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>
          </Swiper>

        </div>
      </div>
    </section>
  );
}

export default Award;
