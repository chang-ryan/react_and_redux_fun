import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title for Post'
  },
  categories: {
    type: 'input',
    label: 'Enter some categories for this post'
  },
  content: {
    type: 'textarea',
    label: 'Post Content'
  }
}; // ['title', 'categories', 'content'];

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created (201)
        this.context.router.push('/');
      });
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div
        key={field} 
        className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'text-danger' : ''}`}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    // const handleSubmit = this.props.handleSubmit;
    const { handleSubmit } = this.props; // ES6 syntax identical to above
    // const title = this.props.fields.title;
    const { fields: { title, categories, content }} = this.props; // ES6 syntax identical to above

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        {_.map(FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Please enter ${field}`;
    }
  });

  return errors;
}

// connect takes two arguments, connect(mapStateToProps, mapDispatchToProps)
// reduxForm takes form config, mapStateToProps, mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: _.keys(FIELDS),
  // validate: validate
  validate // ES6 syntax for the above statement
}, null, { createPost })(PostsNew);
