import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TweetSchema   = new Schema({
  title: { type : String, default : '', trim : true },
  date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Tweet', TweetSchema);
