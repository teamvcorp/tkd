import './contact.css'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Contact() {
   return (
    <div className='contactPageContainer'> 
       
        <div className='contactTop'>
            <div className='mapImg'> 
            </div>

        <div className='contactTopRight'>
            <p> The TKD Academy <br></br> 503 Lake Avenue North <br></br> Storm Lake, IA 50588 </p>
            <h5> (712) 295-2103 </h5>
        </div>
        </div>

        <div className='contactBottom'>

        <div className="spLayoutBottom background">
            <div className='contactBottomBox'>

        <span>< FaEnvelope color='white' size={75} /></span>
        <p className='contactP'> admin@crossroadfc.com</p>
            </div>
         
         
        </div>

        <div className="spLayoutBottom background">
        <div className='contactBottomBox'>
        <p className='contactP'> Follow us for updates:</p>
        <div className='socialIcons'>

        <span className='iconSocial'>< FaFacebookF color='white' size={35} /></span>
        <span className='iconSocial'>< FaInstagram color='white' size={35} /></span>
        <span className='iconSocial'>< FaLinkedinIn color='white' size={35} /></span>
        </div>
        </div>
          
        </div>

        <div className="spLayoutBottom background">
          

         
           
        </div>

        </div>

    </div>
   )

}  


