import { useParams } from "react-router";
import { useContext } from "react";
import { CategoryContext } from "../utils/Context/CategoryContext";
import { Card } from "react-bootstrap";


const Category = () => {
    const data = useContext(CategoryContext)
    useParams()
    const { name } = useParams()
    const singleData = data?.filter((item) => {
        return item.name === name
    })
    console.log(singleData);
    
    return (
        <div className='grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-[20px] mt-[50px] gap-[20px] w-[100%] '>
            {singleData?.map((data) => {
                return (
                    <Card style={{ width: '100%' }} key={data?.id}>
                        <Card.Img variant="top" src={data?.image} className="w-full h-[40vmin] object-contain" />
                        <Card.Body>
                        <Card.Title>{data?.name}</Card.Title>
                            <Card.Title>{data?.creationAt}</Card.Title>
                            <Card.Text>
                                {data?.updatedAt}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )

}

export default Category;