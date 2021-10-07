import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HomeNavigationHeader from "./Home_Navigation_Header";
import decoration from "../assets/Decoration.svg";

const Logout = () => {
    return (
        <>
            <Container>
                <Row className="userLoginNav">
                    <Col>
                        <HomeNavigationHeader />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="userLogout">
                <Row>
                    <Col className="loginPanel">
                        <h3>Wylogowanie nastąpiło pomyślnie!</h3>
                        <img src={decoration} alt="decoration" />
                        <button className=" logoutButton btn mx-2">Main page</button>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default Logout;