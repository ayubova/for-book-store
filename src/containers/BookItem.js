import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = props => {
  const {
    id,
    title,
    subtitle = '',
    authors = [],
    imageLinks: { thumbnail: imageLink } = '',
  } = props.book;
  return (
    <div>
      <img src={imageLink} alt={title} />
      <div>
        <Link to={`/book/${id}`}>
          <h2>{title}</h2>
        </Link>
        <h3>{subtitle}</h3>
        <div>
          <span>
            <strong>ID: </strong>
          </span>
          <span>{id}</span>
        </div>
        <section>
          <div>
            <span>
              <strong>Authors: </strong>
            </span>
            <span>{authors.join(', ')}</span>
          </div>
        </section>
      </div>
      <br />
      <br />
    </div>
  );
};

export default BookItem;
