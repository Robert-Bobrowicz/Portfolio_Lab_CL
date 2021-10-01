import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../assets/Decoration.svg";
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";

const HomeContact = () => {
    return (
        <>
            <Container className="contact" id="contact">
                <Row>
                    <Col className="contactForm">
                        <h4>Skontaktuj się z nami</h4>
                        <img src={decoration} alt="decoration" />
                        <form>
                            <div className="contactName_Email">
                                <div className="contactName">
                                    <label>Wpisz swoje imię</label>
                                    <input type="text" placeholder="wpisz swoje imię"/>
                                </div>
                                <div className="contactEmail">
                                    <label>Wpisz swój email</label>
                                    <input type="text" placeholder="wpisz swój email"/>
                                </div>
                            </div>
                            <div className="contactTextArea">
                                <label>Wpisz swoją wiadomość</label>
                                <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." cols="30" rows="5"/>
                            </div>
                            <div className="button">
                                <button>Wyślij</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="footer">
                        <p>Copyright by Coders Lab</p>
                        <img src={facebookIcon} alt="facebook" />
                        <img src={instagramIcon} alt="instagram" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomeContact;