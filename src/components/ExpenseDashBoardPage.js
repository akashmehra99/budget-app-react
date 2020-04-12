import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
        <div>
            <ExpenseListFilters />
        </div>
        <div>
            <ExpenseList />
        </div>  
    </div>
);

export default ExpenseDashBoardPage;