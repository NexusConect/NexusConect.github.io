import React from "react";
import Scroll from 'react-scroll';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
import { useGlobalState } from "../../utils/reactGlobalState";
import "./Navbar.css"
const Navbar = (props)=>{
    const [click,setClick] = useGlobalState("click");
    // Trata quando clica no menu-dropdown
    const handleClick = ()=>{setClick(!click)}

    const toPropostio = ()=>{
        Scroll.scroller.scrollTo("proposito");
    }
    const toComoFunciona = ()=>{
        Scroll.scroller.scrollTo("comofunciona");
    }
    const toConhecaOApp = ()=>{
        Scroll.scroller.scrollTo("conhecaoapp");
    }
    return (
        <div className="ctn-navbar">
            <div className={click?"navbar-content active":"navbar-content"}>
                <AiOutlineClose className='menu-icon close'/> 
                <div className="logo-ctn">
                    <img src={"logo.svg"} className='logo-navbar'/>
                </div>
                <div className="links-ctn">
                    <span onClick={toPropostio}>PROPÓSITO</span>
                    <span  onClick={toComoFunciona}>COMO FUNCIONA</span>
                    <span className="yellow-text" onClick={toConhecaOApp}>CONHEÇA O APP</span>
                </div>
            </div>
            {/* Menu de dropdown para quando for visto por um celular */}
            <div className={click? "menu-dropdown active close":"menu-dropdown"} onClick={handleClick}>
                <AiOutlineMenu className='menu-icon'/>
            </div>
        </div>
    )
}

export default Navbar;