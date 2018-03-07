import React from 'react';
import BookItem from './BookItem';
import searchBooks from '../utils/fetchApi';

export default class Booklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    searchBooks('marvel', 'intitle')
      .then(response => response.json())
      .then(data => this.storeBooks(data))
      .catch(error => console.log(error));
  }
  storeBooks = data => {
    const books = data.items.map(({ id, volumeInfo }) => {
      return {
        id,
        ...volumeInfo,
      };
    });
    this.setState({ books });
  };

  render() {
    return (
      <ul>
        {this.state.books.map(book => (
          <li key={`${book.id}`}>
            <BookItem {...book} />
          </li>
        ))}
      </ul>
    );
  }
}
