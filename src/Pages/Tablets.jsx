import Ipad from "../components/Ipad";
import { ipads } from "../data";

const Tablets = () => {
    return (
        <div className="phonesLaptops">
            {/* Banner Header */}
            <div className="phonesLaptopsBanner">
                <h1>Tablet&apos;s</h1>
                <span className="phonesLaptopsBannerImg">
                    <img src="../../public/tablets/ipadpro.png" alt="tabletbanner" />
                </span>
            </div>

            {/* Nav Buttons to toggle between macbooks and galaxy books */}
            <div className="phonesLaptopsNav">
                <a href="#">iPad&apos;s</a>
                <a href="#">Galaxy Tab&apos;s</a>
            </div>

            <div className="categoriesBarLine"></div>


            <div className="itemContainer">
                {ipads.map(ipad => (
                    <Ipad key={ipad.id} ipad={ipad}/> 
                ))}   
            </div>

        </div>
    );
}

export default Tablets;
