import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import backgroundContactForm from "../assets/Background-Contact-Form.jpg";
import decoration from "../assets/Decoration.svg";
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";

const HomeContact = () => {
    return (
        <Container className="contact" id="contact">
            <Row>
                <Col>
                    <img src={backgroundContactForm} alt="background" />
                </Col>
                <Col>
                    <h3>Skontaktuj się z nami</h3>
                    <img src={decoration} alt="decoration" />
                    <form>
                        <div>
                            <div>
                                <label>Wpisz swoje imię</label>
                                <input type="text" placeholder="wpisz swoje imię"/>
                            </div>
                            <div>
                                <label>Wpisz swój email</label>
                                <input type="text" placeholder="wpisz swój email"/>
                            </div>
                        </div>
                        <div>
                            <label>Wpisz swoją wiadomość</label>
                            <input type="textarea"/>
                        </div>
                        <div>
                            <button>Wyślij</button>
                        </div>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Copyright by Coders Lab</p>
                    <img src={facebookIcon} alt="facebook" />
                    <img src={instagramIcon} alt="instagram" />
                </Col>
            </Row>
        </Container>
    );
};

export default HomeContact;