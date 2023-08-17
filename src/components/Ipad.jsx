/* eslint-disable react/prop-types */
import { BsHeart, BsStarFill, BsStarHalf } from "react-icons/bs";


const Ipad = ({ ipad }) => {
    return (
        <div className="item phoneItem">
            <div className="itemImg">
            <div className="favourite">
                    <BsHeart />
                </div>
                <img src={ipad.img} alt="macbook" />
            </div>

            <div className="itemText">
                <span>{ipad.chip} <img src={ipad.chipImg} alt="m2chip" /> <p className="price">{ipad.price}</p> </span>
                <h1>{ipad.name}&quot;</h1>
                <div className="review">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                </div>
                <div className="button">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Ipad;
