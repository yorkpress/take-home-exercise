import http from './httpService';
import { apiEndPoint } from '../config.json';

const apiEndpoint = apiEndPoint + '/students';

function studentUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getStudents() {
  return http.get(apiEndpoint);
}

export function getStudent(studentId) {
  return http.get(studentUrl(studentId));
}
