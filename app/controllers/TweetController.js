import Tweet  from '../models/TweetModel';

export default {
  getTweets: (req, res) => {
    //TODO: ERROR handling
    Tweet.find()
    .then((tweet) => {
      return res.json(tweet);
    })
    .catch((e) => res.json(e));
  },
  addTweet: (req, res) => {
    const newTweet = new Tweet(req.body);
    newTweet.save()
    .then(res.json('ok'))
    .catch((e) => res.json(e));
  }

};
