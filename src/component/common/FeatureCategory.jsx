import React, { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { CategoryContext } from "../../utils/Context/CategoryContext";
import { useNavigate } from "react-router";

const FeatureCategory = () => {
  let sliderRef = useRef(null);
  const navigate = useNavigate()
  const data = useContext(CategoryContext)
  // console.log(data);


  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const productsSet = new Set()
  const uniqueProducts = data?.filter((item) => {
    if (!productsSet.has(item.name)) {
      productsSet.add(item.name)
      return true
    }
    return false
  })
  console.log(uniqueProducts);

  return (
    <div>
      <h3 className="font-bold mt-4 mb-[-30px]">Featured Categories</h3>

      <div className="slider-container">
        <Slider ref={slider => (sliderRef = slider)} {...settings} >
          {
            uniqueProducts?.map((item, index) => {
              return (
                <div key={index} className="bg-gray-100 rounded-md pt-3 px-3 max-w-[95%] hover:bg-gray-200" onClick={() => navigate(`/category/${item?.name}`)}>
                  <img src={item.image ? item.image : '/assest/images/images.png'} className="w-[100%] h-[150px] object-fill" />
                  <p className="text-center font-bold overflow-scroll text-nowrap">{item.name}</p>
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
