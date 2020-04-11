import React from 'react';

const ExpenseListItem = ({id, description, amount, createdAt, note}) => (
    <div key={id} id={id}>
        <span>{description}</span>
        <span>{amount}</span>
        <span>{createdAt}</span>
        <span>{note}</span>
    </div>
);

export default ExpenseListItem;