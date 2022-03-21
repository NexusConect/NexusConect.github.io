import React, { useEffect } from  'react'
import Navbar from '../../components/navbar/Navbar';
import "./Home.css"
import { slogan,description } from './texts';
const Home = (props)=>{
 

    
    return(
        <div id="home"  className='ctn-home'>
            <Navbar/>
            <div className='home-content'>
                <div className='text-content'>
                    <div id="slogan">
                        Não se surpreenda com <span className='yellow-text'>atrasos</span>, conecte-se com a NEX<span className='yellow-text'>US</span>
                    </div>
                    <div id="description" className='left-100'>
                        {description}
                    </div>
                </div>
                <div className='app-preview'>
                    <img src='app.svg'/>
                </div>
            </div>
        </div>
    )
}

export default Home;