import React from 'react';
import './footer.css';
import logoB from '../../assets/LogoB.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logoB} alt="Kasa" className="footer-logo" />
                <p className="footer-text">&copy; 2025 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
