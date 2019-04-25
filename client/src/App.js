import HomePage from 'components/pages/HomePage';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path='/'
                            component={HomePage}
                            exact
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
};
