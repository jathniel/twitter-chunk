import React from 'react';
import { PropTypes } from 'prop-types';
const AddTweet = ({tweet, handleTweet, handleSubmit}) => {

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="wrapper">
          <input
          type="text"
          name="tweet"
          value={tweet}
          onChange = {handleTweet}
          placeholder="What's happenning"
          className="form-control input input-lg margin-top-10"/>
        </div>
      </div>
    </form>
  );
};
AddTweet.propTypes = {
  tweet: PropTypes.string.isRequired,
  handleTweet: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
export default AddTweet;
