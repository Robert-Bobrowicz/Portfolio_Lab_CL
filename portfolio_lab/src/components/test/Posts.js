import React from 'react';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className='list-group mb-4'>
            {posts.map(el => (
                <li key={el.id} className='list-group-item'>
                    {el.name}
                </li>
            ))}
        </ul>
    );
};

export default Posts;