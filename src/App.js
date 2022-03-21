import logo from './logo.svg';
import './App.css';
import './styledGlobal/global.css'
import Home from './Pages/Home/Home';
import Proposito from './Pages/Proposito/Proposito';
import ComoFunciona from './Pages/ComoFunciona/ComoFunciona';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ConhecaOApp from './Pages/ConhecaOApp/ConhecaOApp';
import Footer from './components/footer/Footer';
import Scroll from 'react-scroll';
import { useEffect, useState } from 'react';
import {useGlobalState} from './utils/reactGlobalState'

AOS.init()

function App() {
  const [showToTopButton,setShowToTopButton] = useState(false);
  const [click,setClick] = useGlobalState("click");

  useEffect(()=>{
      setClick(false);
  },[])

  //Quando clicar no background fecha o menu se ele tiver aberto
  const handleBackGroundClick = ()=>{
    if(click){
        setClick(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const  top  = (document.documentElement.scrollTop || document.body.scrollTop);
      const home = document.getElementById("home").getBoundingClientRect();
      if(top>home.height){
        setShowToTopButton(true);
      }
      else{
        setShowToTopButton(false);
      }
    })
  },[ ])

  const toTop=()=>{
    Scroll.animateScroll.scrollToTop();
  }
 
  return (
    <div className="App" onClick={handleBackGroundClick}>
     <Home/>
     <Scroll.Element name="proposito"><Proposito/></Scroll.Element>
     <Scroll.Element name="comofunciona"><ComoFunciona/></Scroll.Element>
     <Scroll.Element name="conhecaoapp"><ConhecaOApp/></Scroll.Element>
     <Footer/>
     {
       showToTopButton?
        <div onClick={toTop} className='button-to-top'>
          <img src='totop.svg'/>
        </div>
        :<></>
    }
    </div>
  );
}

export default App;
