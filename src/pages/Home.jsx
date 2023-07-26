import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCards from '../components/BlogCards';
import ProductCard from '../components/ProductCard';
import PopularProduct from '../components/PopularProduct';
import Container from '../components/Container';
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img src="images/main-banner.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p> From $1099 or $119/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">

              <div className="small-banner position-relative ">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptop Max</h5>
                  <p> From $1499 <br />
                    or $61.42/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Smartwatch 7</h5>
                  <p> From $99 <br />
                    or $11/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Buy IPad Air</h5>
                  <p> From $499 <br />
                    or $42.61/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Pro</h5>
                  <p> From $99 <br /> or $11/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col">

            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container >

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-1.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screne</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $42.25/mo. for 24mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-2.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of brightness</h6>
                <p className='text-dark'>27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-3.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>SmartPhones</h5>
                <h6 className='text-dark'>IPhone 13 Pro.</h6>
                <p className='text-dark'>Now in green from $999 or $43.62/mo. for 24 mo. Footnote*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-4.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Home Speakers</h5>
                <h6 className='text-dark'>Room-filling sound</h6>
                <p className='text-dark'>From $599 or $32.25/mo. for 12mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="row">
              <PopularProduct />
              <PopularProduct />
              <PopularProduct />
            </div>
          </div>
      </Container >

      <Container class1="featured-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'><img src="images/brand-01.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-02.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-03.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-04.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-05.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-06.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-07.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-08.png" alt="brand" /></div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCards />
            </div>
            <div className="col-3">
              <BlogCards />
            </div>
            <div className="col-3">
              <BlogCards />
            </div>
            <div className="col-3">
              <BlogCards />
            </div>
          </div>
      </Container>
    </>
  )
}

export default Home