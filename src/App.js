import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');

ReactDOM.render(<App />, mountNode);
