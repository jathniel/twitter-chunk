import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TweetSchema   = new Schema({
  title: { type : String, default : '', trim : true }

});

module.exports = mongoose.model('Tweet', TweetSchema);
