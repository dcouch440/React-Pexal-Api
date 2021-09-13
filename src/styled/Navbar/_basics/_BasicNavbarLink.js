import React from 'react';
import { Link } from 'react-router-dom';

const BasicNavbarLink = ({ className, style, to, text }) => (
    <div
        className={className}
        style={style}
    >
        <Link to={to}>{text}</Link>
    </div>
);

export default BasicNavbarLink;