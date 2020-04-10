import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRoutes from './routers/AppRoutes';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const appStore = store;
appStore.subscribe(() => console.log(appStore.getState()));

appStore.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: -21000, note: 'For Dec month' }));
appStore.dispatch(addExpense({ description: 'Gas bill', amount: 2000, createdAt: -11000, note: 'For Dec month' }));
appStore.dispatch(setTextFilter('water bill'));

const state = appStore.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('Visible Expenses ->', visibleExpenses);

ReactDOM.render(<AppRoutes />, document.getElementById('app'));
