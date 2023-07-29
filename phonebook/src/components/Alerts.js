import React from 'react';
import '../index.css';

const Alerts = ({message}) => {
    if (message === null) {
        return null;
    }

    return (
        <div className='alert'>
            {message}
        </div>
    )
}

export default Alerts;
