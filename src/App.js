import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './components/BooksList';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello
        <BooksList />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');

ReactDOM.render(<App />, mountNode);
