import React from "react";
import "./SpanText.css"


const SpanText = (props)=>{

    return (
        <div 
            data-aos={props.right?'fade-left':'fade-right'} 
            data-aos-delay='300'
            data-aos-duration='500'
            className={props.right?"ctn-span-text right":"ctn-span-text"}
        >
            
            {
                props.right?
                <>
                    <div className="span-body right-mobile">
                        <div className="span-title yellow-text end-flex right-mobile">
                            {props.title}
                        </div>
                        <div className="span-content end-flex right-mobile">
                            {props.bodyText}
                        </div>
                    </div>


                    <div className="span-icon right-mobile">
                        <img src={props.img}/>
                    </div>
                </>
                :
                <>
                    <div className="span-icon">
                        <img src={props.img}/>
                    </div>
                    <div className="span-body">
                        <div className="span-title yellow-text">
                            {props.title}
                        </div>
                        <div className="span-content">
                            {props.bodyText}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default SpanText;