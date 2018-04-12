import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import AppWrapper from './wrapper/AppWrapper';
import store from './SetupStore';

render(
    <Provider store={store}>
        <AppWrapper  />
    </Provider>, document.getElementById('app-container')
);
