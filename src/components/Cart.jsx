import './styles/Cart.css'
import './styles/About.css'
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {

    return (
        <>
            <div className="cart" >
                <div className='aboutBanner'>
                    <span>Your Cart <MdShoppingCart /></span>
                </div>


                <div className="cartContainer">
                    <div className="cartItemContainer">
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src="./iphones/iphone14pro.png" alt="" />
                            </div>

                            <div className="cartItemDesc">
                                <h3>iPhone 14 Pro</h3>
                                <p>Purple</p>
                                <span>N670,700</span>
                            </div>

                            <div className="cartItemButtons">
                                <div className="plus"><AiOutlinePlus /></div>
                                <div className="quantity">2</div>
                                <div className="minus"><AiOutlineMinus /></div>
                                <div className="delete"><AiOutlineDelete /></div>
                            </div>
                        </div>
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src="./iphones/iphone14pro.png" alt="" />
                            </div>

                            <div className="cartItemDesc">
                                <h3>iPhone 14 Pro</h3>
                                <p>Purple</p>
                                <span>N670,700</span>
                            </div>

                            <div className="cartItemButtons">
                                <div className="plus"><AiOutlinePlus /></div>
                                <div className="quantity">2</div>
                                <div className="minus"><AiOutlineMinus /></div>
                                <div className="delete"><AiOutlineDelete /></div>
                            </div>
                        </div>
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src="./iphones/iphone14pro.png" alt="" />
                            </div>

                            <div className="cartItemDesc">
                                <h3>iPhone 14 Pro</h3>
                                <p>Purple</p>
                                <span>N670,700</span>
                            </div>

                            <div className="cartItemButtons">
                                <div className="plus"><AiOutlinePlus /></div>
                                <div className="quantity">2</div>
                                <div className="minus"><AiOutlineMinus /></div>
                                <div className="delete"><AiOutlineDelete /></div>
                            </div>
                        </div>
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src="./iphones/iphone14pro.png" alt="" />
                            </div>

                            <div className="cartItemDesc">
                                <h3>iPhone 14 Pro</h3>
                                <p>Purple</p>
                                <span>N670,700</span>
                            </div>

                            <div className="cartItemButtons">
                                <div className="plus"><AiOutlinePlus /></div>
                                <div className="quantity">2</div>
                                <div className="minus"><AiOutlineMinus /></div>
                                <div className="delete"><AiOutlineDelete /></div>
                            </div>
                        </div>
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src="./iphones/iphone14pro.png" alt="" />
                            </div>

                            <div className="cartItemDesc">
                                <h3>iPhone 14 Pro</h3>
                                <p>Purple</p>
                                <span>N670,700</span>
                            </div>

                            <div className="cartItemButtons">
                                <div className="plus"><AiOutlinePlus /></div>
                                <div className="quantity">2</div>
                                <div className="minus"><AiOutlineMinus /></div>
                                <div className="delete"><AiOutlineDelete /></div>
                            </div>
                        </div>
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src="./iphones/iphone14pro.png" alt="" />
                            </div>

                            <div className="cartItemDesc">
                                <h3>iPhone 14 Pro</h3>
                                <p>Purple</p>
                                <span>N670,700</span>
                            </div>

                            <div className="cartItemButtons">
                                <div className="plus"><AiOutlinePlus /></div>
                                <div className="quantity">2</div>
                                <div className="minus"><AiOutlineMinus /></div>
                                <div className="delete"><AiOutlineDelete /></div>
                            </div>
                        </div>
                    </div>

                    <div className="deliverySummary">

                        <div className="detail">
                            <span>Total Items: </span>

                            <span className="price">12</span>
                        </div>

                        <div className="cartBorder"></div>

                        <div className="detail">
                            <span>Subtotal: </span>

                            <span className="price">N1,345,000</span>
                        </div>

                        <div className="cartBorder"></div>

                        <div className="detail">
                            <span>Shipping: </span>

                            <span className="price">N1,345</span>
                        </div>

                        <div className="cartBorder"></div>
                        
                        <div className="detail">
                            <span>Total: </span>

                            <span className="price">N1,346,400</span>
                        </div>
                        
                        <div className="cartBorder"></div>

                        <div className="confirm">
                            <button>Confirm Order</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Cart;
