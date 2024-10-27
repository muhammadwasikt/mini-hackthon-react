import { useContext, useState } from 'react';

import Button from 'react-bootstrap/Button';
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FleshSaleContext } from '../../utils/Context/FlashSaleContext';


const CardPopup = ({fullDescription , setFullDescription , cardId}) => {
    const {products} = useContext(FleshSaleContext);
    const singalData = products?.find((e)=>{
        return e.id === cardId
        
    })
    // const [isImgUrl , setIsImgUrl] = useState(0)
    // console.log(isImgUrl);
    const closeFullDescription = ()=>{
        setFullDescription(false)
    }
    if (singalData) {
       const {title , description , image , price} = singalData        
    return(
        <>
{singalData ?
        <div className={fullDescription ? 'fixed md:top-[100px] top-3 z-10 w-[100%] mt-4': null}>
        {fullDescription ? <div className='relative mx-auto cursor-pointer rounded-xl flex shadow-2xl lg:max-w-[600px] md:max-w-[600px] sm:max-w-[400px] w-[100%] pt-4 pb-3 px-3 bg-white max-md:flex-col '>
          <IoMdCloseCircleOutline className='absolute right-4 top-3 text-2xl' onClick={closeFullDescription} />
          <div>
            <img src={image} className= 'max-md:w-[100%] max-md:h-[200px] max-md:object-contain  rounded-lg max-w-[500px] h-[300px] object-cover' />
          </div>
          <div>
          <div className='cursor-auto'>
          <p className='text-lg font-bold uppercase p-2 h-[70px] overflow-scroll'>{title}</p>
          <p className='px-2 max-md:h-[90px] h-[120px] overflow-auto'>{description}</p>
          </div>
          <div className='flex p-2 justify-between items-center w-[100%]'>
          <p className='pt-3'>$ {price}.00</p>
          <Button variant="outline-success" ><span className='flex items-center gap-x-2'><MdAddShoppingCart />Add to cart </span></Button>
          </div>
          </div>
         </div> : null}
        </div> : null
}
        </>
    )
}
}



export default CardPopup