import React from 'react';

const BookItem = ({
  id,
  title,
  subtitle,
  authors,
  publisher,
  publishedDate,
  description,
  imageLink,
}) => (
  <div>
    <img src={imageLink} alt={title || ''} />
    <div>
      <h2>{title || ''}</h2>
      <h3>{subtitle || ''}</h3>
      <div>
        <span>
          <strong>ID: </strong>
        </span>
        <span>{id || ''}</span>
      </div>
      <section>
        <div>
          <span>
            <strong>Authors: </strong>
          </span>
          <span>{(authors || []).join(', ')}</span>
        </div>
        <div>
          <span>
            <strong>Publisher: </strong>
          </span>
          <span>{publisher || ''}</span>
        </div>
        <div>
          <span>
            <strong>Published date: </strong>
          </span>
          <span>{publishedDate || ''}</span>
        </div>
        <div>
          <span>
            <strong>Description: </strong>
          </span>
          <span>{description || ''}</span>
        </div>
      </section>
    </div>
    <br />
    <br />
  </div>
);

export default BookItem;
