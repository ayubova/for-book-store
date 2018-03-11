import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextBox from '../components/TextBox';
import SelectBox from '../components/SelectBox';
import Button from '../components/Button';
import { booksFetch, setQuery, setQueryType } from '../actions';
import queryParams from '../constants/queryParams';

class BookListHeader extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <TextBox
          value={this.props.query}
          onChange={query => this.props.setQuery(query)}
        />
        <Button
          onClick={() =>
            this.props.fetchBooks(
              this.props.query,
              this.props.queryType,
              this.props.startIndex,
            )
          }
        >
          Найти
        </Button>
        <SelectBox
          value={this.props.queryType}
          onChange={queryType => this.props.setQueryType(queryType)}
          options={queryParams}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    query: state.query,
    queryType: state.queryType,
    startIndex: state.startIndex,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: (query, queryType, startIndex) =>
      dispatch(booksFetch(query, queryType, startIndex)),
    setQuery: query => dispatch(setQuery(query)),
    setQueryType: queryType => dispatch(setQueryType(queryType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListHeader);

// BookListHeader.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };
