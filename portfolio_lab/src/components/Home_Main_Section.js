import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link as ScrollLink} from 'react-scroll';
import homeHeroImage from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";

const HomeMainSection = () => {
    return (
        <Container fluid className="mainSection" id="mainSection">
            <Row>
                <Col>
                    <div className="mainSectionImage">
                        <img src={homeHeroImage} alt="Home hero" className="homeHeroImage"/>
                    </div>
                </Col>
                <Col>
                    <div className="mainSectionText">
                        <h3>Zacznij pomagać</h3>
                        <h3>Oddaj niechciane rzeczy w zaufane ręce</h3>
                        <img src={decoration} alt="decoration"/>
                        <div className="mainSectionButtons">
                            <button>
                                <ScrollLink to="fourSteps">Oddaj rzeczy</ScrollLink>
                            </button>
                            <button>
                                <ScrollLink to="fourSteps">Zorganizuj zbiórkę</ScrollLink>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeMainSection;