import './styles/ItemStyles.css'
import { galaxyBooks } from "../data";
import GalaxyBook from './GalaxyBook';

const GalaxyBooks = () => {
    return (
        <div className="galaxyBook">
            <div className="header">
                <h1>
                    Galaxy Books For You!
                </h1>
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
