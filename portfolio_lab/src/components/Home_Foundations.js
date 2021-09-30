import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Container, Row, Col} from "react-bootstrap";

const HomeFoundations = () => {
    return (
        <Container className="whoWeHelp" id="whoWeHelp">
            <Row>
                <Col>
                    <h2>Komu pomagamy</h2>
                    <img src={decoration} alt="decoration line"/>
                    <ul>
                        <li>Fundacjom</li>
                        <li>Organizacjom pozarządowym</li>
                        <li>Lokalnym zbiorkom</li>
                    </ul>
                    <p>Lorem ipsum .... </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeFoundations;