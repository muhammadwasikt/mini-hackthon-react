import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FleshSaleContext } from '../utils/Context/FlashSaleContext';
import { RiSearch2Line } from 'react-icons/ri';
import { StateContext } from '../utils/Context/StateContext';
import CardPopup from '../component/common/CardPopup';

const Products = () => {
  const [isFullDescription, setIsFullDescription] = useState(false)
  const [cardId, setCardId] = useState(0)
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [make, setMake] = useState([]);
  const [search, setSearch] = useState('');
  const [isFound, setIsFound] = useState(false);
  const { data, setState } = useContext(StateContext);
  const { products } = useContext(FleshSaleContext);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = products; // Assuming products is already fetched from context
      setProduct(res);
      setFilterProduct(res);
      const makes = [...new Set(res.map((item) => item.category))];
      setMake(makes);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setState(true)
    fetchData();

  }, [products]);

  const handleValue = (cat) => {
    if (cat === "Categorise") {
      setFilterProduct(product);
    } else {
      const filteredData = product.filter((item) => item.category === cat);
      setFilterProduct(filteredData);
    }
  };

  const handleSearch = () => {
      const filteredSearch = filterProduct.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    setIsFound(filteredSearch.length === 0);
    setFilterProduct(filteredSearch);
  };

  const handleEnterSearch = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
  };
  const handleUserSearch = () => {
    handleSearch()
  }
  const handleClick = (e) => {
    setCardId(e) 
    setIsFullDescription(true)
  }
  return (
    <div className={isFullDescription && 'absolute z-[-100]'}>
      <CardPopup fullDescription={isFullDescription} setFullDescription={setIsFullDescription} cardId={cardId} />
      {isLoading ? <div className="loader m-auto mt-[250px]"></div>
        :
        <div>
          <div className={data ? 'w-[100%] max-md:flex-col flex justify-between gap-5 p-[20px] mt-[80px] fixed z-10 bg-white shadow-lg ' :null}>
            {data ? <>
              <div className='bg-gray-100 outline-none p-2 px-4 w-[100%] flex items-center justify-between'>
                <input onKeyDown={handleEnterSearch} onInput={handleUserSearch} value={search} placeholder='Type here you search......' onChange={(e) => setSearch(e.target.value)} className='w-[100%] outline-none bg-transparent' />
                <RiSearch2Line className='text-[gray]' />
              </div>
              <div className='w-[100%] flex justify-center gap-x-[50px]'>
                <select onChange={(e) => handleValue(e.target.value)} className='py-2 bg-gray-100 px-[10px] outline-none w-[50%]'>
                  <option value="Categorise">Categorise</option>
                  {make.map((item, index) => {
                    return (
                      <option key={index} value={item} className='border' >{item}</option>
                    )
                  })}
                </select>
                <button onClick={handleSearch} className='py-2 bg-gray-100 px-4 w-[50%]'> Search </button>
              </div> </> :
              null}

          </div>

          {isFound ? <div className='w-[100%] h-[90vh] flex justify-center items-center  '>
            <h1 className='text-3xl'>Your search result is not found</h1>

          </div> :

            <div className='grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-[20px] gap-[20px] w-[100%] '>
              {filterProduct?.map((data) => {
                return (
                  <Card style={{ width: '100%' }} key={data?.id} onClick={() => handleClick(data?.id)}>
                    <Card.Img variant="top" src={data?.image} className="w-full h-[40vmin] object-contain" />
                    <Card.Body>
                      <Card.Title>{data?.title.slice(0, 15)}</Card.Title>
                      <Card.Text className='overflow-scroll w-full h-[8vmin]'>
                        {data?.description}
                      </Card.Text>
                      <Card.Text className="font-sans font-bold">$ {data?.price}.00</Card.Text>
                    </Card.Body>
                  </Card>
                )
              })}
            </div>
          }
        </div>
      }
    </div>
  );
}

export default Products;
