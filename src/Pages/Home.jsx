import Banner from "../components/Banner";
import Categories from "../components/Categories";
import GalaxyBooks from "../components/GalaxyBooks";
import Iphones from "../components/Iphones";
import Macbooks from "../components/Macbooks";
import Samsungs from "../components/Samsungs";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <Iphones />
            <Macbooks />
            <Samsungs />
            <GalaxyBooks />
        </>
    );
}

export default Home;
