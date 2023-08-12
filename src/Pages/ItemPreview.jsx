import '../components/styles/ItemStyles.css'
import '../components/styles/ItemPreview.css'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
const ItemPreview = () => {
    return (
        <div className='itemPreview'>
            <div className="itemPreviewImg">
                <img src="./iphones/iphone14progold.png" alt="iphone14progold" />
            </div>
            <div className="itemPreviewDetails">
                <div className="desc">
                    <h1 className="title">iPhone 14 Pro <span>(Gold)</span></h1>
                    
                    <p>6.1-inch display</p>
                    
                    {/* Price range of item */}
                    <p>From N750,000 - N1,080,000</p>
                    
                    {/* Review details of item */}
                    <div className="review">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                        <span>(127)</span>
                    </div>

                    <div className="cartBorder"></div>

                    {/* Storage types */}
                    <div className="storage">
                        <h3>Storage: </h3>
                        <span>128GB</span>
                        <span>256GB</span>
                        <span>512GB</span>
                    </div>

                    <div className="cartBorder"></div>
                </div>

                {/* Buttons to increase or reduce quantity of item to buy */}
                <div className="buttons">
                    <span className="plus"><AiOutlinePlus /></span>
                    <p className="quantity">2</p>
                    <span className="minus"><AiOutlineMinus /></span>
                </div>

                <div className="cartBorder"></div>
                
                {/* Buttons to add to card or buy now */}
                <div className="addBuy">
                    <button className="addToCart">Add to Cart</button>
                    <button className="buyNow">Buy Now</button>
                </div>

                <div className="cartBorder"></div>
                
                <div className="deliveryInformation">
                    <CiDeliveryTruck />
                    <h2>Delivery: <span>({'Free'})</span></h2>
                </div>



            </div>
        </div>
    );
}

export default ItemPreview;
