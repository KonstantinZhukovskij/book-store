import React from 'react';

const BookInShoppingCart = ({ book, addBookToCart, removeBookFromCart, removeAllBookFromCart }) => {
    return (
        <div className='bookInShoppingCart'>
            <div className='bookInformation'>
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

export default BookInShoppingCart;
