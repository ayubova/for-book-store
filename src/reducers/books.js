import {
  LOAD_BOOKS,
  SET_QUERY,
  SET_QUERYTYPE,
  SET_STARTINDEX,
} from '../actions/actionTypes';

const initialState = {
  books: [],
  query: '',
  queryType: 'intitle',
  startIndex: 0,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state, books: action.books };

    case SET_QUERY:
      return { ...state, query: state.query + action.query };

    case SET_QUERYTYPE:
      return { ...state, queryType: action.queryType };

    case SET_STARTINDEX:
      return { ...state, startIndex: action.startIndex + 10 };

    default:
      return state;
  }
}
