import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../assets/Decoration.svg";
import HomeNavigationHeader from "./Home_Navigation_Header";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasEmailError, setHasEmailError] = useState(false);
    const [hasPasswordError, setHasPasswordError] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setHasEmailError(true);
        } else {
            setHasEmailError(false);
        }
        if (password.length < 6) {
            setHasPasswordError(true);
        } else {
            setHasPasswordError(false);
        }

        setEmail('');
        setPassword('');  //dlaczego nie czyści inputa?
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
                        <h3>Zaloguj się</h3>
                        <img src={decoration} alt="decoration" />
                        <form className="loginForm" onSubmit={handleSubmit}>
                        <div>
                            <div className="loginEmail">
                                <label className="mb-2">Email</label>
                                <input type="email" className="mb-2" onChange={handleEmail} value={email}/>
                                {hasEmailError && <p>Podano nieprawidłowy email</p>}
                            </div>
                            <div className="loginPassword">
                                <label className="mb-2">Password</label>
                                <input type="password" className="mb-2" onChange={handlePassword}/>
                                {hasPasswordError && <p>Podane hasło jest za krótkie</p>}
                            </div>
                        </div>
                        <div className="loginButtons">
                            <button className="btn mx-2">Załóż konto</button>
                            <button type="submit" className="btn submit mx-2">Zaloguj się</button>
                        </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default Login;