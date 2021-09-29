import React from 'react';
import people from "../assets/People.jpg";

const HomeAboutUs = () => {
    return (
        <div className="aboutUs" id="aboutUs">
            <img src={people} alt="people"/>
            <div className="about_us"> O nas </div>
        </div>
    );
};

export default HomeAboutUs;