import './ContactUs.css'
import { motion } from "framer-motion"
const ContactUs = ()=>{
function changeColor(event) {
  event.target.previousElementSibling.style.color = "#FFE500";
  event.target.style.border = "1px solid #FFE500";
  console.log("ssks")
}

function revertColor(event) {
  event.target.previousElementSibling.style.color = "#fff";
  event.target.style.border = "1px solid #ffffff7d";
}



    return(
         <motion.div
        initial={{ translateY: "100px" }}
        whileInView={{ translateY: "0px" }}
        transition={{ duration: .5}} 
        class="contact" id="contact">
             <div class="headingAbout">
          <div class="title">
          <span>Contact us</span>  
          </div>
          <h1> Find Us on google map</h1>
          </div>
            <div class="location">
            <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57769.144336695565!2d55.30184412333984!3d25.18394189643073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1693406809929!5m2!1sar!2s" width="500px" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div class="info-panel">
                    <h4 class="location-title">Dubai</h4>
                    <div class="line-on-side "> </div>
                    <p class="location-address">UAE , Dubai</p>
                    <div class="location-card  ">
                    <i class="fa-solid fa-envelope"></i>
                      <div class="card-content">
                        <h6 class="content-title">email:</h6><a class="email link" href="mailto:yourname@example.com">info@ulutech-sy.com</a>
                      </div>
                    </div>
                    <div class="location-card  ">
                    <i class="fa-solid fa-phone-volume"></i>
                      <div class="card-content">
                        <h6 class="content-title">phone:</h6><a class="tel link" href="tel:0123456789">00971-552074770</a>
                      </div>
                    </div>
                    <div class="location-card  ">
                    <i class="fa-brands fa-facebook"></i>
                      <div class="card-content">
                        <h6 class="content-title">Facebook:</h6><a class="tel link" href="https://www.facebook.com/ulutechsy">Follow Us</a>
                      </div>
                    </div>
                    <div class="location-card  ">
                    <i class="fa-brands fa-linkedin"></i>
                      <div class="card-content">
                        <h6 class="content-title">LinkedIn:</h6><a class="tel link" href="https://www.linkedin.com/company/ulutechsy/">Follow Us</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-panel">
                  <h1>Have any questions? Let's answer them</h1>
                  <form>
                    <div class="inputs">
                    <div class="name">
                  <label htmlFor='name'>Name</label>
                    <input type='text' id="name" onFocus={changeColor} onBlur={revertColor}/>
                  </div>
                 <div class="email">
                 <label htmlFor='email'>Email</label>
                    <input type='email' id="email"  onFocus={changeColor} onBlur={revertColor}/>
                 </div>
                    </div>
             
              <div class="subject">
              <label htmlFor='Subject'>Subject</label>
                    <input type='text' id="Subject"  onFocus={changeColor} onBlur={revertColor}/>
              </div>
                
              <div class="massege">
              <label htmlFor='massege'>Your Massege</label>
                    <textarea type='text' id="massege"  onFocus={changeColor} onBlur={revertColor}/>
              </div>
                  </form>
                  <a href='#' class="btn">Send Your Massege </a>
                </div>
      
        </motion.div>
    )

}
export default ContactUs