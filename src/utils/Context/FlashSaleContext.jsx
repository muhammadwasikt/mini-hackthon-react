import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const FleshSaleContext = createContext()

export const  FleshSaleProvider = ({ children }) => {
    const [data , setData] = useState([])
    const apiData = async () => {
        const data = await axios.get('https://fakestoreapi.in/api/products') 
            setData(data?.data)  
    }
    useEffect(()=>{
        apiData()
    },[])
    return(
        <FleshSaleContext.Provider value={data}>
            {children}
        </FleshSaleContext.Provider>
    )
}
