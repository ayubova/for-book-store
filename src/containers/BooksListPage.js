import React from 'react';
// import { List, Map, fromJS } from 'immutable';
import BookListHeader from './BookListHeader';
import BooksList from './BooksList';
import { searchBooks } from '../utils/fetchApi';

export default class BookListPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: {},
    };
  }

  onSearchHandler = search => {
    this.setState({ search }, this.loadBooks);
  };

  loadBooks() {
    const { search } = this.state;

    searchBooks(search)
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(({ id, volumeInfo }) => {
          return {
            id,
            ...volumeInfo,
          };
        });
        this.setState({ books });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <BookListHeader onSearch={this.onSearchHandler} />
        <BooksList books={books} />
      </div>
    );
  }
}
