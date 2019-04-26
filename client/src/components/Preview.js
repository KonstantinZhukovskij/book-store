import React from 'react';

const scrollToElement = () => {
    const windowSize = document.documentElement.clientHeight;
    window.scrollTo({ top: windowSize, behavior: 'smooth' });
};

const Preview = () => {
    return (
        <div className='preview'>
            <div className='previewContent'>
                <h1 className='textPreview'>
                    Only for visitors to our site
                </h1>
                <p className='textPreview'>
                    We regularly update our catalog with exclusive offers from domestic and foreign authors and
                    publishers.
                </p>
                <button type='button' className='btn btn-secondary' onClick={scrollToElement}>
                    View Catalog
                </button>
            </div>
        </div>
    );
};

export default Preview;
