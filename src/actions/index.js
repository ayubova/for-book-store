import { searchBooks } from '../utils/fetchApi';
import {
  LOAD_BOOKS,
  SET_QUERY,
  SET_QUERYTYPE,
  SET_STARTINDEX,
} from './actionTypes';

export function loadBooks(books) {
  return {
    type: LOAD_BOOKS,
    books,
  };
}

export function booksFetch(search) {
  return dispatch => {
    searchBooks(search)
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(({ id, volumeInfo }) => {
          return { id, ...volumeInfo };
        });
        dispatch(loadBooks(books));
      });
  };
}

export function setQuery(query) {
  return {
    type: SET_QUERY,
    query,
  };
}

export function setQueryType(queryType) {
  return {
    type: SET_QUERYTYPE,
    queryType,
  };
}

export function setStartIndex(startIndex) {
  return {
    type: SET_STARTINDEX,
    startIndex,
  };
}
