import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            note: props.expense ? props.expense.note : '',
            calenderFocused: false,
            numberOfMonths: 1,
            formErrors: {
                description: false,
                amount: false
            }
        };
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onCalenderFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description
            }
        });
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        const regEx = /^\d{1,}(\.\d{0,2})?$/;
        if (!amount || amount.match(regEx)) {
            this.setState(() => ({ amount }));
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                formErrors: {
                    description: !!!this.state.description,
                    amount: !!!this.state.amount
                }
            }));
        } else {
            this.setState(() => ({
                formErrors: {
                    description: false,
                    amount: false
                }
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    onRemoveClick = () => {
        this.props.onRemove({
            id: this.props.expense.id
        });
    }

    render() {
        return (
            <div>
                {this.state.formErrors.description && <p>Please Provide proper description</p>}
                {this.state.formErrors.amount && <p>Please Provide valid amount</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onCalenderFocusChange}
                        id="expense_date"
                        numberOfMonths={this.state.numberOfMonths}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        type="text"
                        placeholder="Add a note for your expense(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    {!this.props.expense && <button type="submit">Add Expense</button>}
                    {this.props.expense && <button type="submit">Edit Expense</button>}
                </form>
                {this.props.expense && <button onClick={this.onRemoveClick}
                    >
                    Remove
                </button>}
            </div>
        );
    }
}

export default ExpenseForm;
