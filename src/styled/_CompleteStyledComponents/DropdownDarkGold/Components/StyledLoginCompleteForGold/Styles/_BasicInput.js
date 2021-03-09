import React from 'react';

export const BasicWrapperText = ({className, labels, type, value, onChange, name, placeholder}) => (
    <div className={className}>
        <div className='label-container'>
            <label>
                {labels.toLowerCase() === 'email' ? 'Email address' : null}
                {labels.toLowerCase() === 'password' ? 'Password' : null}
            </label>
        </div>
        <input
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
        />
    </div>
);

BasicWrapperText.defaultProps = {
    labels: 'none'
};
