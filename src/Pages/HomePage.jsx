import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from 'swiper'
import Slider from '@mui/material/Slider';
// import required modules
import { Pagination } from "swiper";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import heroBg from '../Assets/images/hero-bg-01.jpg'
import { motion } from "framer-motion"

// import svg1 from '../Assets/svgs/services-icons-01.svg'
// import Icon from 'react-svg-use'


import { Navigation } from "swiper";

import {ReactComponent as Svg1} from '../Assets/svgs/services-icons-01.svg';
import {ReactComponent as Svg2} from '../Assets/svgs/services-icons-02.svg';
import {ReactComponent as Svg3} from '../Assets/svgs/services-icons-03.svg';
import {ReactComponent as Svg4} from '../Assets/svgs/services-icons-04.svg';
import {ReactComponent as Svg5} from '../Assets/svgs/services-icons-05.svg';
import {ReactComponent as Svg6} from '../Assets/svgs/services-icons-06.svg';

import About1 from '../Assets/images/about-images-01.jpg'
import About2 from '../Assets/images/about-images-02.jpg'
import About3 from '../Assets/images/about-images-03.jpg'
import About4 from '../Assets/images/about-images-04.jpg'
import About5 from '../Assets/images/about-images-05.jpg'

import whyOrama1 from '../Assets/images/why-orama-images-01.png'
import whyOrama2 from '../Assets/images/why-orama-images-02.png'
import whyOrama3 from '../Assets/images/why-orama-images-03.png'

import ourworktest from '../Assets/images/our-work-06.jpg'

import howwework1 from '../Assets/images/how-we-work-icons-01.png'
import howwework2 from '../Assets/images/how-we-work-icons-02.png'
import howwework3 from '../Assets/images/how-we-work-icons-03.png'
import howwework4 from '../Assets/images/how-we-work-icons-04.png'

import howrighticon from '../Assets/images/howwework-right-icon-05.png'

import blog1 from '../Assets/images/blogimages-01.png'
import blog2 from '../Assets/images/blogimages-02.png'
import blog3 from '../Assets/images/blogimages-03.png'

import { FreeMode } from "swiper";

import DrugSlider from '../Components/DrugSlider'

