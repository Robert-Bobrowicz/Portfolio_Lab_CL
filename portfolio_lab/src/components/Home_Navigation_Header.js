import React from 'react';

const HomeNavigationHeader = () => {
    return (
        <div className="navigation_header" id="navigation_header_ID">
            <ul className="login" id="login">
                <li>Zaloguj</li>
                <li>Załóż konto</li>
            </ul>
            <ul className="nav_menu" id="nav_menu">
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
            </ul>
        </div>
    );
};

export default HomeNavigationHeader;