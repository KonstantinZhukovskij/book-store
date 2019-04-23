import { addBookToCart, removeAllBookFromCart, removeBookFromCart } from 'actions';
import BookInShoppingCart from 'components/BookInShoppingCart';
import React from 'react';
import { connect } from 'react-redux';

const ShoppingCart = ({ cart, addBookToCart, removeBookFromCart, removeAllBookFromCart }) => {

    const sumTotal = cart.reduce((previousSum, currentValue) => {
        return previousSum + currentValue.sumTotal;
    }, 0);

    return (
        <div className='shoppingCart'>
            <button type='button' className='btn btn-dark shoppingCart' data-toggle='modal' data-target='#cardModal'>
                <i className='fas fa-shopping-cart'/>
            </button>

            <div className='modal fade' id='cardModal' tabIndex='-1' role='dialog'
                 aria-labelledby='modalLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='modal-title'>Your shopping cart</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='true'>
                            {cart.map((book) => {
                                return (
                                    <BookInShoppingCart
                                        book={book}
                                        addBookToCart={addBookToCart}
                                        removeBookFromCart={removeBookFromCart}
                                        removeAllBookFromCart={removeAllBookFromCart}
                                        key={book.id}
                                    />
                                );
                            })}
                        </div>
                        <div className='modal-footer'>
                            <p className='total'>{`Total: ${sumTotal} $`}</p>
                            <div className='modalButtons'>
                                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
                                <button type='button' className='btn btn-secondary'>Go to the payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ cart }) => {
    return { cart };
};

const mapDispatchToProps = { addBookToCart, removeBookFromCart, removeAllBookFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