const HomePage = () => {
  
  SwiperCore.use([Autoplay])

  function valuetext(value) {
    return `${value}°C`;
  }

  // const [handleChange, setHandleChange] = useState()

  // const pr = () => {
  //   console.log('lsdkjf')
  // }

  const sngVariantsh1 = {
    hidden: { 
      opacity: 0.2,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration : 2,
      ease: 'easeInOut', 
      },
    }
  }

  const sngVariantsh4 = {
    hidden: { 
      opacity: 0.2,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration : 1,
      ease: 'easeInOut', 
      },
    }
  }

  const sngVariantsp = {
    hidden: { 
      opacity: 0.2,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration : 3,
      ease: 'easeInOut', 
      },
    }
  }

  const sngVariantsbutton = {
    hidden: { 
      opacity: 0.2,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration : 3.5,
      ease: 'easeInOut', 
      },
    }
  }


  const sngVariantsWatter = {
    hidden: { 
      opacity: 0.2,
      y: -200
    },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration : 2,
        ease: 'easeInOut', 
      },
    }
  }

  const sngVariantsShape = {
    hidden: {
      opacity: 0.2,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0, 
      transition: { duration : 2,
        ease: 'easeInOut', 
      },
    }
  }


  return (
    <>
      <NavBar />
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{height: '800px', width: '100%', overflow: 'hidden', position: "relative"}}
        loop={true}
        // onActiveIndexChange={}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-bg-container">
              <div className="container">

                <motion.h4
                variants={sngVariantsh4}
                initial='hidden'
                animate='visible'
                >THINK CREATE
                </motion.h4>

                <motion.h1
                variants={sngVariantsh1}
                initial='hidden'
                animate='visible'
                >OUR UX/UI <br />
                DESIGN AGENCY.
                </motion.h1>

                <motion.p
                variants={sngVariantsp}
                initial='hidden'
                animate='visible'
                >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </motion.p>

                <motion.button
                variants={sngVariantsbutton}
                initial='hidden'
                animate='visible'
                ><span>+ GET STARTED</span>
                </motion.button>

              </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="hero-bg-container">
              <div className="container">

              <motion.h4
                variants={sngVariantsh4}
                initial='hidden'
                animate='visible'
                >THINK CREATE
                </motion.h4>

                <motion.h1
                variants={sngVariantsh1}
                initial='hidden'
                animate='visible'
                >OUR UX/UI <br />
                DESIGN AGENCY.
                </motion.h1>

                <motion.p
                variants={sngVariantsp}
                initial='hidden'
                animate='visible'
                >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </motion.p>

                <motion.button
                variants={sngVariantsbutton}
                initial='hidden'
                animate='visible'
                ><span>+ GET STARTED</span>
                </motion.button>
              </div>
          </div>
          </SwiperSlide>
          <motion.svg
            style={{position: 'absolute', top: '91px', left: '60%', height: '20%', zIndex: '1'}}
            viewBox='0 0 128 206.09'
            variants={sngVariantsWatter}
            initial='hidden'
            animate='visible'
            >
              <path
              fill='#3d92c1'
              // variants={sngVariantsWatterPath}
              d={'M128,142.13a64,64,0,0,1-128,0C0,106.81,64,0,64,0S128,106.81,128,142.13Z'}
              />
          </motion.svg>
          <motion.svg
            style={{position: 'absolute', top: '91px', right: '0', height: '20%', zIndex: '1'}}
            viewBox='0 0 112.06 216.64'
            variants={sngVariantsShape}
            initial='hidden'
            animate='visible'
            >
              <path
                fill='#f69e44'
                // variants={sngVariantsWatterPath}
                d={'M111.81,76.07a31.45,31.45,0,0,1-7.93,2h0c-.27,0-.55,0-.83,0a41.12,41.12,0,0,1-18.11-3.42c-.31-.17-.62-.36-.94-.51A40.28,40.28,0,0,1,65.43,56.29,42.13,42.13,0,0,1,61.27,43.4h0a41.55,41.55,0,0,1,.89-14.82A63.75,63.75,0,0,1,65,20.63a49.5,49.5,0,0,1,4.47-6.92,7.68,7.68,0,0,0,1.11-7.49,7.5,7.5,0,0,0-1.48-2.75A8.92,8.92,0,0,0,63.64.2h0a1.18,1.18,0,0,0,0-.2H59.28a1.18,1.18,0,0,0,0,.2h0c-2.2.13-4.38.43-6.57.73A57.4,57.4,0,0,0,30.27,9,62.26,62.26,0,0,0,6.09,35.74,60.92,60.92,0,0,0,0,63.19a8.85,8.85,0,0,0,4.05,7.6h0a9,9,0,0,0,10.11.43c.42.07.67-.22.93-.45a37.59,37.59,0,0,1,16.84-8.44,2.17,2.17,0,0,0,.36,0,34.51,34.51,0,0,1,20.09,1.87c12.4,5.09,20,14.43,23.4,27.26,1.64,6.22,2.07,12.55,0,18.78-1.08,3.24-2.61,6.34-3.8,9.55a77.37,77.37,0,0,0-4.25,34.75,54.5,54.5,0,0,0,2.07,11,41.66,41.66,0,0,0,2,6.74,68.59,68.59,0,0,0,6.92,14.36c.17.32.32.64.51.94A77.91,77.91,0,0,0,94.09,205a74.46,74.46,0,0,0,17.44,11.45h0c.13.21.32.21.53.2V76.05Z'}
              />
          </motion.svg>
      </Swiper> 

      <div className="services">
        <div className="container">
          <div className="my-progress-bar">
            <div>
              <h1>Services</h1>
              <h4>An agency is a business <br /> that provides specific Portfolio.</h4>
            </div>
            <div>
              <p>There are many variations of passages of Lorem Ipsum available, have suffered in form, by injected humour.</p>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                // marks
                min={10}
                max={100}
              />
            </div>
          </div>
          <div className="services-slider">
            <div className="service-box">
              <div></div>
              <div>
                <Svg1 />
                <h5>UI/UX Design</h5>
                <p>Eiusmod tempor incidi iusmod dunt ut labore.</p>
                <button><i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            <div className="service-box">
              <div></div>
              <div>
                <Svg2 />
                <h5>UI/UX Design</h5>
                <p>Eiusmod tempor incidi iusmod dunt ut labore.</p>
                <button><i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            <div className="service-box">
              <div></div>
              <div>
                <Svg3 />
                <img src="../Assets/svgs/Untitled-3.png" alt="" />
                <h5>UI/UX Design</h5>
                <p>Eiusmod tempor incidi iusmod dunt ut labore.</p>
                <button><i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            <div className="service-box">
              <div></div>
              <div>
                <Svg4 />
                <img src="../Assets/svgs/Untitled-3.png" alt="" />
                <h5>UI/UX Design</h5>
                <p>Eiusmod tempor incidi iusmod dunt ut labore.</p>
                <button><i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            <div className="service-box">
              <div></div>
              <div>
                <Svg5 />
                <img src="../Assets/svgs/Untitled-3.png" alt="" />
                <h5>UI/UX Design</h5>
                <p>Eiusmod tempor incidi iusmod dunt ut labore.</p>
                <button><i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            <div className="service-box">
              <div></div>
              <div>
                <Svg6 />
                <img src="../Assets/svgs/Untitled-3.png" alt="" />
                <h5>UI/UX Design</h5>
                <p>Eiusmod tempor incidi iusmod dunt ut labore.</p>
                <button><i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="container">
          <div className="about-text">
            <div>
              <h1>About Us</h1>
              <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
              <p>Nulla feugiat aliquam purus, ac ultrices augue aliquam vel. Sed venenatis a nunc.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur alias veniam soluta, laudantium esse eius et architecto sit minima laboriosam suscipit ipsam laborum enim.</p>
              <button><span>+ GET STARTED</span></button>
            </div>
          </div>
          <div className="about-images">
              <img src={About1} alt="" style={{height: '143px'}} />
              <img src={About2} alt="" style={{height: '73px'}} />
              <img src={About3} alt="" style={{height: '94px'}} />
              <img src={About4} alt="" style={{height: '104px'}} />
              <img src={About5} alt="" style={{height: '108px'}} />
          </div>
        </div>
      </div>

      <div className="whyOrama">
          <h1>Why Choose Oramalab</h1>
        <div className="container-fluid">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="imgs-why-orama">
                <h1>SOCIAL MEDIA DESIGN AGENCY.</h1>
                <div>
                  <div>
                    <img src={whyOrama1} alt="" />
                    <p>6000,000K</p>
                  </div>
                  <div>
                    <img src={whyOrama2} alt="" />
                    <p>6000,000K</p>
                  </div>
                  <div>
                    <img src={whyOrama3} alt="" />
                    <p>6000,000K</p>
                  </div>
                </div>

                <div>
                  <p>KAMRUL ISLAM</p>
                  <p>Exclusive at UX/UI</p>
                </div>

              </div>
              <div className="text-why-orama">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi impedit harum hic excepturi neque, earum id, obcaecati exercitationem voluptas consequatur officiis illo sapiente </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="imgs-why-orama">
                <h1>SOCIAL MEDIA DESIGN AGENCY.</h1>
                <div>
                  <div>
                    <img src={whyOrama1} alt="" />
                    <p>6000,000K</p>
                  </div>
                  <div>
                    <img src={whyOrama2} alt="" />
                    <p>6000,000K</p>
                  </div>
                  <div>
                    <img src={whyOrama3} alt="" />
                    <p>6000,000K</p>
                  </div>
                </div>

                <div>
                  <p>KAMRUL ISLAM</p>
                  <p>Exclusive at UX/UI</p>
                </div>

              </div>
              <div className="text-why-orama">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi impedit harum hic excepturi neque, earum id, obcaecati exercitationem voluptas consequatur officiis illo sapiente </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="imgs-why-orama">
                <h1>SOCIAL MEDIA DESIGN AGENCY.</h1>
                <div>
                  <div>
                    <img src={whyOrama1} alt="" />
                    <p>6000,000K</p>
                  </div>
                  <div>
                    <img src={whyOrama2} alt="" />
                    <p>6000,000K</p>
                  </div>
                  <div>
                    <img src={whyOrama3} alt="" />
                    <p>6000,000K</p>
                  </div>
                </div>

                <div>
                  <p>KAMRUL ISLAM</p>
                  <p>Exclusive at UX/UI</p>
                </div>

              </div>
              <div className="text-why-orama">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi impedit harum hic excepturi neque, earum id, obcaecati exercitationem voluptas consequatur officiis illo sapiente </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="Ourwork">
        <div className="container">
          <div className="my-progress-bar">
              <div>
                <h1>Our Work</h1>
                <h4>An agency is a business 
                  that provides specific Portfolio.</h4>
              </div>
              <div>
                <p>There are many variations of passages of Lorem Ipsum available, have suffered in form, by injected humour.</p>
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  // marks
                  min={10}
                  max={100}
                />
              </div>
            </div>
        </div>
        <div className="container-fluid">
        <div className="our-work-slide">
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                505: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 3
                },
                1024: {
                  slidesPerView: 4
                },
                1300: {
                  slidesPerView: 5
                },
            }}
            >
              <SwiperSlide className='our-work-swiper'>
                <div>
                  <img src={ourworktest} alt="" style={{width: '100%', height: '100%'}}/>
                  <div>
                    <p>WEBSITE DESIGN</p>
                    <b>BOOK COVER DESIGN.</b>
                  </div>
                </div>
                </SwiperSlide>
              <SwiperSlide className='our-work-swiper'>
                <div>
                  <img src={ourworktest} alt=""  style={{width: '100%', height: '100%'}}/>
                  <div>
                    <p>WEBSITE DESIGN</p>
                    <b>BOOK COVER DESIGN.</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='our-work-swiper'>
                <div>
                  <img src={ourworktest} alt=""  style={{width: '100%', height: '100%'}}/>
                  <div>
                    <p>WEBSITE DESIGN</p>
                    <b>BOOK COVER DESIGN.</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='our-work-swiper'>
                <div>
                  <img src={ourworktest} alt=""  style={{width: '100%', height: '100%'}}/>
                  <div>
                    <p>WEBSITE DESIGN</p>
                    <b>BOOK COVER DESIGN.</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='our-work-swiper'>
                <div>
                  <img src={ourworktest} alt=""  style={{width: '100%', height: '100%'}}/>
                  <div>
                    <p>WEBSITE DESIGN</p>
                    <b>BOOK COVER DESIGN.</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='our-work-swiper'>
                <div>
                  <img src={ourworktest} alt=""  style={{width: '100%', height: '100%'}}/>
                  <div>
                    <p>WEBSITE DESIGN</p>
                    <b>BOOK COVER DESIGN.</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='our-work-swiper'>
                <div>
                  <img src={ourworktest} alt=""  style={{width: '100%', height: '100%'}}/>
                  <div>
                    <p>WEBSITE DESIGN</p>
                    <b>BOOK COVER DESIGN.</b>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='our-work-swiper'> 
                <div>
                  <img src={ourworktest} alt=""  style={{width: '100%', height: '100%'}}/>
                  <div>
                    <p>WEBSITE DESIGN</p>
                    <b>BOOK COVER DESIGN.</b>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="container">
          <button button><span>+ GET STARTED</span></button>
        </div>
      </div>

      <div className="how-we-work">
        <div className="container">
          <h1>Orama Lab</h1>
          <h3>How we work</h3>
          <h3>An agency is a business
          that provides Pricing Table.</h3>
          <div className="boxes_container">
            <div className="how-we-work-card">
              <img src={howrighticon} alt="" />
              <img src={howwework1} alt="" />
              <h5>Commitment</h5>
              <p>Your business success is ours; 
              we commit to provide you with 
              the ultimate service</p>
            </div>
            <div className="how-we-work-card">
              <img src={howrighticon} alt="" />
              <img src={howwework2} alt="" />
              <h5>Commitment</h5>
              <p>Your business success is ours; 
              we commit to provide you with 
              the ultimate service</p>
            </div>
            <div className="how-we-work-card">
              <img src={howrighticon} alt="" />
              <img src={howwework3} alt="" />
              <h5>Commitment</h5>
              <p>Your business success is ours; 
              we commit to provide you with 
              the ultimate service</p>
            </div>
            <div className="how-we-work-card">
              <img src={howrighticon} alt="" />
              <img src={howwework4} alt="" />
              <h5>Commitment</h5>
              <p>Your business success is ours; 
              we commit to provide you with 
              the ultimate service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Blog_container">
        <div className="container">
          <h1>BLOG</h1>
          <h5>WE DO AWESOME CONTRIBUTE FOR OUR CLIENTS. 
          CHECK SOME OF LETEST NEWS.</h5>
          <div className="blog_boxes">
            <div className="box">
              <div className="image_container">
                <img src={blog1} alt="" />
                <div className="data_boxes">
                  <p>06 SEPTEMBER 2022</p>
                </div>
              </div>
                <button>BUSINESS</button>
                <h4>PRAESENT A CONGUE ANTE PRAESENT.</h4>
                <p>Morbi dapibus in mauris a eleifend. Quisque 
                laoreet ex, in maximus diam facilisis.</p>
            </div>
          <div className="box">
            <div className="image_container">
              <img src={blog2} alt="" />
              <div className="data_boxes">
                <p>06 SEPTEMBER 2022</p>
              </div>
            </div>
              <button>BUSINESS</button>
              <h4>PRAESENT A CONGUE ANTE PRAESENT.</h4>
              <p>Morbi dapibus in mauris a eleifend. Quisque 
              laoreet ex, in maximus diam facilisis.</p>
          </div>
          <div className="box">
            <div className="image_container">
              <img src={blog3} alt="" />
              <div className="data_boxes">
                <p>06 SEPTEMBER 2022</p>
              </div>
            </div>
              <button>BUSINESS</button>
              <h4>PRAESENT A CONGUE ANTE PRAESENT.</h4>
              <p>Morbi dapibus in mauris a eleifend. Quisque 
              laoreet ex, in maximus diam facilisis.</p>
          </div>
        </div>
      </div>
    </div>  
    <Footer />
    </>
  )
}

export default HomePage