import React from "react";
import "./Card.css"

const Card = (props)=>{

    return (
        <div className="ctn-card" data-aos={props.right?'fade-left':'fade-right'}
            data-aos-delay='300'
            data-aos-duration='500'
        >
            <div className="icon-card">
                <img src={props.img}/>
            </div>
            <span className="card-title yellow-text">
                {props.title}
            </span>
            <span className="body-text">
                {props.bodyText}
            </span>
        </div>
    )

}

export default Card;