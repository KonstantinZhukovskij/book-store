import BooksInCart from 'components/BooksInCart';
import React from 'react';

const Popup = () => {
    return (
        <div className='popup'>
            <button type='button' className='btn btn-dark shoppingCart' data-toggle='modal' data-target='#cardModal'>
                <i className='fas fa-shopping-cart'/>
            </button>

            <div className='modal fade' id='cardModal' tabIndex='-1' role='dialog'
                 aria-labelledby='modalLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='modal-title'>Your bookcart</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='true'>
                            <BooksInCart/>
                            <BooksInCart/>
                            <BooksInCart/>
                        </div>
                        <div className='modal-footer'>
                            <p className='total'>{`Total` + ' ' + `200$`}</p>
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

export default Popup;
