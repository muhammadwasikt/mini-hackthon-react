import { createContext, useState } from "react";



export const StateContext = createContext();


export const StateProvider = ({ children }) => {
    const [state, setState] = useState(false);
    const [data ,  setData] = useState(null);

    return (
        <StateContext.Provider value={{ state, setState ,data , setData}}>
            {children}
        </StateContext.Provider>
    );
}
