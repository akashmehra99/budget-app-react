import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text" 
            placeholder="search"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
        }} />
        <select value={props.filters.sortBy}
            onChange={(e) => {
                const dropDownValue = e.target.value;
                props.dispatch(dropDownValue === 'date' ? sortByDate(): sortByAmount());
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapToStateProps = (state) => {
    return {
        filters: state.filters
    }
};

const ConnectedExpenseListFilters = connect(mapToStateProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;
