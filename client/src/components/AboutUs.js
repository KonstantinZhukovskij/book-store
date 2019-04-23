import React from 'react';

const renderTextAboutUs = (classname, title, text) => {
    return (
        <div>
            <h3><i className={classname}/>
                {title}
            </h3>
            <p>{text}</p>
        </div>
    );
};

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            {renderTextAboutUs('far fa-star', 'FREE SHIPPING', `We offer free worldwide shipping, 
                which allows you to buy a book from us, even if you live far away from our head office. 
                The delivery process is fast and secure.`)}

            {renderTextAboutUs('fas fa-sync', 'EASY RETURNS', `You can always return a book after 
            you’ve read it. Just use a unique link that can be found inside our every textbook. Then fill out a special
             form and send the book to one of our offices.`)}

            {renderTextAboutUs('far fa-edit', 'TAKE NOTES', `Textbooks purchased from us have a special 
            section where you can take notes. However, we ask all of our clients to limit your writing and highlighting 
            to the minimum amount.`)}

            {renderTextAboutUs('fas fa-medal', 'GUARANTEED', `We hope you enjoy our book buying service. 
            Our team makes every effort to offer you an easy and enjoyable textbook purchase experience at any time.`)}
        </div>
    );
};

export default AboutUs;
