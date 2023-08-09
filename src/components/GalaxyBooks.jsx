import './styles/ItemStyles.css'
import { galaxyBooks } from "../data";
import GalaxyBook from './GalaxyBook';
import { BsArrowRight } from "react-icons/bs";

const GalaxyBooks = () => {
    return (
        <div className="galaxyBook">
            <div className="barLine"></div>
            <div className="header">
                <h1>
                    Galaxy Books For You!
                </h1>

                <a className='viewMore' href="#">
                    <span>View more</span> 
                    <BsArrowRight />
                </a>
            </div>

            <div className="itemContainer">
                {galaxyBooks.map(book => (
                    <GalaxyBook key={book.id} book={book}/> 
                ))}
               
            </div>

        </div>
    );
}

export default GalaxyBooks;
