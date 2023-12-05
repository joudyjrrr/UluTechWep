import './About.css'
import SubAbout from './SubAbout'
import img from '../../imges/undraw_searching_re_3ra9.svg'
const About = ()=>{

    return(
        <section class="About" id="about">
        <div class="headingAbout">
          <div class="title">
           <span> About Us</span>
          </div>
          <h1>trusted by worldwide</h1>
          <h1> clients since  <span> 2013
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
    <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
              </svg>    </span>  </h1>
        <p>We aim to be the preferred partner in the fields of information technology, innovation and digital transformation. </p>
      </div><div class="AboutContent">
          <div class="content">
          <SubAbout
          class="fa-solid fa-award"
          title=" first on field "
          />
            <SubAbout
          class="fa-solid fa-gamepad"
          title="easy to reach "
          />
            <SubAbout
          class="fa-solid fa-map-location-dot"
          title="worldwide services  "
          />
            <SubAbout
          class="fa-solid fa-hand-holding-heart"
          title="24/7 support  "
          />
          </div>
          <div class="AboutImg">
          <img src={img} />
          </div>
        </div>
        </section>

    )
}
export default About