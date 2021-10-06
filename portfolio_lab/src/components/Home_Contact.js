import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../assets/Decoration.svg";
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";

const HomeContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorTextarea, setErrorTextarea] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState('');

    const handleNameInput = (e) => {
        setName(e.target.value);
        console.log(name);
        if (name.includes(' ')) {
            console.log('name is empty string or includes empty space');
            setErrorName('Nieprawidłowe imię (powinno być bez spacji)');
        }
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
        if (!email.includes('@') || email.length === 0) {
            console.log('email does not includes @ or is empty string');
            setErrorEmail('Nieprawidłowy email');
        }
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
        if (message.length <= 120) {
            console.log('message is not equal or longer than 120 characters');
            setErrorTextarea('Wiadomość musi mieć co najmniej 120 znaków');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errorName.length === 0 && errorEmail.length === 0 && errorTextarea.length === 0)
        {
            setSubmitSuccess('Wiadomość została wysłana! Wkrótce się skontaktujemy.');
        }
    }

    return (
        <>
            <Container className="contact" id="contact">
                <Row>
                    <Col className="contactForm">
                        <h4>Skontaktuj się z nami</h4>
                        <img src={decoration} alt="decoration" />
                        <p className="submitSuccess">{submitSuccess}</p>
                        <form>
                            <div className="contactName_Email">
                                <div className="contactName">
                                    <label>Wpisz swoje imię</label>
                                    <input onChange={handleNameInput} type="text" placeholder="wpisz swoje imię"/>
                                    <p className="nameError">{errorName}</p>
                                </div>
                                <div className="contactEmail">
                                    <label>Wpisz swój email</label>
                                    <input onChange={handleEmailInput} type="email" placeholder="wpisz swój email"/>
                                    <p className="emailError">{errorEmail}</p>
                                </div>
                            </div>
                            <div className="contactTextArea">
                                <label>Wpisz swoją wiadomość</label>
                                <textarea onChange={handleMessage} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." cols="30" rows="5"/>
                                <p className="textAreaError">{errorTextarea}</p>
                            </div>
                            <div className="button">
                                <button onClick={handleSubmit}>Wyślij</button>
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