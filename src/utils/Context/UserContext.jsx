import { createContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../../firebase";



export const UserContext = createContext()

export const  UserProvider = ({ children }) => {

    const [isUser , setIsUser] = useState(false)

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setIsUser(true)
        }
      })
    },[])

      return(
        <UserContext.Provider value={{isUser}}>
            {children}
        </UserContext.Provider>
      )
}
