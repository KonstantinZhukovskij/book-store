import ShoppingCart from 'containers/ShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';

const renderHeaderButton = (classname, title) => {
    return (
        <Link className='btn btn-dark' to='/'>
            <i className={classname}/>
            {title}
        </Link>
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
                <ShoppingCart/>
            </div>
        </div>
    );
};

export default Header;
