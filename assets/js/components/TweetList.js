import React from 'react';
import { PropTypes } from 'prop-types';

const TweetList = ({
  tweets
}) => {
  return(
    <div>
      {tweets.map((tweet) =>
        <div className="tweet" key={tweet._id}>
          <div><div className="tweet__icon"></div></div>
          <div className="tweet__container">
            <div className="tweet__name">Anonymous</div>
            <p className="tweet__description">{tweet.title}</p>
          </div>
      </div>
      )}
    </div>
  );
};
TweetList.propTypes = {
  tweets: PropTypes.array.isRequired,
};
export default TweetList;
