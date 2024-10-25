import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const CategoryContext = createContext()

export const CategoryProvider = ({children})=>{
 
    const [data , setData] = useState([])
    const apiData = async () => {
        const data = await axios.get('https://api.escuelajs.co/api/v1/categories') 
            setData(data?.data)  
    }
    useEffect(()=>{
        apiData()
    },[])
    return (
        <CategoryContext.Provider value={data}>
            {children}
        </CategoryContext.Provider>
    )
}