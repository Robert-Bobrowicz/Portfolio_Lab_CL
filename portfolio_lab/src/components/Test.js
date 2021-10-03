// import React from 'react';
// import {Container, Row, Col} from "react-bootstrap";
// import {foundationsData} from "./data/foundationsDB";
// import {organisationsData} from "./data/organisationsDB";
// import {localEventsData} from "./data/localEventsDB";
//
// const Test = () => {
//     return (
//             <Container fluid>
//                 <Row>
//                     <Col>1 of 4 {foundationsData[0].name}</Col>
//                     <Col>2 of 4</Col>
//                     <Col>1 of 1</Col>
//                     <Col>1 of 1</Col>
//                 </Row>
//                 <Row>
//                     <Col>1 of 4</Col>
//                     <Col>2 of 4</Col>
//                     <Col>1 of 1</Col>
//                     <Col>1 of 1</Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <ul className="list-group mb-4">
//                             {foundationsData.map((el) => (
//                                 <li key={el.id} className="list-group-item mb-2">
//                                     {el.name}, {el.description}
//                                 </li>
//                             ))}
//                         </ul>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <ul className="list-group mb-4">
//                             {organisationsData.map((el) => (
//                                 <li key={el.id} className="list-group-item mb-2">
//                                     {el.name}, {el.description}
//                                 </li>
//                             ))}
//                         </ul>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <ul className="list-group mb-4">
//                             {localEventsData.map((el) => (
//                                 <li key={el.id} className="list-group-item mb-2">
//                                     {el.name}, {el.description}
//                                 </li>
//                             ))}
//                         </ul>
//                     </Col>
//                 </Row>
//             </Container>
//     );
// };
//
// export default Test;

import React, { useState, useEffect } from 'react';
import Posts from './test/Posts';
import Pagination from './test/Pagination';
import {foundationsData} from "./data/foundationsDB";
// import axios from 'axios';  //npm install axios

const Test = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    useEffect(() => {
        setPosts(foundationsData);
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>My Blog</h1>
            <Posts posts={currentPosts} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Test;