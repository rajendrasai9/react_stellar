import {Link} from "react-router-dom" ;
import Logo from "../images/stellar_cropped.jpg"
export const Navbar = ()=>{
    return <div className="navbar">
        <img className="logo" src={Logo} alt="logo"/>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/whatwedo">What We Do</Link>
        <Link to="/subscribe">Subscribe</Link>
    </div>
}