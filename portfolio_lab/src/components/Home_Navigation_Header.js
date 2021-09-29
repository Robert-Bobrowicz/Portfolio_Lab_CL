import React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import {Container, Row, Col} from "react-bootstrap";

const HomeNavigationHeader = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="navigation_header" id="navigation_header_ID">
                    <ul className="login" id="login">
                        <li><Link to="/login">Zaloguj</Link></li>
                        <li><Link to="/register">Załóż konto</Link></li>
                    </ul>
                    <ul className="nav_menu" id="nav_menu">
                        <li><ScrollLink to="mainSection">Start</ScrollLink></li>
                        <li><ScrollLink to="threeColumns">O co chodzi?</ScrollLink></li>
                        <li><ScrollLink to="aboutUs">O nas</ScrollLink></li>
                        <li><ScrollLink to="foundations">Fundacja i organizacje</ScrollLink></li>
                        <li><ScrollLink to="contact">Kontakt</ScrollLink></li>
                    </ul>
                </Col>
            </Row>
        </Container>

    );
};

export default HomeNavigationHeader;