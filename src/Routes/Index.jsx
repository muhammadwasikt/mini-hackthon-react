// import Contact from "../pages/Contact";
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import Contact from '../pages/Contact.jsx'
import SignIn from '../Auth/SignIn.jsx';
import SignUp from '../Auth/SignUp.jsx';
import LayOut from '../Layout/LayOut.jsx';
import MainPage from '../pages/MainPage.jsx';
import Category from '../pages/Category.jsx';

 const NavRoutes = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/',
        element: <LayOut />,
        children: [
            {
                path: 'home',
                element: <Home />        
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'category/:name',
                element: <Category />
            }
        ]
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