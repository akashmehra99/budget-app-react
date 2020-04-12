import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Connect} from 'react-redux';

import store from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRoutes from './routers/AppRoutes';
import {addExpense} from './actions/expenses';
const appStore = store;

appStore.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: -21000, note: 'For Dec month' }));

const jsx = (
    <Provider store={appStore}>
        <AppRoutes />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
