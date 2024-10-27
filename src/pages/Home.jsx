import { useContext, useEffect } from "react";
import Baner from "../component/common/Baner";
import Banner from "../component/common/Banner";
import FeatureCategory from "../component/common/FeatureCategory";
import FeaturedProducts from "../component/common/FeaturedProducts";
import FleshSale from "../component/common/FleshSale";
import MainCard from "../component/common/MainCard.jsx"
import NewArrivals from "../component/common/NewArrivals";
import { StateContext } from "../utils/Context/StateContext.jsx";

const Home = ()=>{
    const {setState} = useContext(StateContext)

    useEffect(()=>{
        setState(false)
    },[])
    return(
        <div className="px-4">
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

export default Home;