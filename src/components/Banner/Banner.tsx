import  BannerProps from "@/types/BannerProps"
import "./Banner.scss"
import React from "react"

const Banner: React.FC<BannerProps> = ({
    title,
    subtitle,
    image

}) =>{
    return(
        <section style={{backgroundImage: `url(${image})`}} className="banner">
            <div className="banner__container">
                <h1 className="banner__title">{title}</h1>
                <p className="banner__subtitle">{subtitle}</p>
                <button className="banner__button">VIEW PROJECT</button>
            </div>
        </section>
    )
}

export default Banner