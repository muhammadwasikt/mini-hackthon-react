import Baner from "../component/common/Baner";
import Banner from "../component/common/Banner";
import FeatureCategory from "../component/common/FeatureCategory";
import FeaturedProducts from "../component/common/FeaturedProducts";
import FleshSale from "../component/common/FleshSale";
import MainCard from "../component/common/MainCard";
import NewArrivals from "../component/common/NewArrivals";
import Header from "../component/Header"

const Home = ()=>{
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

export default Home;