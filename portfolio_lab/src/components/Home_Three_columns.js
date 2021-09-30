import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const HomeThreeColumns = () => {
    return (
        <Container fluid className="threeColumns">
            <Row>
                <Col>
                    <div className="columnOne column">
                        <p>10</p>
                        <p>Oddanych worków</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
                <Col>
                    <div className="columnTwo column">
                        <p>5</p>
                        <p>Wspartych organizacji</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
                <Col>
                    <div className="columnThree column">
                        <p>7</p>
                        <p>Zorganizowanych zbiórek</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeThreeColumns;