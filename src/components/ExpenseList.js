import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses'; 

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <p>{props.expenses.length}</p>
        {props.expenses.map((expense) => {
            return (
                <ExpenseListItem key={expense.id} {...expense} />
            );
        })}
        <p>{props.name}</p>
    </div>
);

const mapToStateProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
}

const ConnectedExpenseList = connect(mapToStateProps)(ExpenseList);

export default ConnectedExpenseList;
