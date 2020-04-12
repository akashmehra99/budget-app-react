import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Page - {props.match.params.id}</h1>
            <ExpenseForm expense={props.expense} 
                onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
                
                }}
                onRemove={({id}) => {
                    console.log(id, props.expense);
                    props.dispatch(removeExpense({id}));
                    props.history.push('/');
                }}
            />
        </div>
    );

};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}

const ConnectedEditExpensePage = connect(mapStateToProps)(EditExpensePage);

export default ConnectedEditExpensePage;
