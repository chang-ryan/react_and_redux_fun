import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="container">
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add A Post</Link>
        </div>
        <div>A list of blog posts</div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

function mapStateToProps() {

}

export default connect(null, { fetchPosts })(PostsIndex);
