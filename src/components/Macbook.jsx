/* eslint-disable react/prop-types */
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import './styles/ItemStyles.css'

const Macbook = ({ mac }) => {
    return (
        <div className="item">
        <div className="itenImg">
            <img src={mac.img} alt="macbook" />
        </div>

        <div className="itemText">
            <span>{mac.chip} <img src={mac.chipImg} alt="m2chip" /> <p className="price">{mac.price}</p> </span>
            <h1>{mac.name}&quot;</h1>
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

export default Macbook;
