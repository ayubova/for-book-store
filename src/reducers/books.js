const initialState = {
  books: [],
  query: '',
  queryType: 'intitle',
  startIndex: 0,
};

export function books(state = initialState.books, action) {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return action.books;
    default:
      return state;
  }
}

export function setQuery(state = initialState.query, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return state + action.query;
    default:
      return state;
  }
}

export function setQueryType(state = initialState.queryType, action) {
  switch (action.type) {
    case 'SET_QUERYTYPE':
      return action.queryType;
    default:
      return state;
  }
}

export function setStartIndex(state = initialState.startIndex, action) {
  switch (action.type) {
    case 'SET_STARTINDEX':
      return action.startIndex + 10;
    default:
      return state;
  }
}
