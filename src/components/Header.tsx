import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className='topbar'>
        <div className='coinlogo'>Coin<span className='logo-coin'>Data</span></div>
    </div>
  );
}

export default Header;