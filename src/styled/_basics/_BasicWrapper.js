import React from 'react';

const BasicWrapper = ({className, children}) => (
    <div className={className}>
        {children}
    </div>
);

export default BasicWrapper;