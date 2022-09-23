import React from "react";

function Logo() {
  const logo = require('../../assets/images/logo.png')

  return (
    <img src={logo} alt='logo'/>
  )
}

export default Logo