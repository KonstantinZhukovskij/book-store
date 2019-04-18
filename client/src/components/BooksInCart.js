import React from 'react';

const BooksInCart = () => {
    return (
        <div className='booksInCart'>
            <div className='productInformation'>
                <p>
                    "{`JavaScript: The Good Parts`}" {`Douglas Crockford`}
                </p>
                <p>
                    {`5 pc`}
                </p>
                <p>
                    {`300`}$
                </p>
            </div>
            <div>
                <button className='btn btn-dark'>
                    <i className='fas fa-plus'/>
                </button>
                <button className='btn btn-dark'>
                    <i className='fas fa-minus'/>
                </button>
                <button className='btn btn-dark'>
                    <i className='fas fa-trash'/>
                </button>
            </div>
        </div>
    );
};

export default BooksInCart;
