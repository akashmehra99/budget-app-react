import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import ErrorPage from '../components/ErrorPage';

const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/budget-app-react" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} exact={true} />
            <Route path="/edit/:id" component={EditExpensePage} exact={true} />
            <Route path="/help" component={HelpPage} exact={true} />
            <Route component={ErrorPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;