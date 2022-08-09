import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import oramaLogo from '../Assets/images/footer_logo.png';

// import required modules
import { Pagination } from "swiper";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="orama_Logo">
            <img src={oramaLogo} alt="" />
            <p>Atlanta, Ga 30325</p>
            <p>United States</p>
            <a href="tel:14703553442"><span>Phone:</span> +1 (470) 355-3442</a> <br />
            <a href="mailTo:info@oramalab.com"><span>Email:</span> info@oramalab.com</a>
          </div>
          <div className="aboutUs">
            <h4>ABOUT US</h4>
            <a href="">Our Product</a>
            <a href="">Documentation</a>
            <a href="">Our Services</a>
            <a href="">Apps Download</a>
          </div>
          <div className="support">
            <h4>SUPPORT</h4>
            <a href="">Get Started Us</a>
            <a href="">Contact Us</a>
            <a href="">Needs Helps?</a>
            <a href="">Join With Us</a>
            <a href="">Ask Question</a>
          </div>
          <div className="quickLinks">
            <h4>QUICK LINKS</h4>
            <a href="">Marketplace</a>
            <a href="">Documentation</a>
            <a href="">Customers</a>
            <a href="">Carrers</a>
          </div>
          <div className="follow_us">
            <p>Follow us</p>
            <i class="fa-brands fa-facebook"></i>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer