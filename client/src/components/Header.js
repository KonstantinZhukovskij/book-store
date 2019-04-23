import Cart from 'containers/ShoppingCart';
import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerButtons'>
                <button className='btn btn-dark'><i className='fas fa-home'/>HOME</button>
                <button className='btn btn-dark'><i className='fas fa-grin-stars'/>PROMOTIONS</button>
                <button className='btn btn-dark'><i className='fab fa-cc-visa'></i>HOW TO PAY</button>
                <button className='btn btn-dark'><i className='fas fa-address-card'/>ABOUT US</button>
                <Cart/>
            </div>
        </div>
    );
};

export default Header;
