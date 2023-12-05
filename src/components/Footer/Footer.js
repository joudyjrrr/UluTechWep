
import './Footer.css'

const Footer = ()=>{
    return(
        <section class="footer">
            <div className='footerhead'>
            <h3>contact information</h3>
            </div>
           
           <div class="soial">
              <div>
              <i class="fa-solid fa-envelope"></i> <span>info@ulutech-co.com</span>
              </div>
              <div>
              <i class="fa-solid fa-mobile-screen-button"></i><span>00971-552074770</span>
              </div>
              <div>
              <i class="fa-solid fa-location-dot"></i> <span>UAE-Dubai</span>
              </div>
             
           </div>
           <div class="end">
            <span>© 2023 Created by: Joudy Jreis</span>
            <span>Terms of Use | Privacy Policy.</span>
           </div>
        </section>
    )

}
export default Footer