import './styles/Navbar.css'
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <div className="logoImg">
                    <img src="cart.png" alt="cart logo" />
                </div>

                <span>TechMania</span>
            </div>

            <div className="searchCategory">
                <p>Categories</p>

                <div className="search">
                    <input type="search" alt='search item' placeholder='Search Item. . .'/>
                    <BsSearch />
                </div>
            </div>

            <div className="profileCart">
                <div className="profile">
                    <FaUserAlt />
                    <span>Profile</span>
                </div>

                <div className="cart">
                    <MdShoppingCart />
                    <span>Cart</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
