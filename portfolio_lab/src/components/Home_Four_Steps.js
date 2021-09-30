import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import wybierz from "../assets/Icon-1.svg";
import spakuj from "../assets/Icon-2.svg";
import zdecyduj from "../assets/Icon-3.svg";
import zamow from "../assets/Icon-4.svg";


const HomeFourSteps = () => {
    return (
        <Container fluid className="fourSteps">
            <Row>
                <Col className="fourSteps_header">
                    <h3>Wystarczą 4 proste kroki</h3>
                    <img src={decoration} alt="decoration" />
                </Col>
            </Row>
            <Row>
                <Col className="step_1 fourColumns">
                    <img src={wybierz} alt="wybierz rzeczy" />
                    <p>Wybierz rzeczy</p>
                    <p></p>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </Col>
                <Col className="step_2 fourColumns">
                    <img src={spakuj} alt="spakuj wybrane rzeczy" />
                    <p>Spakuj je</p>
                    <p></p>
                    <p>skorzystaj z worków na śmieci</p>
                </Col>
                <Col className="step_3 fourColumns">
                    <img src={zdecyduj} alt="zdecyduj komu  chcesz pomóc" />
                    <p>Zdecyduj komu  chcesz pomóc</p>
                    <p></p>
                    <p>wybierz zaufane miejsce</p>
                </Col>
                <Col className="step_4 fourColumns">
                    <img src={zamow} alt="zamów kuriera" />
                    <p>Zamów kuriera</p>
                    <p></p>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </Col>
            </Row>
            <Row>
                <button>
                    <Link to="/login">Oddaj rzeczy</Link>
                </button>
            </Row>
        </Container>
    );
};

export default HomeFourSteps;