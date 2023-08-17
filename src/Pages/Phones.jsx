import '../components/styles/PhonesLaptops.css'
import { iPhones } from "../data";
import Iphone from '../components/Iphone';


const Phones = () => {
    return (
        <div className="phonesLaptops">
            <div className="phonesLaptopsBanner">
                <h1>Mobile Phones</h1>
                <span className="phonesLaptopsBannerImg">
                    <img src="../../public/iphones/iphone13probanner.png" alt="iphone13probanner" />
                </span>
            </div>

            <div className="phonesLaptopsNav">
                <a href="#">iPhone&apos;s</a>
                <a href="#">Samsung&apos;s</a>
            </div>

            <div className="categoriesBarLine"></div>

            <div className="itemContainer">
                {iPhones.map(iPhone => (
                    <Iphone key={iPhone.id} iPhone={iPhone} />
                ))}
            </div>
        </div>
    );
}

export default Phones;
