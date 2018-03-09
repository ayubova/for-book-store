import React from 'react';
import BookItem from './BookItem';

export default class Bookslist extends React.PureComponent {
  render() {
    const { books } = this.props;
    return (
      <div>
        {books.map(book => {
          return <BookItem key={`${book.id}`} book={book} />;
        })}
      </div>
    );
  }
}
