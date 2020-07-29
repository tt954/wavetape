import moment from 'moment';

export const uploadedAt = past => {
  return moment(past).fromNow();
}