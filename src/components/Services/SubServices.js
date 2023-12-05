import './Services.css'



const SubServices = (props)=>{

    return(
        <div class="card" >
        <div class="background"></div>
        <div class=" service-box ">
          <div class="service-icon"><i class={props.class}></i></div>
          <div class="service-content">
            <h3 class="service-title">{props.title}</h3>
            <p class="service-text">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    )

}
export default SubServices

