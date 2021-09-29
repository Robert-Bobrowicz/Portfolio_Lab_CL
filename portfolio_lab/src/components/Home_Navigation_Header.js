import React from 'react';
import {Link} from 'react-scroll';

const HomeNavigationHeader = () => {
    return (
        <div className="navigation_header" id="navigation_header_ID">
            <ul className="login" id="login">
                <li><Link to="/login">Zaloguj</Link></li>
                <li><Link to="/register">Załóż konto</Link></li>
            </ul>
            <ul className="nav_menu" id="nav_menu">
                <li><Link to="#mainPage">Start</Link></li>
                <li><a href="#threeColumns">O co chodzi?</a></li>
                <li><a href="#aboutUs">O nas</a></li>
                <li><a href="#foundations">Fundacja i organizacje</a></li>
                <li><a href="#conatct">Kontakt</a></li>
            </ul>
        </div>
    );
};

export default HomeNavigationHeader;