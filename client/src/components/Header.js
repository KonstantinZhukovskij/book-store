import Cart from 'containers/ShoppingCart';
import React from 'react';

const renderHeaderButton = (classname, title) => {
    return (
        <button className='btn btn-dark'><i className={classname}/>
            {title}
        </button>
    );
};

const Header = () => {
    return (
        <div className='header'>
            <div className='headerButtons'>
                {renderHeaderButton('fas fa-home', 'HOME')}
                {renderHeaderButton('fas fa-grin-stars', 'PROMOTIONS')}
                {renderHeaderButton('fab fa-cc-visa', 'HOW TO PAY')}
                {renderHeaderButton('fas fa-address-card', 'ABOUT US')}
                <Cart/>
            </div>
        </div>
    );
};

export default Header;
