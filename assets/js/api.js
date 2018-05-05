import axios from 'axios';

export const getTweets = () => {
  return axios.get('/api/tweet')
              .then((res) => res.data);
};
export const addTweet = (title) => {
  return axios.post('/api/tweet', {title})
              .then((res) => res.data);
};
