import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRoutes from './routers/AppRoutes';


ReactDOM.render(<AppRoutes />, document.getElementById('app'));
