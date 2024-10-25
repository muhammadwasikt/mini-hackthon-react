import { useParams } from "react-router";
import { useContext } from "react";
import { CategoryContext } from "../utils/Context/CategoryContext";


const Category = () => {
    const data = useContext(CategoryContext)
useParams()
const {name} = useParams()
const singleData = data?.find((item)=>{
    return item.name === name
})

}

export default Category;