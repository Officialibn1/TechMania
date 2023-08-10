import { BsArrowRight } from "react-icons/bs";
import { iPhones } from "../data";
import Iphone from "./Iphone";

const Iphones = () => {
    return (
        <div className="iPhones">
            <div className="barLine"></div>
            <div className="header">
                <h1>
                    iPhones
                </h1>

                <a className='viewMore' href="#">
                    <span>View more</span> 
                    <BsArrowRight />
                </a>
            </div>

            <div className="itemContainer">
                {iPhones.map(iPhone => (
                    <Iphone key={iPhone.id} iPhone={iPhone} />
                ))}
            </div>
        </div>
    );
}

export default Iphones;
