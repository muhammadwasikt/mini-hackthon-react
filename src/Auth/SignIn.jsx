import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const navigate =  useNavigate();
  const [isLoader , setIsLoader] = useState(false)
   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm()
   const onSubmit = (data) => {
    setIsLoader(true)
     const {email , pasword} = data
       signInWithEmailAndPassword(auth, email, pasword)
       .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success("You account successfully login")
        navigate('/')
        setIsLoader(false)
        reset()
        console.log(user)
        // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         toast.error(errorCode)
         setIsLoader(false)
         reset()
       });
     }
   return (
     <div className="w-[100%] flex justify-center items-center h-[100vh] p-[30px]">
     <form onSubmit={handleSubmit(onSubmit)} className="max-w-[400px] w-[100%] flex flex-col shadow-2xl p-[30px]">
     <h1 className="text-center mb-5">SIGN IN</h1>
     <div className="w-[100%] mb-4">
     <div className="flex items-center w-[100%] border-[1px] rounded-[20px] p-2">
     <MdOutlineEmail className="text-[30px]"/>
     <input className="py-1 px-3 outline-none w-[100%]" placeholder="Email" type="email" {...register("email", { required: true })} />
     </div>
     {errors.email && <span className="text-[10px] text-[red] mb-3 px-2">Email is required</span>}
     </div>
     <div className="w-[100%] mb-4">
     <div className="flex items-center w-[100%] border-[1px] rounded-[20px] p-2">
     <RiLockPasswordLine className="text-[30px]"/>
     <input className="py-1 px-3 outline-none w-[100%]" placeholder="Password" type="password" {...register("pasword", { required: true })} />
     </div>
     {errors.pasword && <span className="text-[10px] text-[red] mb-3 px-2">Pasword is required</span>}
     </div>
     <input className="bg-gray-200 p-2 shadow-md active:translate-y-[2px] text-inputColor active:shadow-none" type="submit" value={isLoader ? 'Loading...':'Sign in'}/>
     <p className="text-[13px] mt-7 text-center">Don't have an account: <span><Link to='/auth/signup'>Sign Up</Link></span></p>
     </form>
     <ToastContainer />
     </div>
   )
}

export default SignIn
