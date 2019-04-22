import React from 'react';

const BooksInCart = ({ book, addBookToCart, removeBookFromCart, removeAllBookFromCart }) => {
    return (
        <div className='booksInCart'>
            <div className='productInformation'>
                <p>
                    "{book.title}" --- {book.author}
                </p>
                <p>
                    {book.amount}
                </p>
                <p>
                    {book.price}$
                </p>
            </div>
            <div>
                <button className='btn btn-dark' onClick={() => addBookToCart(book.id)}>
                    <i className='fas fa-plus'/>
                </button>
                <button className='btn btn-dark' onClick={() => removeBookFromCart(book.id)}>
                    <i className='fas fa-minus'/>
                </button>
                <button className='btn btn-dark' onClick={() => removeAllBookFromCart(book.id)}>
                    <i className='fas fa-trash'/>
                </button>
            </div>
        </div>
    );
};

export default BooksInCart;
