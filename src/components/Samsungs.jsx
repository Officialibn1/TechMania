import { samsungs } from "../data";
import { BsArrowRight } from "react-icons/bs";
import Samsung from "./Samsung";


const Samsungs = () => {
    return (
        <div className="samsungs">
            <div className="barLine"></div>
            <div className="header">
                <h1>
                    Samsungs
                </h1>

                <a className='viewMore' href="#">
                    <span>View more</span> 
                    <BsArrowRight />
                </a>
            </div>

            <div className="itemContainer">
                {samsungs.map(samsung => (
                    <Samsung key={samsung.id} samsung={samsung} />
                ))}
            </div>
        </div>
    );
}

export default Samsungs;
