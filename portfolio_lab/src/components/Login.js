import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../assets/Decoration.svg";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container fluid className="login">
            <Row>
                <Col className="loginPanel">
                    <h3>Zaloguj się</h3>
                    <img src={decoration} alt="decoration" />
                    <form className="loginForm">
                        <div className="loginEmail">
                            <label className="mb-2">Email</label>
                            <input type="email" className="mb-2" onChange={handleEmail}/>
                        </div>
                       <div className="loginPassword">
                           <label className="mb-2">Password</label>
                           <input type="password" className="mb-2" onChange={handlePassword}/>
                       </div>
                        <div className="loginButtons">
                            <button className="mx-2">Załóż konto</button>
                            <button type="submit" className="mx-2" onSubmit={handleSubmit}>Zaloguj się</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;