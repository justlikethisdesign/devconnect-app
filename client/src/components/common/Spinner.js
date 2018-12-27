import React from 'react';
import PropTypes from 'prop-types';
import spinner from './spinner.gif';

export default () => {
    return (
        <div>
            <img
                src={spinner}
                alt="Loading..."
                style={{ width: '200px', margin: 'auto', display: 'block' }}
            />
        </div>
    )
}
