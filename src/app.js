import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Connect} from 'react-redux';

import store from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRoutes from './routers/AppRoutes';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const appStore = store;

appStore.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: -21000, note: 'For Dec month' }));
appStore.dispatch(addExpense({ description: 'Gas bill', amount: 2000, createdAt: -11000, note: 'For Dec month' }));
appStore.dispatch(setTextFilter('gas bill'));

setTimeout(() => {
    appStore.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: -12000, note: 'For Jan month' }));
}, 5000);

const jsx = (
    <Provider store={appStore}>
        <AppRoutes />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
