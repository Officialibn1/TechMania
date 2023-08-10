/* eslint-disable react/prop-types */
import { BsStarFill, BsStarHalf, BsHeart } from "react-icons/bs";

const Samsung = ({ samsung }) => {
    return (
        <div className="item phoneItem">
            <div className="itemImg">
                <div className="favourite">
                    <BsHeart />
                </div>
                <img src={samsung.img} alt="galaxybook" />
            </div>

            <div className="itemText">
                <span><b>Color:</b> {samsung.color} <p className="price">{samsung.price}</p> </span>
                <h1>{samsung.name}</h1>
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

export default Samsung;
