import React from 'react';
import {Link as ScrollLink} from 'react-scroll';
import homeHeroImage from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";

const HomeMainSection = () => {
    return (
        <div className="mainSection" id="mainSection">
            <img src={homeHeroImage} alt="Home hero"/>
            <div>
                <h1>Zacznij pomagać</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration"/>
                <div>
                    <ScrollLink to="fourSteps">Oddaj rzeczy</ScrollLink>
                    <ScrollLink to="fourSteps">Zorganizuj zbiórkę</ScrollLink>
                </div>
            </div>
        </div>
    );
};

export default HomeMainSection;