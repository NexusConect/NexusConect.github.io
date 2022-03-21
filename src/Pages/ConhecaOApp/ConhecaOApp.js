import React from "react";
import "./ConhecaOApp.css"

const ConhecaOApp = (props)=>{
    return(
        <div className="ctn-conheca-o-app">
            <div className="ctn-content-app">
                <div data-aos='fade-right' 
                    data-aos-delay='300'
                    data-aos-duration='500'
                    className="title-"
                >
                    A nossa solução <span className="yellow-text">ainda</span> não está pronta :(
                </div>
                <div data-aos='fade-right' 
                    data-aos-delay='300'
                    data-aos-duration='500'
                    className="legend-"
                >
                    Mas você pode dar uma olhada em nosso protótipo no Figma.
                </div>
                <div className="ctn-body-">
                    <div data-aos='fade-right' 
                        data-aos-delay='300'
                        data-aos-duration='500' 
                        className="prototipos"
                        >
                        <a href="https://www.figma.com/proto/hTFztVNMQK90ps4Hdd9Zli/Presta%C3%A7%C3%A3o-de-Servi%C3%A7o?node-id=262%3A5953&scaling=scale-down&page-id=8%3A2&starting-point-node-id=262%3A5953&show-proto-sidebar=1">
                            <div className="row-link">
                                <img src={"figma.svg"} /> <div className="row-link-text"> Protótipo <span className="yellow-text"> prestador</span> </div>
                            </div>
                        </a>
                        <a href="https://www.figma.com/proto/hTFztVNMQK90ps4Hdd9Zli/Presta%C3%A7%C3%A3o-de-Servi%C3%A7o?node-id=5%3A7&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A7&show-proto-sidebar=1">
                            <div className="row-link">
                                <img src={"figma.svg"} /> <div className="row-link-text"> Protótipo <span className="yellow-text"> cliente</span> </div>
                            </div>
                        </a>
                    </div>
                    <div data-aos='fade-up' 
                        data-aos-delay='300'
                        data-aos-duration='500' >
                        <div className="img-1">
                            <img src="app2.svg"/>
                        </div>
                        <div className="img-2">
                            <img src="app3.svg"/>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default ConhecaOApp;