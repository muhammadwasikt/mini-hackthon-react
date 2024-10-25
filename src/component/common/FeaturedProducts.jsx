import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

const FeaturedProducts = () => {
  const navigate = useNavigate()
const handleNavigate = () => {
  navigate('/products')
}
  return (
    <div className='w-[100%] my-10'>
      <h3 className="font-semi-bold mb-4">Featured Products</h3>
      <div className='w-[100%] flex gap-2 max-md:flex-col'>
        <Card className='w-[100%]' onClick={handleNavigate} >
          <Card.Img variant="top" className='w-[100%] h-[100%] object-contain' src="/assest/feature products/1.webp" />
          <Card.Body>
            <Card.Title>Nike Bag</Card.Title>
            <Card.Text className='text-[12px] text-gray-500'>
              Rolex powerhouse calibre 3235 perpetual...
            </Card.Text>
            <Card.Text className='font-semi-bold'>$ 16.38</Card.Text>
          </Card.Body>
        </Card>
        <div className='w-[50%] max-md:w-[100%] flex flex-col gap-2'>
          <Card onClick={handleNavigate} >
            <Card.Img variant="top" className='w-[100%] h-[100%] object-contain' src="/assest/feature products/2.webp" />
            <Card.Body>
              <Card.Title>Adidas Woolen Cap</Card.Title>
              <Card.Text className='text-[12px] text-gray-500'>
                Causel wear (Casule attire or clothing)
              </Card.Text>
              <Card.Text className='font-semi-bold'>$ 16.00</Card.Text>
            </Card.Body>
          </Card>
          <Card onClick={handleNavigate} >
            <Card.Img variant="top" className='w-[100%] h-[100%] object-contain' src="/assest/feature products/4.webp" />
            <Card.Body>
              <Card.Title>Ray ban Aviator</Card.Title>
              <Card.Text className='text-[12px] text-gray-500'>
                Polarized sunglass reduce glare
              </Card.Text>
              <Card.Text className='font-semi-bold'>$ 720.00</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Card  onClick={handleNavigate} className='w-[60%] max-md:w-[100%]'>
          <Card.Img variant="top" className='w-[100%] h-[100%] object-contain' src="/assest/feature products/3.webp" />
          <Card.Body>
            <Card.Title>Nike Leader VT</Card.Title>
            <Card.Text className='text-[12px] text-gray-500'>
              Footware refers to garments worn
            </Card.Text>
            <Card.Text className='font-semi-bold'>$ 16.38</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default FeaturedProducts
