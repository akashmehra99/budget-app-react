import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Budget App</h1>
        <div><Link to="/">Go Home</Link></div>
        <div><Link to="/create">Create</Link></div>
        <div><Link to="/edit">Edit</Link></div>
        <div><Link to="/help">Help</Link></div>   
    </header>
);

export default Header;