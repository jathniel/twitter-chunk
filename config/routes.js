import Tweet from '../app/controllers/TweetController';
import express from 'express';

const router = express.Router();
//TODO: ADD MIDDLEWARE FOR AUTHENTICATION
//ROUTES FOR PROUCTS API
router.get('/api/tweet', Tweet.getTweets);
router.post('/api/tweet', Tweet.addTweet);

//LOAD INDEX PAGE
router.get('/', Tweet.render);


export default router;
