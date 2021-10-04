import React from 'react';

const Posts = ({ posts }) => {
    return (
        <>
            <ul className='list-group mb-4'>
                {posts.map(el => (
                    <li key={el.id} className='list-group-item'>
                        {el.name} {el.description} {el.whatWeCollect}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Posts;