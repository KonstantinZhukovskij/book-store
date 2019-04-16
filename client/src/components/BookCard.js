import React from 'react';

const BookCard = () => {
    return (
        <div className='bookCard'>
            <img src={require('/images/test.png')} alt='Book cover'/>
            <h2>Title</h2>
            <p>Price</p>
            <div className='btn-group' role='group' aria-label='Basic example'>
                <button type='button' className='btn btn-secondary'>-</button>
                <input className='countInput' type='text' defaultValue='Count'/>
                <button type='button' className='btn btn-secondary'>+</button>
            </div>
        </div>
    );
};

export default BookCard;