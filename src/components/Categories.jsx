import './styles/Categories.css'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="barLine"></div>
            <div className="header">
                <h1>Categories</h1>
            </div>
            <div className="categoriesItems">

                <div className="categoriesItem">
                    <h1>Phones</h1>
                    
                    <div className="categoriesItemImg">
                        <img src="fold5.png" alt="" />
                    </div>
                </div>

                <div className="categoriesItem">
                    <h1>Laptops</h1>
                   
                   <div className="categoriesItemImg">
                        <img src="book3pro.png" alt="" />
                    </div>
                </div>

                <div className="categoriesItem">
                    <h1>Earpods</h1>
                    
                    <div className="categoriesItemImg">
                        <img src="buds2pro.png" alt="" />
                    </div>
                </div>

                <div className="categoriesItem">
                    <h1>Accessries</h1>
                    <div className="categoriesItemImg">
                        <img src="WatchSeries8.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
