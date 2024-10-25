import React, { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { CategoryContext } from "../../utils/Context/CategoryContext";

const FeatureCategory = () => {
    let sliderRef = useRef(null);

  const data = useContext(CategoryContext)
// console.log(data);


const singalCategory = [... new Set(data.map((item)=>item.name))]

const settings = {
  infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

  return (
    <div>
      <h3 className="font-bold mt-4 mb-[-30px]">Featured Categories</h3>

    <div className="slider-container">
      <Slider ref={slider => (sliderRef = slider)} {...settings} >
{
  singalCategory.map((category, index) => {
return(
  <div key={index} className="bg-gray-100 rounded-md pt-3 max-w-[95%] hover:bg-gray-200">
    <p className="text-center font-bold">{category.toUpperCase()}</p>
  </div>
)
  })
}
      </Slider>
    </div>

    </div>
  )
}

export default FeatureCategory
