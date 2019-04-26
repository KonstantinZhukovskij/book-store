import AboutUs from 'components/AboutUs';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Preview from 'components/Preview';
import BookBar from 'containers/BookPanel';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Preview/>
            <BookBar/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default HomePage;
