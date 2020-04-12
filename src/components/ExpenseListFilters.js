import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {

    state = {
        calenderFocused: null,
        numberOfMonths: 1
    };

    onCalenderFocusChange = (focused) => {
        this.setState(() => ({ calenderFocused: focused }));
    }

    onDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }} />
                <select value={this.props.filters.sortBy}
                    onChange={(e) => {
                        const dropDownValue = e.target.value;
                        this.props.dispatch(dropDownValue === 'date' ? sortByDate() : sortByAmount());
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="start_date" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="end_date" // PropTypes.string.isRequired,
                    onDatesChange={this.onDateChange}// PropTypes.func.isRequired,
                    focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onCalenderFocusChange}
                    isOutsideRange={() => false}
                    numberOfMonths={this.state.numberOfMonths}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapToStateProps = (state) => {
    return {
        filters: state.filters
    }
};

const ConnectedExpenseListFilters = connect(mapToStateProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;
