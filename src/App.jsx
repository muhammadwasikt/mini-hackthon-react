import { Route, Routes } from "react-router-dom"; 
import NavRoutes from './Routes/Index'


const App = () => {
    return (
            <Routes>
                {NavRoutes.map(({ path, element }, index) => (
                    <Route path={path} element={element} key={index} />
                ))}
            </Routes>
    );
};

export default App;
