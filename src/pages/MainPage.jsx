import { useContext, useEffect } from "react";
import Baner from "../component/common/Baner";
import Banner from "../component/common/Banner";
import FeatureCategory from "../component/common/FeatureCategory";
import FeaturedProducts from "../component/common/FeaturedProducts";
import FleshSale from "../component/common/FleshSale";
import MainCard from "../component/common/mainCard.jsx";
import NewArrivals from "../component/common/NewArrivals";
import Header from "../component/Header"
import { StateContext } from "../utils/Context/StateContext.jsx";

const MainPage = ()=>{
    const {setState} = useContext(StateContext)

    useEffect(()=>{
        setState(false)
    },[])
    return(
        <div className="p-4">
        <Header />
        <Banner />
        <MainCard />
        <FeatureCategory />
        <FeaturedProducts />
        <FleshSale />
        <Baner />
        <NewArrivals />
        </div>
    )
}

export default MainPage;