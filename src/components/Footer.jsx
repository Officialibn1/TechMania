import './styles/Footer.css'
import { BsCart4, BsWhatsapp, BsInstagram, BsGithub } from "react-icons/bs";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
    return (
        <footer>
            <div className="left">
            <a href='/' className="logo">
                <div className="logoImg">
                    <BsCart4 />
                </div>

                <span>TechMania</span>
            </a>
            </div>
            
            <div className="middle">
                {/* List of link to any rpoduct categories */}
                <ul>
                    <li><span>Shop</span></li>
                    <li><a href="#">Phones</a></li>
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#">Watches</a></li>
                    <li><a href="#">Pods</a></li>
                    <li><a href="#">Speakers</a></li>
                    <li><a href="#">Accessories</a></li>
                </ul>

                {/* Links to any form of support users need */}
                <ul>
                    <li><span>Support</span></li>
                    <li><a href="#">Chat with Us</a></li>
                    <li><a href="#">Offers</a></li>
                    <li><a href="#">Referral Rewards</a></li>
                    <li><a href="#">Order Help</a></li>
                    <li><a href="#">Product Help</a></li>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Give Your Opinion</a></li>
                </ul>

                {/* Links to about us */}
                <ul>
                    <li><span>About Us</span></li>
                    <li><a href="#">About TechMania</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Our Partners</a></li>
                    <li><a href="#">Our Investors</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                </ul>
                
            </div>

            <div className="right">
                <div className="icons">
                    <a href='#'><BiLogoFacebook /></a>
                    <a href='#'><BsInstagram /></a>
                    <a href='#'><BsWhatsapp /></a>
                    <a href='#'><BiLogoLinkedin /></a>
                    <a href='#'><BsGithub /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
