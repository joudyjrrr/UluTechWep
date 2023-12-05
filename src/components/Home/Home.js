
import img from '../../imges/24.png'
import './Home.css'
import { motion } from "framer-motion"

const Home = ()=>{
    return(
        <motion.div
        initial={{ translateY: "100px" }}
        whileInView={{ translateY: "0px" }}
        transition={{ duration: .5}}
         id="hero" class=" row"  > 
 <div class="heroAreaText" >
  <div class="iconsSoial">
      <ul>
        <li><a href="https://www.facebook.com/ulutechsy"><i class="fab fa-facebook-f sc-icon"></i></a></li>
        <li><a href='<i class="fab fa-instagram sc-icon"></i>'><i class="fab fa-instagram sc-icon"></i></a></li>
        <li> <a href="https://www.linkedin.com/company/ulutechsy/"><i class="fab fa-linkedin sc-icon"></i></a></li>
        <li> <a href="https://wa.me/message/H72N52B7GGMZH1"><i class="fa-brands fa-whatsapp"></i></a></li>
      </ul>
  </div>
  <div class="titleHome">
    <span> IT solutions</span> 
  </div>
  <h1>Make the <span>Difference </span></h1>
  <p>
  UluTech provides integrated solutions in the field of technical and software services
A team with more than 10 years of experience
  </p>
  <a href="" class="btn"> See More</a>
 </div>

 <div class="heroImg" >
  <img src={img} alt=""/>
 </div>
</motion.div>
    )
}
export default Home