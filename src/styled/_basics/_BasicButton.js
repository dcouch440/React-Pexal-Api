import React from 'react';

const BasicButton = ({ className, row, text, onClick, onSubmit }) => (
    <div className={className}>
        <div className={row === 'end' ? 'end' : null}>
            <button
                type="submit"
                onClick={onClick}
                onSubmit={onSubmit}
            >
                {text}
            </button>
        </div>
    </div>
);

export default BasicButton;