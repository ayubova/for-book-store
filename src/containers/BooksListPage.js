import React from 'react';
// import { List, Map, fromJS } from 'immutable';
import BookListHeader from './BookListHeader';
import BooksList from './BooksList';
import Button from '../components/Button';

export default class BooksListPage extends React.PureComponent {
  render() {
    return (
      <div>
        <BookListHeader />
        <BooksList />
        <Button onClick={this.onLoadMoreHandler}>More books...</Button>
      </div>
    );
  }
}
