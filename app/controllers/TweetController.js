import Tweet  from '../models/TweetModel';
import  Utils from '../Utils';
import forEach from 'lodash.foreach';
export default {
  getTweets: (req, res) => {
    Tweet.find().sort({date: -1})
    .then((tweet) => {
      return res.json(tweet);
    })
    .catch((e) => res.json(e));
  },
  addTweet: (req, res) => {
    let data = Utils.splitMessage(req.body.title);
    data = data.reverse();
    forEach(data, (value) => {
      const form = {
        title: value
      };
      const newTweet = new Tweet(form);
      newTweet.save()
      .catch((e) => res.json(e));
    });
    return res.json('ok');

  },
  render: (req, res) => {
    res.render('index');
  }

};
