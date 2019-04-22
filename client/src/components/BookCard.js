import React from 'react';

const BookCard = ({ book, addBookToCart }) => {
    const { id, title, author, price, image } = book;
    return (
        <div className='bookCard'>
            <div className='bookCardContent'>
                <img src={image} alt='Book cover'/>
                <h4> {title} </h4>
                <p> {author} </p>
                <h4> {price}$</h4>
                <div className='btn-group' role='group' aria-label='Basic example'>
                    <button type='button' className='btn btn-secondary' onClick={() => addBookToCart(id)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
