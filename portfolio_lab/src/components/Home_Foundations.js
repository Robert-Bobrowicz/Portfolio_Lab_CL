import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../assets/Decoration.svg";
import {foundationsData} from "./data/foundationsDB";
import {organisationsData} from "./data/organisationsDB";
import {localEventsData} from "./data/localEventsDB";

const HomeFoundations = () => {

    const handleClickFoundations = () => {
        console.log("fundacje które wspieramy");
    }

    const handleClickOrganisations = () => {
        console.log("organizacje charytatywne")
    }

    const handleClickLocalEvents = () => {
        console.log("lokalne zbiórki rzeczy")
    }

    return (
        <Container>
            <Row>
                <Col className="whoWeHelp" id="whoWeHelp">
                    <h2>Komu pomagamy</h2>
                    <img src={decoration} alt="decoration line"/>
                    <ul>
                        <li onClick={handleClickFoundations}>Fundacjom</li>
                        <li onClick={handleClickOrganisations}>Organizacjom pozarządowym</li>
                        <li onClick={handleClickLocalEvents}>Lokalnym zbiorkom</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="foundationsList">
                    <p>Sprawdzone fundacje, które wspieramy:</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
                    <ul className="list-group mb-4">
                        {foundationsData.map((el) => (
                            <li key={el.id} className="list-group-item mb-2">
                                {el.name}, {el.description}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="organisationsList">
                    <p>Sprawdzone fundacje, które wspieramy:</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
                    <ul className="list-group mb-4">
                        {organisationsData.map((el) => (
                            <li key={el.id} className="list-group-item mb-2">
                                {el.name}, {el.description}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="localEventsList">
                    <p>Sprawdzone fundacje, które wspieramy:</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
                    <ul className="list-group mb-4">
                        {localEventsData.map((el) => (
                            <li key={el.id} className="list-group-item mb-2">
                                {el.name}, {el.description}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeFoundations;