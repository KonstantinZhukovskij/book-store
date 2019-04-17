import React from 'react';

const BookCard = ({ book }) => {
    const { title, author, price } = book;
    return (
        <div className='bookCard'>
            <div className='bookCardContent'>
                <img src={require('/images/test.png')} alt='Book cover'/>
                <h4> {title} </h4>
                <p> {author} </p>
                <h4> {price}$</h4>
                <div className='btn-group' role='group' aria-label='Basic example'>
                    <button type='button' className='btn btn-secondary'>-</button>
                    <input className='countInput' type='text' defaultValue='Count'/>
                    <button type='button' className='btn btn-secondary'>+</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
