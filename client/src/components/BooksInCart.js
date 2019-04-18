import React from 'react';

const BooksInCart = () => {
    return (
        <div className='booksInCart'>
            <p>
                "{`JavaScript: The Good Parts`}" {`Douglas Crockford`} {`5 pc`} {`300`}$
            </p>
            <button className='btn btn-dark'>
                <i className='fas fa-trash'/>
            </button>
        </div>
    );
};

export default BooksInCart;
