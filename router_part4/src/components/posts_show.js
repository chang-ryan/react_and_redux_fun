import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        // successful delete request (200 OK)
        this.context.router.push('/');
      });
  }

  render() {
    const post = this.props.post;

    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Tags: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
