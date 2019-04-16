import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='companyInfo'>
                <h3>ABOUT US</h3>
                <p>We are a worldwide textbook sales service created by readers for readers.
                    We have been working since 2014 and offer a variety of new and used textbooks on various topics,
                    including web design, development, business, economics, marketing, and more.
                </p>
                <p>© 2019 All Rights Reserved Terms of Use and Privacy Policy</p>
            </div>
            <div className='newsLetter'>
                <h3>NEWSLETTER</h3>
                <p>Keep up with our always upcoming news, events, and updates.
                    Enter your e-mail and subscribe to our newsletter.</p>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' placeholder='Enter your e-mail'
                           aria-describedby='basic-addon2'/>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;