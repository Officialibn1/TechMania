/* eslint-disable react/prop-types */
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import './styles/ItemStyles.css'

const GalaxyBook = ({ book }) => {
    return (
        <div className="item">
        <div className="itenImg">
            <img src={book.img} alt="galaxybook" />
        </div>

        <div className="itemText">
            <span>{book.chip} <p className="price">{book.price}</p> </span>
            <h1>Galaxy {book.name}</h1>
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

export default GalaxyBook;
