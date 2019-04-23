import AboutUs from 'components/AboutUs';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Preview from 'components/Preview';
import BookBar from 'containers/BookPanel';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header/>
                <Preview/>
                <BookBar/>
                <AboutUs/>
                <Footer/>
            </Provider>
        );
    }
};
