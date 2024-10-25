import { useContext, useRef, useState } from "react";
import Slider from "react-slick";
import { FleshSaleContext } from "../../utils/Context/FlashSaleContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";
import CardPopup from "./CardPopup";



const FleshSale = () => {
    const [isFullDescription, setIsFullDescription] = useState(false)
    const [cardId, setCardId] = useState(0)
    let sliderRef = useRef(null);

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
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
    const { products } = useContext(FleshSaleContext)

    const productsSet = new Set()
    const uniqueProducts = products?.filter((item) => {
        if (!productsSet.has(item.category)) {
            productsSet.add(item.category)
            return true
        }
        return false
    })
    const navigate = useNavigate()
    const handleNavigate = () => {
      navigate('/products')
    }
    const handleClick = (e) => {
        setCardId(e)
        setIsFullDescription(true)
      }
    return (
        <div >
            <CardPopup fullDescription={isFullDescription} setFullDescription={setIsFullDescription} cardId={cardId} />
            <h3 className="mb-4">Flash Sale</h3>
            <div className="w-[100%] overflow-scroll">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    {
                        uniqueProducts?.map((item, key) => {
                            const { image, title, description, price ,id} = item
                            return (
                                <Card key={key} className="max-w-[95%]" onClick={()=>handleClick(id)}>
                                    <Card.Img variant="top" src={image} className="w-[100%] h-[50vmin] object-contain"/>
                                    <Card.Body >
                                        <Card.Title>{title.slice(0 , 15)}</Card.Title>
                                        <Card.Text className="overflow-hidden w-[100%] h-[8vmin]">
                                            {description}
                                        </Card.Text>
                                        <Card.Text className="font-sans font-bold">$ {price}.00</Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default FleshSale
