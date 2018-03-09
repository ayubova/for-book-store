import React from 'react';
import ReactDOM from 'react-dom';
import BooksListPage from './containers/BooksListPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <BooksListPage />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');

ReactDOM.render(<App />, mountNode);
