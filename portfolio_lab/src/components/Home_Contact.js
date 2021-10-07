import React, {useEffect, useState} from 'react';
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
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Name validation
        console.log(name);
        if (name.includes(' ') || name === "") {
            console.log('name is empty string or includes empty space');
            setErrorName('Nieprawidłowe imię (jeden wyraz bez spacji)');
        } else {
            setErrorName('')
        }

        //email validation
        console.log(email);
        if (!email.includes('@') || email === '') {
            console.log('email does not includes @ or is empty string');
            setErrorEmail('Nieprawidłowy email');
        } else {
            setErrorEmail('');
        }

        //textarea validation
        console.log(message);
        if (message.length <= 120) {
            console.log('message is not equal or longer than 120 characters');
            setErrorTextarea('Wiadomość musi mieć co najmniej 120 znaków');
        } else {
            setErrorTextarea('');
        }

        //success submit
        console.log(errorName); //dlaczego tu jest pusto nawet wtedy kiedy pojawiają się błędy ?
        console.log(errorEmail);
        console.log(errorTextarea);
        if ((name !== '' || !name.includes(' ')) && (email !== '' && email.includes('@')) && (message.length >= 3)) {
            setSubmitSuccess('Wiadomość została wysłana! Wkrótce się skontaktujemy.')
        }
    }

    const clearBox = (e) => {
        e.target.value = '';
        setName('');
        setEmail('');
        setMessage('');
    }

    //API POST zapis danych do BD
    useEffect(() => {
            const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

            const data = {
                name: name,
                email: email,
                message: message
            };
            if (submitSuccess !== '') {
                fetch(`${API}`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }

            document.title = `Portolio lab`;
    },[name, email, message, submitSuccess]);

    return (
        <>
            <Container className="contact" id="contact">
                <Row>
                    <Col className="contactForm">
                        <h4>Skontaktuj się z nami</h4>
                        <img src={decoration} alt="decoration" />
                        <p className="submitSuccess">{submitSuccess}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="contactName_Email">
                                <div className="contactName">
                                    <label>Wpisz swoje imię</label>
                                    <input onChange={handleNameInput} onSubmit={clearBox} type="text" placeholder="wpisz swoje imię" name="inputName"/>
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