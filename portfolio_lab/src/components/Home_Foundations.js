import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../assets/Decoration.svg";

const HomeFoundations = () => {
    return (
        <Container>
            <Row>
                <Col className="whoWeHelp" id="whoWeHelp">
                    <h2>Komu pomagamy</h2>
                    <img src={decoration} alt="decoration line"/>
                    <ul>
                        <li>Fundacjom</li>
                        <li>Organizacjom pozarządowym</li>
                        <li>Lokalnym zbiorkom</li>
                    </ul>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeFoundations;