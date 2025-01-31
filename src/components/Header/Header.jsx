import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo Kasa" />
            </div>
            <nav className="header__nav">
                <NavLink 
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/apropos"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;