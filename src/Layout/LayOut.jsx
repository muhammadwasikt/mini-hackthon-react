import { Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/Footer";

const LayOut = () => {

    return (
        <>
            <div className="pt-4">
                <div className="px-4">
                    <Header />
                </div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default LayOut;
