import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const CategoryContext = createContext()

export const CategoryProvider = ({children})=>{
 
    const [data , setData] = useState([])
    const [loader , setLoader] = useState(false)
    const apiData = async () => {
        const data = await axios.get('https://api.escuelajs.co/api/v1/categories') 
            setData(data?.data)
            setLoader(true)  
    }
    useEffect(()=>{
        apiData()
    },[])
    return (
        <CategoryContext.Provider value={data}>
            {loader ? children : <div className="w-[100%] h-[100vh] flex justify-center items-center"><div className="loader"></div></div>}
        </CategoryContext.Provider>
    )
}