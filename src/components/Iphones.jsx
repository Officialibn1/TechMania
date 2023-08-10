import { BsArrowRight } from "react-icons/bs";

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
                
            </div>
        </div>
    );
}

export default Iphones;
