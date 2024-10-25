import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { FleshSaleContext } from '../../utils/Context/FlashSaleContext';
import { useNavigate } from 'react-router';



const NewArrivals = () => {
const {products} = useContext(FleshSaleContext)

const navigate = useNavigate()
const handleNavigate = () => {
  navigate('/products')
}

const productSlice = products?.slice(0 , 6)

  return (
    <div className="my-5">
      <h3 className="font-semi-bold mb-4">New Arrivals</h3>
      <div className='w-[100%] grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
{
  productSlice?.map((item , key) => {
    const { image, title, description, price } = item
    return (
        <Card key={key} className="max-w-[100%] p-2" onClick={handleNavigate}>
            <Card.Img variant="top" src={image} className="w-[100%] h-[40vmin] object-contain"/>
            <Card.Body >
                <Card.Title>{title.slice(0 , 15)}</Card.Title>
                <Card.Text className="overflow-scroll w-[100%] h-[8vmin] ">
                    {description}
                </Card.Text>
                <Card.Text className="font-sans font-bold">$ {price}.00</Card.Text>
            </Card.Body>
        </Card>
    )
  })
}
</div>
    </div>
  )
}

export default NewArrivals

