import React from 'react';
import { PropTypes } from 'prop-types';

const TweetList = ({
  tweets
}) => {
  return(
    <div>
      {tweets.map((tweet) =>
        <div key={tweet._id}>{tweet.title}</div>
      )}
    </div>
  );
};
TweetList.propTypes = {
  tweets: PropTypes.array.isRequired,
};
export default TweetList;
