import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error404.css';

function Error404() {
    return (
        <main className="error-content">
            <h1 className="error-title">404</h1>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
        </main>
    );
}

export default Error404;
