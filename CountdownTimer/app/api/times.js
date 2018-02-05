import request from './request';

export function getTime(userID) {
  return request('/users/' + userID + '/time').then(user => user.time);
}