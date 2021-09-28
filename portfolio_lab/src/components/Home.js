import React from 'react';
import {Link} from 'react-scroll';

import HomeNavigationHeader from "./Home_Navigation_Header";
import HomeMainPage from "./Home_Main_Page";
import HomeThreeColumns from "./Home_Three_columns";
import HomeFourSteps from "./Home_Four_Steps";
import HomeAboutUs from "./Home_About_Us";
import HomeFoundations from "./Home_Foundations";
import HomeContact from "./Home_Contact";

const Home = () => {
    return (
        <div>
            <HomeNavigationHeader />
            <HomeMainPage />
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeFoundations />
            <HomeContact />
        </div>
    );
};

export default Home;