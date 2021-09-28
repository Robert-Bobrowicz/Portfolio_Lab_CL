import React from 'react';
import HomeNavigationHeader from "./Home_Navigation_Header";
import HomePage from "./Home_Page";

const Home = () => {
    return (
        <>
            <div>
                <HomeNavigationHeader />
                <HomePage />
            </div>
            <div>
                <h1>Hello everyone!</h1>
                <p>sample text for testing</p>
            </div>
        </>

    );
};

export default Home;