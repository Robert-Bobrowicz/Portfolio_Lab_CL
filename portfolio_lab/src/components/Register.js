import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import decoration from "../assets/Decoration.svg";
import HomeNavigationHeader from "./Home_Navigation_Header";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordRepeatError, setPasswordRepeatError] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handlePasswordRepeat = (e) => {
        setPasswordRepeat(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes('@') || email === '') {
            console.log('email does not includes @ or is empty string');
            setEmailError('Nieprawidłowy email');
        } else {
            setEmailError('');
        }

        if (password <= 6) {
            console.log('password is less than 6 characters');
            setPasswordError('Hasło musi zawierać co najmniej 6 znaków');
        } else {
            setPasswordError('');
        }

        if (passwordRepeat !== password) {
            console.log('passwords are not equal');
            setPasswordRepeatError('Hasła nie są takie same');
        } else {
            setPasswordRepeatError('');
        }

        if ( (email !== '' && email.includes('@')) && (password.length >= 6) && (password === passwordRepeat)) {
            clearBox();
        }
    }

    const clearBox = () => {
        setEmail('');
        setPassword('');
        setPasswordRepeat('');
    }

    return (
        <>
            <Container>
                <Row className="userLoginNav">
                    <Col>
                        <HomeNavigationHeader />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="userLogin">
                <Row>
                    <Col className="loginPanel">
                        <h3>Załóż konto</h3>
                        <img src={decoration} alt="decoration" />
                        <form className="loginForm" onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <div className="loginEmail">
                                    <label className="mb-2">Email</label>
                                    <input
                                        type="text"
                                        className="mb-2"
                                        onChange={handleEmail}
                                        value={email}/>
                                    <p>{emailError}</p>
                                </div>
                                <div className="loginPassword">
                                    <label className="mb-2">Hasło</label>
                                    <input
                                        type="password"
                                        className="mb-2"
                                        onChange={handlePassword}
                                        value={password}/>
                                    <p>{passwordError}</p>
                                </div>
                                <div className="loginPasswordRepeat">
                                    <label className="mb-2">Powtórz hasło</label>
                                    <input
                                        type="password"
                                        className="mb-2"
                                        onChange={handlePasswordRepeat}
                                        value={passwordRepeat}
                                    />
                                    <p>{passwordRepeatError}</p>
                                </div>
                            </div>
                            <div className="loginButtons">
                                <button className="btn mx-2">Załóż konto</button>
                                <Link to = "/login" className="btn mx-2">Zaloguj się</Link>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;