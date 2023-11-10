import React from 'react';
import './_Header.scss';
import logo from '../../images/logo.png';


function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Logo de l'entreprise" className='logo-img'/>  
        <h1 className='header-name'>HRnet</h1>
    </header>
  );
}

export default Header;

