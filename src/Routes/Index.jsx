// import Contact from "../pages/Contact";
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import Contact from '../pages/Contact.jsx'
import SignIn from '../Auth/SignIn.jsx';
import SignUp from '../Auth/SignUp.jsx';
import Header from '../component/Header.jsx';

 const NavRoutes = [
    {
        path: '/',
        element: <Home />        
    },
    {
        path: '/products',
        element: <div className='p-4'>
        <Header />
        <Products />
        </div>        
    },
    {
        path: '/contact',
        element: <div className='p-4'>
        <Header />
        <Contact />
        </div>         
    },
    {
        path: '/auth/signin',
        element: <SignIn />
    },
    {
        path: '/auth/signup',
        element: <SignUp />
    }
]

export default NavRoutes;