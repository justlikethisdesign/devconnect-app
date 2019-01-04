import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';

class Post extends React.Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render () {
        return (
            <h1>Post</h1>
        )
    }
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, {getPost})(Post);
