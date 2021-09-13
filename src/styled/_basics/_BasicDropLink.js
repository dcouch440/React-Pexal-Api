import React from 'react';
import { Link } from 'react-router-dom';

const BasicDropLink = ({ className, to = '', onClick, text }) => (
    <div className={className}>
        <div className='container'>
            <Link
                to={to}
                onClick={onClick}
            >
                {text}
            </Link>
        </div>
    </div>
);


export default BasicDropLink;