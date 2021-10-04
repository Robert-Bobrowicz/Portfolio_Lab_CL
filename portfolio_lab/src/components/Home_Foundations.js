import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import decoration from "../assets/Decoration.svg";
import {foundationsData} from "./data/foundationsDB";
import {organisationsData} from "./data/organisationsDB";
import {localEventsData} from "./data/localEventsDB";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

const HomeFoundations = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [description, setDescription] = useState('');

    const handleClickFoundations = () => {
        setPosts(foundationsData);
        setDescription("W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.")
    }

    const handleClickOrganisations = () => {
        setPosts(organisationsData);
        setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
    }

    const handleClickLocalEvents = () => {
        setPosts(localEventsData);
        setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                <Col className="listOfFoundations">
                    <p>{description}</p>
                    <Posts posts={currentPosts} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HomeFoundations;