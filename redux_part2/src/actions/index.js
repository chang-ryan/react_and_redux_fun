export function selectBook(book) {
  // selectBook is an ActionCreator that returns an "action" object
  return {
    type: 'BOOK_SELECTED', // is usually a const
    payload: book
  };
}
