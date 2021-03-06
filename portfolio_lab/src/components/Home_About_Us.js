import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import people from "../assets/People.jpg";
import decoration from "../assets/Decoration.svg";
import podpis from "../assets/Signature.svg";

const HomeAboutUs = () => {
    return (
        <Container fluid className="aboutUs" id="aboutUs">
            <Row>
                <Col className="aboutUs">
                    <h3>O nas</h3>
                    <img src={decoration} alt="decoration" />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <Row className="signature">
                        <Col>
                            <img src={podpis} alt="podpis prezesa" />
                        </Col>
                    </Row>
                </Col>
                <Col className="peopleImage">
                    <img src={people} alt="people" className="peopleImagePicture" />
                </Col>
            </Row>
        </Container>
    );
};

export default HomeAboutUs;