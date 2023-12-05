
import { motion } from "framer-motion"

const ModalSearch = (props)=>{

    return(
             <motion.div 
             animate={{top :["-34%","0%","20%"]}}
             transition={{ duration: 0.5, delay: 0.5}} class="ModalOverlaySearch">
                <div class="modalSearch">
                  <input type="search" placeholder="Search..." autofocus/>
                  <i class="fi fi-tr-circle-xmark closeSearch" onClick={()=>props.setShowSearch(false)}></i>
                  <i class= "fi fi-rr-search search" ></i>
             </div>
             </motion.div > 
    )
}
export default ModalSearch