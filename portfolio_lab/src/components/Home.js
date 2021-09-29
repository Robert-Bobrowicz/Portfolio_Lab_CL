import React from 'react';

import HomeNavigationHeader from "./Home_Navigation_Header";
import HomeMainSection from "./Home_Main_Section";
import HomeThreeColumns from "./Home_Three_columns";
import HomeFourSteps from "./Home_Four_Steps";
import HomeAboutUs from "./Home_About_Us";
import HomeFoundations from "./Home_Foundations";
import HomeContact from "./Home_Contact";
import {Container, Row, Col} from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <HomeNavigationHeader />
                    <HomeMainSection />
                    <HomeThreeColumns />
                    <HomeFourSteps />
                    <HomeAboutUs />
                    <HomeFoundations />
                    <HomeContact />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;