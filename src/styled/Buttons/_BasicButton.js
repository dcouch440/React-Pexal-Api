import React from 'react'

const BasicButton = ({className, row, text, onClick, onSubmit}) => (
    <div className={className}>
        <div className={row === 'end' ? 'end' : null}>
            <button
                onClick={onClick}
                onSubmit={onSubmit}
                type="submit"
                >
                {text}
            </button>
        </div>
    </div>
)
export default BasicButton