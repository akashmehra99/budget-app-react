// A component that renders another component - Higher Order Component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
     return (props) => (
         <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props} />
         </div>
     );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="test" />, document.getElementById('app'));