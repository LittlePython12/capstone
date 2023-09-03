import React from 'react';
import logo from './Lil Citrus.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="menu-button">
                <span>&#9776;</span>
            </div>
            <div className="logo">
            <img src={logo} alt="Little Lemon Logo" className="App-logo" style={{ width: '200px' }} />
            </div>
            <div className="shopping-bag">
                <span>&#128722;</span>
            </div>
        </header>
    );
}

export default Header;