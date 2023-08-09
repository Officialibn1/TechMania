import './styles/Navbar.css'
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BsSearch, BsCart4 } from "react-icons/bs";


const Navbar = () => {
    return (
        <nav>
            <a href='/' className="logo">
                <div className="logoImg">
                    <BsCart4 />
                </div>

                <span>TechMania</span>
            </a>

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
