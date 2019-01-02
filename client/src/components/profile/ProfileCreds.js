import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class ProfileCreds extends React.Component {
    render () {

        const { experience, education } = this.props;

        // Make experience items
        const expItems = experience.map(exp => (
            <li key={exp._id} className="list-group-item">
                <h4>{exp.company}</h4>
                <p>
                    <Moment format="YYY/MM/DD">{exp.from}</Moment> -
                    {exp.to === null} ? ('now') : <Moment format="YYY/MM/DD">{exp.to}</Moment>
                </p>
                <p><strong>Position:</strong> {exp.title}</p>
                {exp.location === '' ? null : (<p><span><strong>Location: </strong> {exp.location}</p>)}
                {exp.description === '' ? null : (<p><span><strong>Description: </strong> {exp.description}</p>)}
            </li>
        ));

        // Make education items

        return (
            <div>
                <h1>TODO: Profile Creds</h1>
            </div>
        )
    }
}

export default ProfileCreds;
