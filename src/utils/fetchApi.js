import api from '../constants/api';

const { key, baseUrl } = api;

export const searchBooks = ({ query, queryType }) =>
  fetch(
    `${baseUrl}?q=${queryType}:${query}&key=${key}&maxResults=40&country=RU`,
  );

export const searchBookById = id => fetch(`${baseUrl}/${id}?&key=${key}`);
