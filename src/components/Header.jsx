import React, {useState, useEffect} from "react";
import '../assets/styles/header.scss'

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }

  const logoPath = require('../assets/images/headerlogo.png');
  const contactBtnPath = require('../assets/images/contactus.png');
  const downloadBtnPath = require('../assets/images/download.png');

  const style = { }
  const changeStyle = {
    backgroundColor: 'white',
    boxShadow: '0 3px 5px rgba(57, 63, 72, 0.3)',
    zIndex: '999'
  }

  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <div className="header flex justify-between items-center w-full" style={ scrollPosition < 100 ? style : changeStyle}>
      <a href="/"><img className='header-logo' src={ logoPath } alt="logo" /></a>
      <a href="#" className='hidden lg:block'><img  src={ contactBtnPath } alt="logo" /></a>
      <a href="#" className='lg:hidden'><img src={ downloadBtnPath } alt="logo" /></a>
    </div>
  )
}

export default Header