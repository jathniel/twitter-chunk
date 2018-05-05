import React, { Component } from 'react';
import TweetList from './TweetList';
import AddTweet from './AddTweet';
import * as api from '../api';
class Tweet extends Component {
  state = {
    tweet: '',
    tweetList: [],
  }
  componentDidMount() {
    this.getTweetList();
  }
  getTweetList = () => {
    return api.getTweets()
    .then((result) => {
      this.setState({ tweetList: result});
    })
    .catch((e) => {
      console.error(e);
    });
  };
  handleTweet = (event) => {
    event.preventDefault();
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    return api.addTweet(this.state.tweet).
    then( () => {
        this.setState({tweet: '' });
        this.getTweetList();
    });
  };
  render() {

    return (
      <div className="tweet-container col-xs-12 col-sm-5">
        <AddTweet tweet={this.state.tweet} handleTweet={this.handleTweet} handleSubmit={this.handleSubmit}/>
        <TweetList tweets={this.state.tweetList} />
      </div>
    );
  }
}

export default Tweet;
