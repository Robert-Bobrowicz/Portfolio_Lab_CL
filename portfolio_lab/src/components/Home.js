import React from 'react';
import HomeNavigationHeader from "./Home_Navigation_Header";
import HomePage from "./Home_Page";
import HomeThreeColumns from "./Home_Three_columns";
import HomeFourSteps from "./Home_Four_Steps";
import HomeAboutUs from "./Home_About_Us";
import HomeFoundations from "./Home_Foundations";
import HomeContact from "./Home_Contact";

const Home = () => {
    return (
        <div>
            <HomeNavigationHeader />
            <HomePage />
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeFoundations />
            <HomeContact />
        </div>
    );
};

export default Home;