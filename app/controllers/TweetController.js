import Tweet  from '../models/TweetModel';
import  Utils from '../Utils';
import forEach from 'lodash.foreach';
export default {
  getTweets: (req, res) => {
    Tweet.find()
    .then((tweet) => {
      return res.json(tweet);
    })
    .catch((e) => res.json(e));
  },
  addTweet: (req, res) => {
    let data = Utils.splitMessage(req.body.title);
    console.log(data);
    forEach(data, (value) => {
      const form = {
        title: value
      };
      const newTweet = new Tweet(form);
      newTweet.save()
      .catch((e) => res.json(e));
    });
    return res.json('ok');

  }

};
