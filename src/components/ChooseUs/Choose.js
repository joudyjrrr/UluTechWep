
import './Choose.css'
import img from '../../imges/undraw_accept_tasks_re_09mv.svg'
import SubChoose from './SubChoose'
import { motion } from "framer-motion"
const Choose = ()=>{

    return(
        <motion.div
        initial={{ translateY: "100px" }}
        whileInView={{ translateY: "0px" }}
        transition={{ duration: .5}}
        class="Choose">
        <div class="ChooseImg">
            <img src={img}/>
        </div>
        <div class="headingAbout" >
                <div class="title">
              <span>why choose us</span>  
                </div>
                <h1>Why our customers </h1>
                <h1> choose  <span> working
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
    <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
              </svg>    </span>     Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div class="ChooseInfo">
                <SubChoose
                num="01."
                title="latest technologies"
                />
                 <SubChoose
                num="02."
                title="uniqe solutions "
                />
                 <SubChoose
                num="03."
                title="powerful strategies"
                />
            </div>
            <a class=" btn " href="#contact">Get in touch <i class="fas fa-light fa-arrow-right-long"></i></a>
        </div>
        </motion.div>
    )
}
export default Choose