import http from './httpService';
import { apiEndPoint } from '../config.json';

const apiEndpoint = apiEndPoint + '/books';

function bookUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getBooks() {
  return http.get(apiEndpoint);
}

export function getBook(bookId) {
  return http.get(bookUrl(bookId));
}
