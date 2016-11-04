import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result gets passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // Whatever is returned from mapDispatchToProps becomes a prop for BookList
  // ie. this.props.selectBook
}

function mapStateToProps(state) {
  // Whatever this function returns will be accessible via this.props in BookList
  return {
    books: state.books
    // Will be accessible via this.props.books (see renderList() from above)
  };
}

// connect promotes BookList from component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
