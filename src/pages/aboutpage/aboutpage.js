import React from "react";
import "./aboutpage.css"
import galaktika from './galaktika.jpg'
import Title from "../../components/Title/Title";
import Likes from "../../components/Likes/Likes"
import Comments from "../../components/Comments/Comments";

const AboutPage=()=>{
    return(
        <div className="about">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                         <img src={galaktika} alt="galactic" />
                         <Title/>
                         <Likes/>
                         
                    </div>
                    <Comments/>
                </div>
            </div>
        </div>
    )
}
export default AboutPage
