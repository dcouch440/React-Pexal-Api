import React from 'react'

export const StyledBackground = ({className, children}) => (
    <div className={className}>
        <div className="background-container-Styled"></div>
        {children}
    </div>
);