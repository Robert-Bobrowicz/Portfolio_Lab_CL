import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {foundationsData} from "./data/foundationsDB";
import {organisationsData} from "./data/organisationsDB";
import {localEventsData} from "./data/localEventsDB";

const Test = () => {
    return (
            <Container fluid>
                <Row>
                    <Col>1 of 4 {foundationsData[0].name}</Col>
                    <Col>2 of 4</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                </Row>
                <Row>
                    <Col>1 of 4</Col>
                    <Col>2 of 4</Col>
                    <Col>1 of 1</Col>
                    <Col>1 of 1</Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="list-group mb-4">
                            {foundationsData.map((el) => (
                                <li key={el.id} className="list-group-item mb-2">
                                    {el.name}, {el.description}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="list-group mb-4">
                            {organisationsData.map((el) => (
                                <li key={el.id} className="list-group-item mb-2">
                                    {el.name}, {el.description}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="list-group mb-4">
                            {localEventsData.map((el) => (
                                <li key={el.id} className="list-group-item mb-2">
                                    {el.name}, {el.description}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
    );
};

export default Test;