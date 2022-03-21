import React, { useEffect, useState } from "react";
import infosMembros from './membros.json'
import "./Footer.css";

const Footer = (props)=>{
    const [membros1,setMembros1] = useState([]);
    const [membros2,setMembros2] = useState([]);
    useEffect(()=>{

        setMembros1(infosMembros.slice(0,infosMembros.length/2+1));
        setMembros2(infosMembros.slice(infosMembros.length/2+1,infosMembros.length));
    
    },[])

    return (
        <div className="ctn-footer">
            <div className="footer-content">
                <div className="logo-footer">
                    <img src="NEXUS.svg"/>
                </div>
                <div className="membros-footer">
                    <div className="row">
                        <div className="content-membros">
                            Membros
                            {membros1.map(membro=> <span>{membro.name}</span>)}
                        </div>
                        <div className="content-membros left-100 top-20">
                            {membros2.map(membro=> <span>{membro.name}</span>)}
                        </div>
                        <div className="contato-footer">
                            Contato
                            <a href="https://www.linkedin.com/in/mikaella-ferreira-4346b7227/"><img src="linkedin.svg"/></a>
                            <span>mikaellaferreira0@gmail.com</span>
                        </div>
                    </div>
                    <div id='desc-footer-project'>
                        Projeto desenvolvido ao longo da disciplina de empreendedorismo com metodologia Projetão. 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;