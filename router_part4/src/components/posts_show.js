import React, { Component } from 'react';

export default class PostsShow extends Component {
  render() {
    return (
      <div>{this.props.params.id}</div>
    );
  }
}
