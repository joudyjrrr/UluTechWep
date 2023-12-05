import './statistics.css'
import { motion } from "framer-motion"
import React, {  useEffect, useState } from 'react';
import CountUp from 'react-countup';
import img1 from '../../imges/1.png'
import img2 from '../../imges/2.png'
import img3 from '../../imges/3.png'
import   { Swiper, SwiperSlide   } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
const Statistics = () => {
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const { top } = document.getElementById("Statistics").getBoundingClientRect();
      if (top <= window.innerHeight && !startCount) {
        console.log("Reached Statistics!");
        setStartCount(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  return (
    <motion.div 
      initial={{ translateY: "100px" }}
      whileInView={{ translateY: "0px" } }
      transition={{ duration: 0.5 }}
      id="Statistics"
    >
      <div className="Statisticsontent">
        <div className="statisInfo">
        <i class="fa-solid fa-calendar-plus"></i>
          <p className="stat-num ">
            <span >
              <CountUp start={0} end={startCount? 28 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc">Created jobs</span>
        </div>
        <div className="statisInfo">
          <i className="fa-solid fa-lightbulb"></i>
          <p className="stat-num ">
            <span >
              <CountUp start={0} end={startCount? 75 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc">finished projects</span>
        </div>
        <div className="statisInfo">
          <i className="fa-solid fa-user"></i>
          <p className="stat-num ">
            <span >
              <CountUp start={0} end={startCount? 100 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc"> happy customers</span>
        </div>
        <div className="statisInfo">
          <i className="fa-solid fa-calendar-plus"></i>
          <p className="stat-num ">
            <span>
              <CountUp start={0} end={startCount? 13 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc">yearsOf experience</span>
        </div>
      </div>

      
      <div className='custmor'>
      <div class="headingAbout">
      <div class="title">
     <span>testimonials</span> 
       </div>
            <h1 >customers testmonials</h1>
          </div>

          <Swiper
          modules={[Autoplay]} 
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      onSlideChange={() => console.log('slide change')}
           className='contetn-custmour'>
            <SwiperSlide className='custmour-item'>
              <div className='custmour-content'>
              <img src={img1}/>
              <p class="custmour-text"> ipsum dolor sit amet consectetur adipisicing elit.  adipisicing elit </p>
              </div>
            <h4 className='custmour-name'>joudy jreis</h4>  
        </SwiperSlide>
        <SwiperSlide className='custmour-item'>
              <div className='custmour-content'>
              <img src={img1}/>
              <p class="custmour-text"> ipsum dolor sit amet consectetur adipisicing elit.  adipisicing elit </p>
              </div>
            <h4 className='custmour-name'>joudy jreis</h4>  
        </SwiperSlide>
        <SwiperSlide className='custmour-item'>
              <div className='custmour-content'>
              <img src={img1}/>
              <p class="custmour-text"> ipsum dolor sit amet consectetur adipisicing elit.  adipisicing elit </p>
              </div>
            <h4 className='custmour-name'>joudy jreis</h4>  
        </SwiperSlide>
            <SwiperSlide className='custmour-item'>
              <div className='custmour-content'>
              <img src={img2}/>
              <p class="custmour-text"> ipsum dolor sit amet consectetur adipisicing elit.  adipisicing elit</p>
              </div>
            <h4 className='custmour-name'>joudy jreis</h4>  
            </SwiperSlide>
            <SwiperSlide className='custmour-item'>
              <div className='custmour-content'>
              <img src={img3}/>
              <p class="custmour-text"> ipsum dolor sit amet consectetur adipisicing elit.  adipisicing elit</p>
              </div>
            <h4 className='custmour-name'>joudy jreis</h4>  
            </SwiperSlide>
    
         
          </Swiper>
      </div>
    </motion.div>
  )
}

export default Statistics;