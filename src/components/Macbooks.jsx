import './styles/Macbooks.css'
import './styles/ItemStyles.css'
import { macBooks } from "../data";
import Macbook from './Macbook';

const Macbooks = () => {
    return (
        <div className="macBook">
            <div className="header">
                <h1>
                    MacBooks For You!
                </h1>
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
