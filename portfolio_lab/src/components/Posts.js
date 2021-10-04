import React from 'react';

const Posts = ({ posts }) => {
    return (
            <ul className='list-group mb-4'>
                {posts.map(el => (
                    <li key={el.id} className='list-group-item'>
                        <div className="nameOfFoundationAndDescription">
                            <div>
                                {el.name}
                            </div>
                            <div>
                                {el.description}
                            </div>
                        </div>
                        <div className="whatWeCollectDetails">
                            {el.whatWeCollect}
                        </div>
                    </li>
                ))}
            </ul>
    );
};

export default Posts;