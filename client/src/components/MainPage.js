import AboutUs from 'components/AboutUs';
import BookBar from 'components/BookBar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Preview from 'components/Preview';
import React, { Component, Fragment } from 'react';

export default class MainPage extends Component {

    render() {
        return (
            <Fragment>
                <div>
                    <Header/>
                </div>

                <div>
                    <Preview/>
                </div>

                <div>
                    <BookBar/>
                </div>

                <div>
                    <AboutUs/>
                </div>

                <div>
                    <Footer/>
                </div>
            </Fragment>
        );
    }
};
