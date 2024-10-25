import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";



const Banner = () => {
    let sliderRef = useRef(null);
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };


  return (
    <div>
    <div className="slider-container">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div>
        <img className="h-[70vmin] w-[100%] max-md:hidden object-fill rounded-md" src="/assest/images/banner-4.webp" />
        {/* <img className=" w-[100%] rounded-md hidden" src="/assest/images/banner-mobile-4.webp"/> */}
        </div>
        <div>
        <img className="h-[70vmin] w-[100%] max-md:hidden object-fill rounded-md" src="/assest/images/banner-5.webp" />
        {/* <img className=" w-[100%] rounded-md hidden" src="/assest/images/banner-mobile-5.webp"/> */}
        </div>
        <div>
        <img className="h-[70vmin] w-[100%] max-md:hidden object-fill rounded-md" src="/assest/images/banner-6.webp" />
        {/* <img className=" w-[100%] rounded-md hidden" src="/assest/images/banner-mobile-6.webp"/> */}
        </div>
      </Slider>
    </div>
    </div>
  )
}


export default Banner
