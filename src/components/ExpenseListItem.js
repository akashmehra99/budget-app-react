import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, createdAt, note, dispatch}) => (
    <div key={id} id={id}>
        <Link to={`/edit/${id}`}>
            <h3>{description} - Note: {note}</h3>
        </Link>
        <p>{amount} - {moment().format('Do, MMMM YYYY')}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>
            Remove
        </button>
    </div>
);

const ConnectedExpenseListItem = connect()(ExpenseListItem);

export default ConnectedExpenseListItem;