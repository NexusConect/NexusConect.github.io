import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import clientCardsJson from './clientes-card.json'
import profissionaisCardsJson from './profissionais-card.json'
import './ComoFunciona.css'

const ComoFunciona = (props)=>{
    const [clientCards,setClientCards] = useState([]);
    const [profissionaisCards,setProfissionaisCards] = useState([]);

    useEffect(()=>{
        const cards = clientCardsJson.map(infos=>{
            return <Card img={infos.img} right={false} title={infos.title} bodyText={infos.bodyText}/>
        })
        setClientCards(cards);
        const cards2 = profissionaisCardsJson.map(infos=>{
            return <Card img={infos.img} right={true} title={infos.title} bodyText={infos.bodyText}/>
        })
        setProfissionaisCards(cards2)
    },[])

    return (
        <div className="ctn-como-funciona">
            <div data-aos='fade-down' 
                data-aos-delay='300' 
                data-aos-duration='500'
                className="title"
            >
                COMO FUNCIONA
            </div>
            <div data-aos='fade-right' 
                data-aos-delay='300'
                data-aos-duration='500'
                className="ctn-personas"
            >
                <div className="sub-title yellow-text">
                    Clientes
                </div>
                <span>Busque, negocie, contrate e acompanhe.</span>
                <div className="ctn-cards">
                    {clientCards.map(cards=>cards)}
                </div>
            </div>
            <div data-aos='fade-left' 
                data-aos-delay='300'
                data-aos-duration='500'
                className="ctn-personas"
            >
                <div className="sub-title end-flex yellow-text">
                    Profissionais
                </div>
                <span className="end-flex">Busque, negocie, contrate e acompanhe.</span>
                <div className="ctn-cards">
                    {profissionaisCards.map(cards=>cards)}
                </div>
            </div>

        </div>
    )
}

export default ComoFunciona;