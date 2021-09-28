import React from 'react';

const HomeNavigationHeader = () => {
    return (
        <div className="navigation_header" id="navigation_header_ID">
            <ul className="login" id="login">
                <li>Zaloguj</li>
                <li>Załóż konto</li>
            </ul>
            <ul className="nav_menu" id="nav_menu">
                <li><a href="#home_page">Start</a></li>
                <li><a href="#">O co chodzi?</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Fundacja i organizacje</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </div>
    );
};

export default HomeNavigationHeader;