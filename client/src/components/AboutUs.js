import React from 'react';

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div>
                <h3><i className='far fa-star'/>FREE SHIPPING</h3>
                <p>We offer free worldwide shipping, which allows you to buy a book from us,
                    even if you live far away from our head office. The delivery process is fast and secure.</p>
            </div>
            <div>
                <h3><i className='fas fa-sync'/>EASY RETURNS</h3>
                <p>You can always return a book after you’ve read it.
                    Just use a unique link that can be found inside our every textbook.
                    Then fill out a special form and send the book to one of our offices.</p>
            </div>
            <div>
                <h3><i className='far fa-edit'/>TAKE NOTES</h3>
                <p>Textbooks purchased from us have a special section where you can take notes.
                    However, we ask all of our clients to limit your writing and highlighting to the minimum amount.</p>
            </div>
            <div>
                <h3><i className='fas fa-medal'/>GUARANTEED</h3>
                <p>We hope you enjoy our book buying service. Our team makes every effort to offer you an easy and
                    enjoyable textbook purchase experience at any time.</p>
            </div>
        </div>
    );
};

export default AboutUs;
