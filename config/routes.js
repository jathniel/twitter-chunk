import Tweet from '../app/controllers/TweetController';
import express from 'express';

const router = express.Router();
//TODO: ADD MIDDLEWARE FOR AUTHENTICATION
//ROUTES FOR PROUCTS API
router.get('/tweet', Tweet.getTweets);
router.post('/tweet', Tweet.addTweet);

export default router;
