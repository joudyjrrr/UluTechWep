import { motion } from "framer-motion"

const ModalNav = (props)=>{

    return(
        <motion.div class="ModalOverlay"
        initial={{top:"-34%"}}
        animate={{top :["-34%","20%"]}}
        transition={{ duration: .5}}
        >
        <div class="modal">
             <ul>
                 <li> <a href="#">Home</a> </li>
                 <li> <a href="#services"> Serveis</a> </li>
                 <li> <a href="#about">About Us</a> </li>
                 <li> <a href="#contact">Contact</a> </li>
             </ul>
    
     </div>
</motion.div>
    )
}
export default ModalNav