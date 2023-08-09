import './styles/Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="bannerText">
                <p>MacBook Pro</p>
                <h1>
                    Pro anywhere.
                </h1>
                <span>
                    <p>Supercharged by</p>
                    <img src="m2chip.png" alt="" />
                </span>
            </div>

            <div className="bannerImg">
                <img src="macbookpro.png" alt="macbook banner" />
            </div>
        </div>
    );
}

export default Banner;
