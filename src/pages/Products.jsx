import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Products = ()=>{
    const [data , setData] = useState()
    const productData = async () => {
        const data = await axios.get('https://api.escuelajs.co/api/v1/products') 
            setData(data?.data)  
    }
    useEffect(()=>{
        productData()
    },[])
    console.log(data);
    
return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data?.category.image} />
          <Card.Body>
            <Card.Title>{data?.title}</Card.Title>
            <Card.Text>
              {data?.description}
            </Card.Text>
            <Button variant="primary">{data?.price}</Button>
          </Card.Body>
        </Card>
      );
    }
    

export default Products;