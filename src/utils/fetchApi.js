const searchBooks = ({ query, queryType }) => {
  const key = 'AIzaSyBhs1kVzhyMgedcziSyiezhhhE8Xp5FTQ8';
  const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
  const apiUrl = `${baseUrl}?q=${queryType}:${query}&key=${key}&maxResults=40&country=RU`;
  return fetch(apiUrl);
};
export default searchBooks;
