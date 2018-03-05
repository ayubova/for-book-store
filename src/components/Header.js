import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Booklist from './BooksList';
import Home from './Home';

const Header = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/books" component={Booklist} />
    </div>
  </Router>
);

export default Header;
