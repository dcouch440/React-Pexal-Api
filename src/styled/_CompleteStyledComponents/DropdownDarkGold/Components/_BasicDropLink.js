import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const BasicDropLink = ({className, to, onClick, text}) => (
    <div className={className}>
        <div className='container'>
        <Link to={to} onClick={onClick}>
            {text}
        </Link>
        </div>
    </div>
)

BasicDropLink.prototype = {
    text: PropTypes.string,
    to: PropTypes.string,
}
BasicDropLink.defaultProps = {
    to: '',
}

export default BasicDropLink