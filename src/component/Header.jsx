import { Link } from "react-router-dom";
import Button from "./common/Button";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/Context/UserContext";
import LogOut from "../Auth/LogOut";
import { StateContext } from "../utils/Context/StateContext";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Header = ()=> {
  const  { state, setState ,setData , data } = useContext(StateContext);
  const [logOut, setLogOut] = useState(false)
  const {isUser} =  useContext(UserContext);
console.log(isUser)
const handleLogOut = ()=>{
  setLogOut(true)
}
useEffect(()=>{
  setState(false)
},[])
  return (
    <>
    <LogOut signout={logOut} setsignOut={setLogOut} />
  <nav className="w-[100%] mt-[-25px] p-6 flex items-center fixed z-10 bg-white justify-between">
    <div>
      <img src="https://chawkbazar.vercel.app/assets/images/logo.svg" />
      </div>
    <ul className="flex items-center pt-2">
      <Link className="no-underline mx-4 text-black hover:underline" to='/home'>Home</Link>
      <Link className="no-underline mx-4 text-black hover:underline" to='/products'>Products</Link>
      <Link className="no-underline mx-4 text-black hover:underline" to='/contact'>Contact</Link>
    </ul>
    {!state ? <div className="border-[2px] rounded-lg flex items-center px-2">
      <input type="text" className="px-2 py-1 outline-none" placeholder="Type here you search..."/>
      <CiSearch className="text-[24px]"/>
    </div> : <div className="rounded-lg flex items-center justify-center px-2 max-w-[216px] w-[100%]">
    {!data ?
    <CiSearch className="text-[24px]" onClick={()=>setData(true)}/>:
    <IoIosCloseCircleOutline className="text-[24px]" onClick={()=>setData(false)}/>
    }  </div>}
    <div className="flex gap-x-2 pr-6">
      {isUser ? <Button title='Sign Out' clas='p-1 rounded-lg border hover:bg-gray-200' click={handleLogOut}/> :
      <div className="flex gap-x-2 pr-6">
      <Button title={<Link className="no-underline mx-4 text-black" to='/auth/signin'>Sign In</Link>} clas='p-1 rounded-lg border hover:bg-gray-200' />
      <Button title={<Link className="no-underline mx-4 text-black" to='/auth/signup'>Sign Up</Link>} clas='p-1 rounded-lg border hover:bg-gray-200' /> 
      </div>}  
    </div>
  </nav>
  </>
  );
}

export default Header;