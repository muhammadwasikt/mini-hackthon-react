import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const FleshSaleContext = createContext()

export const  FleshSaleProvider = ({ children }) => {

    const [data , setData] = useState([])
    const [loader , setLoader] = useState(false)
    const apiData = async () => {
        const data = await axios.get('https://fakestoreapi.in/api/products') 
            setData(data?.data)
            setLoader(true)  
    }
    useEffect(()=>{
        apiData()
    },[])
    return(
        <FleshSaleContext.Provider value={data}>
            {loader ? children : <div className="w-[100%] h-[100vh] flex justify-center items-center"><div className="loader"></div></div>}
        </FleshSaleContext.Provider>
    )
}
