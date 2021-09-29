import React from 'react';
import homeHeroImage from "../assets/Home-Hero-Image.jpg";

const HomeMainSection = () => {
    return (
        <div className="mainSection" id="mainSection">
            <img src={homeHeroImage} alt="Home hero"/>
            <div>
                <h1>Zacznij pomagać</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src="../assets/Decoration.svg" alt="decoration"/>
                <div>
                    <a href="#fourSteps">Oddaj rzeczy</a>
                    <a href="#fourSteps">Zorganizuj zbiórkę</a>
                </div>
            </div>
        </div>
    );
};

export default HomeMainSection;