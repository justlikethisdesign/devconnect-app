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
        const eduItems = education.map(exp => (
            <li key={edu._id} className="list-group-item">
                <h4>{edu.school}</h4>
                <p>
                    <Moment format="YYY/MM/DD">{edu.from}</Moment> -
                    {edu.to === null} ? ('now') : <Moment format="YYY/MM/DD">{edu.to}</Moment>
                </p>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Field of study:</strong> {edu.fieldofstudy}</p>
                {edu.description === '' ? null : (<p><span><strong>Description: </strong> {edu.description}</p>)}
            </li>
        ));

        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center text-info">Experience</h3>
                    {exp.items.length > 0 ? (
                        <ul className="list-group">
                            {exp.items}
                        </ul>
                    ) : (
                        <p className="text-center">No experience listed</p>
                    )}
                </div>
                <div className="col-md-6">
                    <h3 className="text-center text-info">Educatio</h3>
                    {edu.items.length > 0 ? (
                        <ul className="list-group">
                            {edu.items}
                        </ul>
                    ) : (
                        <p className="text-center">No education listed</p>
                    )}
                </div>
            </div>
        )
    }
}

export default ProfileCreds;
