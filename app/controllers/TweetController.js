import Tweet  from '../models/TweetModel';
import  Utils from '../Utils';
import Promise from 'bluebird';

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
    data.reverse();
    Promise.mapSeries(data, function(value) {
      const form = {
        title: value
      };
      const newTweet = new Tweet(form);
      return newTweet.save();
    }).then(function() {
      return res.json('ok');
    });
  },
  render: (req, res) => {
    res.render('index');
  }

};
