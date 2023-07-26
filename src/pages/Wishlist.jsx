import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/tab1.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='px-3 py-3'>
                                    <h5 className="title">Apple T1 9.0.1 GB ROM 7.3 Inch With Wi-Fi+4G Tablet</h5>
                                    <h6 className="price">$ 100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='px-3 py-3'>
                                    <h5 className="title">Apple T1 9.0.1 GB ROM 7.3 Inch With Wi-Fi+4G Tablet</h5>
                                    <h6 className="price">$ 100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/speaker.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='px-3 py-3'>
                                    <h5 className="title">Apple T1 9.0.1 GB ROM 7.3 Inch With Wi-Fi+4G Tablet</h5>
                                    <h6 className="price">$ 100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/tab3.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='px-3 py-3'>
                                    <h5 className="title">Apple T1 9.0.1 GB ROM 7.3 Inch With Wi-Fi+4G Tablet</h5>
                                    <h6 className="price">$ 100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Wishlist