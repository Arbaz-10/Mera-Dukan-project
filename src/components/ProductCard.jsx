import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import headphone from '../images/headPhone.jpg'
import tab from '../images/tab.jpg'


const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
                <Link to={`${location.pathname == "/" ? "/product/:id" : location.pathname == "/product/:id"
                    ? "/product/:id" : ":id"}`}
                    className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent '><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="product image" />
                        {/* <img src="images/watch-1.jpg" className='img-fluid' alt="product image" /> */}
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids watch bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars count={5} value="4" edit={false} size={24}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
                            Facilis consequatur eaque qui? Fugiat facere adipisci, quo rem accusantium quaerat alias quas quisquam labore cupiditate, voluptates quasi atque aut ea at...
                        </p>
                        <p className="price">
                            $100.00
                        </p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent' ><img src={prodcompare} alt="Productcompare" /></button>
                            <button className='border-0 bg-transparent' ><img src={view} alt="view" /></button>
                            <button className='border-0 bg-transparent' ><img src={addcart} alt="AddCart" /></button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
                <Link to={`${location.pathname == "/" ? "/product/:id" : location.pathname == "/product/:id"
                    ? "/product/:id" : ":id"}`}
                    className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={tab} className='img-fluid' alt="product image" />
                        {/* <img src="images/watch-1.jpg" className='img-fluid' alt="product image" /> */}
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids Tablet multi colored for students
                        </h5>
                        <ReactStars count={5} value="4" edit={false} size={24}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
                            Facilis consequatur eaque qui? Fugiat facere adipisci, quo rem accusantium quaerat alias quas quisquam labore cupiditate, voluptates quasi atque aut ea at...
                        </p>
                        <p className="price">
                            $100.00
                        </p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link><img src={prodcompare} alt="Productcompare" /></Link>
                            <Link><img src={view} alt="view" /></Link>
                            <Link><img src={addcart} alt="AddCart" /></Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard