import React from 'react';

const HomePage = () => {
    return (
        <div className="homePage" id="homePage">
            <img src="../assets/Home-Hero-Image.jpg" alt="Home hero"/>
            <div>
                <h1>Zacznij pomagać</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src="../assets/Decoration.svg" alt="decoration"/>
                <div>
                    <a href="#">Oddaj rzeczy</a>
                    <a href="#">Zorganizuj zbiórkę</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;