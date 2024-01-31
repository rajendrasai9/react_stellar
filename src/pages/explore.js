import satellite from "../images/satellite.jpg"
import earth from "../images/earth.jpeg"
import constellation from "../images/constellation.jpeg"
import solar from "../images/solar.jpg"
import Stellar from "../images/stellar.jpg"
import venus from "../images/venus.jpeg"
import planet from "../images/planet.jpg"

export const Explore = ()=>{
    return <div className="explore">
        <div className="blog-heading">
            <span>Exploring About Our</span>
            <h3>FEATURED STORIES</h3>
        </div>
        
        <div className="blog-container">
            <div className="blog-box">
                <div className="blog-img">
                    <img src={satellite} alt="Blog"/>
                </div>
                <div className="blog-text">
                    <span>5 th January 2023 / Satellite</span>
                    <a href="#" className="blog-title">What has happened</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid corrupti ab laboriosam amet sapiente quaerat quibusdam perferendis, delectus, velit distinctio porro quod voluptatum necessitatibus laborum! Reiciendis et dolorem repellendus.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="blog-box">
                <div className="blog-img">
                    <img src={earth} alt="Blog"/>
                </div>
                <div className="blog-text">
                    <span>5 th January 2023 / Earth</span>
                    <a href="#" className="blog-title">What has happened</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid corrupti ab laboriosam amet sapiente quaerat quibusdam perferendis, delectus, velit distinctio porro quod voluptatum necessitatibus laborum! Reiciendis et dolorem repellendus.</p>
                    <a href="#">Read More</a>

                </div>
            </div>

            <div className="blog-box">
                <div className="blog-img">
                    <img src={solar} alt="Blog"/>
                </div>
                <div className="blog-text">
                    <span>5 th January 2023 / Solar Eclipse</span>
                    <a href="#" className="blog-title">What has happened</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid corrupti ab laboriosam amet sapiente quaerat quibusdam perferendis, delectus, velit distinctio porro quod voluptatum necessitatibus laborum! Reiciendis et dolorem repellendus.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="blog-box">
                <div className="blog-img">
                    <img src={constellation} alt="Blog"/>
                </div>
                <div className="blog-text">
                    <span>5 th January 2023 / Constellation</span>
                    <a href="#" className="blog-title">What has happened</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid corrupti ab laboriosam amet sapiente quaerat quibusdam perferendis, delectus, velit distinctio porro quod voluptatum necessitatibus laborum! Reiciendis et dolorem repellendus.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="blog-box">
                <div className="blog-img">
                    <img src={venus} alt="Blog"/>
                </div>
                <div className="blog-text">
                    <span>5 th January 2023 / Venus</span>
                    <a href="#" className="blog-title">What has happened</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid corrupti ab laboriosam amet sapiente quaerat quibusdam perferendis, delectus, velit distinctio porro quod voluptatum necessitatibus laborum! Reiciendis et dolorem repellendus.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="blog-box">
                <div className="blog-img">
                    <img src={satellite} alt="Blog"/>
                </div>
                <div className="blog-text">
                    <span>5 th January 2023 / Satellite</span>
                    <a href="#" className="blog-title">What has happened</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid corrupti ab laboriosam amet sapiente quaerat quibusdam perferendis, delectus, velit distinctio porro quod voluptatum necessitatibus laborum! Reiciendis et dolorem repellendus.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
}