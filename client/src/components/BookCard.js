import React from 'react';

const BookCard = ({ book, bookAddedToCart }) => {
    const { title, author, price, image } = book;
    return (
        <div className='bookCard'>
            <div className='bookCardContent'>
                <img src={image} alt='Book cover'/>
                <h4> {title} </h4>
                <p> {author} </p>
                <h4> {price}$</h4>
                <div className='btn-group' role='group' aria-label='Basic example'>
                    <button type='button' className='btn btn-secondary' onClick={bookAddedToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
