import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Experience extends Component {
    render() {

        const experience = this.props.experience.map(exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>{exp.from} - {exp.to}</td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        ));

        return (
            <div>
                <h4 className="mb-4">Experience Credentials</h4>
                <table className="table">
                    <thead>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {experience}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(null)(withRouter(Experience));
