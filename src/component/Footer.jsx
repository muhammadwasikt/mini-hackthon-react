import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100%] grid items-center pt-3 px-4 pb-1 border-t-2 bg-slate-800 text-white lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
          <span className="text-lg text-gray-400 hover:text-gray-50 w-[100%] text-center">&copy; {new Date().getFullYear()}</span> 
          <span className="text-gray-400 hover:text-gray-50 w-[100%] text-center">
             Developed by Muhammad Wasi
          </span>
          <div className="flex space-x-6 my-4 md:my-0 w-[100%] justify-center">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-wasi-imran-khatri/" target="_blanck" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/muhammadwasikt/" target="_blanck" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4 w-[100%] justify-center ">
            <a href="#" className="text-gray-400 hover:text-white w-[100%] text-center">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white w-[100%] text-center">
              Terms of Service
            </a>
          </div>
        </div>
  )
}

export default Footer
