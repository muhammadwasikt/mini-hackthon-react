import { Link } from "react-router-dom";
import Button from "./common/Button";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/Context/UserContext";
import LogOut from "../Auth/LogOut";
import { StateContext } from "../utils/Context/StateContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";


const Header = ()=> {
  const  { state, setState ,setData , data } = useContext(StateContext);
  const [logOut, setLogOut] = useState(false)
  const {isUser} =  useContext(UserContext);
  const [isResponsive , setIsResponsive] = useState(false)

console.log(isUser)
const handleLogOut = ()=>{
  setLogOut(true)
}
useEffect(()=>{
  setState(false)
},[])
const handleResponsive = ()=>{
  setIsResponsive(!isResponsive)
}
  return (
    <>
    <LogOut signout={logOut} setsignOut={setLogOut} />
  <nav className="w-[100%] mt-[-25px] pt-3 pb-1 flex items-center fixed z-10 bg-white justify-between">
    <div>
      <img src="https://chawkbazar.vercel.app/assets/images/logo.svg" />
      </div>
    <ul className={isResponsive? "max-lg:flex flex-col absolute hidden mt-[257px] gap-y-2 bg-gray-50 w-[100%] py-6" :"flex items-center pt-2 max-lg:hidden"}>
      <Link className="no-underline mx-4 text-black hover:underline" to='/home'>Home</Link>
      <Link className="no-underline mx-4 text-black hover:underline" to='/products'>Products</Link>
      <Link className="no-underline mx-4 text-black hover:underline" to='/contact'>Contact</Link>
      {
        isResponsive && <>
        {isUser ? <Button title='Sign Out' clas={'mx-4 font-medium text-[16px]'} click={handleLogOut}/> :
        <>
        <Link className="no-underline mx-4 text-black hover:underline" to='/auth/signin'>Sign In</Link>
        <Link className="no-underline mx-4 text-black hover:underline" to='/auth/signup'>Sign Up</Link>
        </>}
        </>
      }
    </ul>
    {!state ? <div className="border-[2px] rounded-lg flex items-center justify-between px-2 max-lg:w-[80%]">
      <input type="text" className="w-[100%] px-2 py-1 outline-none" placeholder="Type here you search..."/>
      <CiSearch className="text-[24px]"/>
    </div> : <div className="rounded-lg flex items-center justify-center px-2 max-w-[216px] w-[100%]">
    {!data ?
    <CiSearch className="text-[24px]" onClick={()=>setData(true)}/>:
    <IoIosCloseCircleOutline className="text-[24px]" onClick={()=>setData(false)}/>
    }  </div>}
    <div className="flex gap-x-2 pr-6 max-lg:hidden">
      {isUser ? <Button title='Sign Out' clas='p-1 rounded-lg border hover:bg-gray-200' click={handleLogOut}/> :
      <div className="flex gap-x-2 pr-6">
      <Button title={<Link className="no-underline mx-4 text-black" to='/auth/signin'>Sign In</Link>} clas='p-1 rounded-lg border hover:bg-gray-200' />
      <Button title={<Link className="no-underline mx-4 text-black" to='/auth/signup'>Sign Up</Link>} clas='p-1 rounded-lg border hover:bg-gray-200' /> 
      </div> }
    </div>
      <div className="text-[30px] hidden max-lg:inline-flex pr-6">{isResponsive ? <IoCloseOutline onClick={handleResponsive}/>:<HiBars3BottomRight onClick={handleResponsive}/>}</div>  
  </nav>
  </>
  );
}

export default Header;