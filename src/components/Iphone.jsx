/* eslint-disable react/prop-types */
import { BsStarFill, BsStarHalf, BsHeart } from "react-icons/bs";

const Iphone = ({ iPhone }) => {
    return (
        <div className="item phoneItem">
            <div className="itemImg">
                <div className="favourite">
                    <BsHeart />
                </div>
                <img src={iPhone.img} alt="galaxybook" />
            </div>

            <div className="itemText">
                <span>{iPhone.color} <p className="price">{iPhone.price}</p> </span>
                <h1>{iPhone.name}</h1>
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

export default Iphone;
