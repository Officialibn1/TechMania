import { BsArrowRight } from "react-icons/bs";
import { ipads } from "../data";
import Ipad from "./Ipad";


const Ipads = () => {
    return (
        <div className="ipads">
            <div className="barLine"></div>
            <div className="header">
                <h1>
                    MacBooks
                </h1>
                <a className='viewMore' href="#">View more <BsArrowRight /></a>
            </div>

            <div className="itemContainer">
                {ipads.map(ipad => (
                    <Ipad key={ipad.id} ipad={ipad}/> 
                ))}   
            </div>
        </div>
    );
}

export default Ipads;
