import {Link} from "react-router-dom" ;
import videobg from "./home.mp4";

export const Home = ()=>{
    return <div className="home">
        <video autoplay loop muted src={videobg} type="video/mp4"/>
            <div className="content">
                <h1>Welcome to Stellar</h1>
                <h3>Advance your space exploration</h3>
                
                <Link to="/explore">Start Exploring</Link>
            </div> 
        </div>
}