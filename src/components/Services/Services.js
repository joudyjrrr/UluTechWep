import './Services.css'
import SubServices from './SubServices'
import { motion } from "framer-motion"

const Services = ()=>{

    return(
         <motion.div
        initial={{ translateY: "100px" }}
        whileInView={{ translateY: "0px" }}
        transition={{ duration: .5}} class="services" id="services">
        <div class="heading">
            <div class="textArea">
                <div class="title">
                 <span>Services</span>
                </div>
                <h1>services we offer</h1>
                <p>We provide our services with the best quality and the fastest time </p>
            </div>
        </div>
        <div class="servicesCard">
            <SubServices
            class="fa-solid fa-code"
            title="web development"
            desc="We at UluTech provide high-quality website programming and design services that meet all your needs.

            "
            />
               <SubServices
            class="fa-solid fa-paintbrush"
            title="Graphic Design "
            desc="It is undoubtedly indispensable and makes a special and unique imprint for your company or organization"
            />
             <SubServices
            class="fa-solid fa-mobile-screen-button"
            title="Mobile Application Development "
            desc="Many companies build their own mobile applications, and there are many reasons why you should invest in them, whether to increase your profits or facilitate your business and communicate with customers"
            />
           <SubServices
            class="fa-solid fa-gears"
            title="Programming and Technical Solutions "
            desc="     We create software and technology solutions to enable our partners to increase their productivity and competencies "
            />
             <SubServices
            class="fa-solid fa-bullhorn"
            title="E-Marketing"
            desc="Now it has become easy to increase income and profits, open new job markets, and market projects, services, and products at the lowest costs, through advertising and electronic marketing"
            />
              <SubServices
            class="fa-solid fa-cart-shopping"
            title=" E-Commerce Website "
            desc=" Recently, e-commerce has become the most profitable business in the world, which expands and spreads every day. Olotec understands your product well, then starts creating and designing an online store that matches your ideas for the best appearance and increase your profits."
            />
        </div>
       </motion.div>
    )
}
export default Services