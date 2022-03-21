import React, { useEffect, useState } from "react";
import SpanText from "../../components/spanText/SpanText";
import spansInfos from "./spans.json"
import "./Proposito.css"

const Proposito = (props)=>{
    const [spansTexts,setSpansTexts] = useState([])

    useEffect(()=>{
        const spans = spansInfos.map(infos=>{
            return <SpanText img={infos.img} title={infos.title} bodyText={infos.bodyText} right={infos.right}/>
        })
        setSpansTexts(spans)
    },[])

    return (
        <div className="ctn-proposito">
            <div data-aos='fade-down' 
                data-aos-delay='300' 
                data-aos-duration='500'
                className="title"
            >
                PROPÓSITO
            </div>
            <div className="proposito-content">
                {spansTexts.map(span=>span)}
            </div>
        </div>
    )
}

export default Proposito