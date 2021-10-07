import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../assets/Decoration.svg";

const Login = () => {
    return (
        <Container fluid className="login">
            <Row>
                <Col>
                    <h3>Zaloguj się</h3>
                    <img src={decoration} alt="decoration" />
                    <form>
                        <label className="mb-2">Email</label>
                        <input type="password" className="mb-2"/>
                        <div className="loginButtons">
                            <button className="mx-2">Załóż konto</button>
                            <button type="submit" className="mx-2">Zaloguj się</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;