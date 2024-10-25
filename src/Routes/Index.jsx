// import Contact from "../pages/Contact";
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import Contact from '../pages/Contact.jsx'
import SignIn from '../Auth/SignIn.jsx';
import SignUp from '../Auth/SignUp.jsx';

 const NavRoutes = [
    {
        path: '/',
        element: <Home />        
    },
    {
        path: '/products',
        element: <Products />        
    },
    {
        path: '/contact',
        element: <Contact />        
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