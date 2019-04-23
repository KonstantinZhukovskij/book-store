import React from 'react';

const renderShoppingCartButton = (listener, classname) => {
    return (
        <button className='btn btn-dark' onClick={listener}>
            <i className={classname}/>
        </button>
    );
};

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
                {renderShoppingCartButton(() => addBookToCart(book.id), 'fas fa-plus')}
                {renderShoppingCartButton(() => removeBookFromCart(book.id), 'fas fa-minus')}
                {renderShoppingCartButton(() => removeAllBookFromCart(book.id), 'fas fa-trash')}
            </div>
        </div>
    );
};

export default BookInShoppingCart;
