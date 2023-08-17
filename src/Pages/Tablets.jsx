
const Tablets = () => {
    return (
        <div className="phonesLaptops">
            {/* Banner Header */}
            <div className="phonesLaptopsBanner">
                <h1>Laptop&apos;s</h1>
                <span className="phonesLaptopsBannerImg">
                    <img src="../../public/banner.png" alt="iphone13probanner" />
                </span>
            </div>

            {/* Nav Buttons to toggle between macbooks and galaxy books */}
            <div className="phonesLaptopsNav">
                <a href="#">MacBook&apos;s</a>
                <a href="#">Galaxy Book&apos;s</a>
            </div>

            <div className="categoriesBarLine"></div>

        </div>
    );
}

export default Tablets;
