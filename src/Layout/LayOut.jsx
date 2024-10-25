import { Outlet } from "react-router";
import Header from "../component/Header";
import { useContext, useEffect } from "react";
import { StateContext } from "../utils/Context/StateContext";

const LayOut = () => {

    return (
        <div className="pt-4">
            <div className="px-4">
            <Header />
            </div>
            <Outlet />
        </div>
    )
}

export default LayOut;
