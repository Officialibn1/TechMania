import './styles/ItemStyles.css'
import { macBooks } from "../data";
import Macbook from './Macbook';
import { BsArrowRight } from "react-icons/bs";

const Macbooks = () => {
    return (
        <div className="macBook">
            <div className="barLine"></div>
            <div className="header">
                <h1>
                    MacBooks
                </h1>
                <a className='viewMore' href="#">View more <BsArrowRight /></a>
            </div>

            <div className="itemContainer">
                {macBooks.map(mac => (
                    <Macbook key={mac.id} mac={mac}/> 
                ))}
               
            </div>

        </div>
    );
}

export default Macbooks;
