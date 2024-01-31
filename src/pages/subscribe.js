import video from './pexels.mp4';
import {Link} from "react-router-dom" ;
import  * as icons from "https://kit.fontawesome.com/13dcb74736.js";

 export const Subscribe = ()=>{
    return <div className="subscribe">
        <div className="container">
            <div className="video_container">
                <video autoplay loop muted plays-inline src={video}> 
                </video>
            </div>
        </div>

        <div className="social-icon">
            <ul>
                <li><Link to="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link to="#" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                <li><Link to="#" target="_blank"><i className="fa-brands fa-discord"></i></Link></li>
                <li><Link to="#" target="_blank"><i className="fa-brands fa-linkedin"></i></Link></li>
                <li><Link to="#" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link></li>
            </ul>
        </div> 
    </div>
}