import React from 'react';
import decoration from "../assets/Decoration.svg";

const HomeFoundations = () => {
    return (
        <div className="foundations" id="foundations">
            <h2>Komu pomagamy</h2>
            <img src={decoration} alt="decoration line"/>
            <ul>
                <li>Fundacjom</li>
                <li>Organizacjom pozarządowym</li>
                <li>Lokalnym zbiorkom</li>
            </ul>
            <p>Lorem ipsum .... </p>
        </div>
    );
};

export default HomeFoundations;