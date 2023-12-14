import React from 'react';
import './_Header.scss';
import logo from '../../images/logo.png';


function Header() {
  return (
    <header className="header">
        <div className='header-logo'> 
            <img src={logo} alt="Logo de l'entreprise" className='logo-img'/>  
            <h1 className='logo-name'> Wealth Health</h1>
        </div>
        <h2 className='project-name'>HRnet</h2>
    </header>
  );
}

export default Header;
