import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FleshSaleContext } from '../utils/Context/FlashSaleContext';



const Products = () => {
  const { products } = useContext(FleshSaleContext)

  return (
    <div className='w-[100%] flex flex-wrap justify-center gap-3 py-[80px] '>
      {
        products?.map((data) => {
          return (
            <Card style={{ width: '19rem' }} key={data?.id}>
              <Card.Img variant="top" src={data?.image} className="w-[100%] h-[40vmin] object-contain"/>
              <Card.Body>
                <Card.Title>{data?.title.slice(0 , 15)}</Card.Title>
                <Card.Text className='overflow-scroll w-[100%] h-[8vmin] '>
                  {data?.description}
                </Card.Text>
                <Card.Text className="font-sans font-bold">$ {data?.price}.00</Card.Text>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  );
}


export default Products;