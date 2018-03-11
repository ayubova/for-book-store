import { combineReducers } from 'redux';
import { books, setQuery, setQueryType, setStartIndex } from './books';

export default combineReducers({
  books,
  setQuery,
  setQueryType,
  setStartIndex,
});
