import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsInstagram, BsFacebook} from 'react-icons/bs'
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for News</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text"
                  className='form-control py-1'
                  placeholder="Enter Your Email Address"
                  aria-label="Enter Your Email Address"
                  aria-describedby='basic-addon2'
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-5'>
                  Sindurpur, <br />
                  Puruliya, West Bengal <br /> 
                  Pin Code: 723148 
                </address>
                <a href="tel:+91 9749889062" className='mt-3 d-block mb-1 text-white'>+91 9749889062</a>
                <a href="mailto:arbazansary0009@gmail.com" className='mt-2 d-block mb-0 text-white'>arbazansary0009@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white fs-4' href="#">
                    <BsLinkedin/>
                  </a>
                  <a className='text-white fs-4' href="#">
                    <BsInstagram/>
                  </a>
                  <a className='text-white fs-4' href="#">
                    <BsGithub/>
                  </a>
                  <a className='text-white fs-4' href="#">
                    <BsFacebook/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to='/termandconditions' className='text-white py-2 mb-1'>Terms of Services</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 text-white">
              <p className="text-center">&copy; {new Date().getFullYear()}; All rights reserved by CodeByArbaz </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer