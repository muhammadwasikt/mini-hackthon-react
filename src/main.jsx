import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryProvider } from './utils/Context/CategoryContext.jsx';
import { FleshSaleProvider } from './utils/Context/FlashSaleContext.jsx';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CategoryProvider>
      <FleshSaleProvider>
        <App />
      </FleshSaleProvider>
    </CategoryProvider>
  </BrowserRouter>
)
