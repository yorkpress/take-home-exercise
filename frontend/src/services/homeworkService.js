import http from './httpService';
import { apiEndPoint } from '../config.json';

const apiEndpoint = apiEndPoint + '/homeworks';

function homeworkUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getHomeworks() {
  return http.get(apiEndpoint);
}

export function getHomework(homeworkId) {
  return http.get(homeworkUrl(homeworkId));
}
