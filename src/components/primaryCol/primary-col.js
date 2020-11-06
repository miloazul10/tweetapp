import React from 'react';
import PostTweet from '../postTweet/post-tweet';

const PrimaryCol = (props) => {
    return (
        <div className="t-col-container">
            <h3>Inicio</h3>
            <PostTweet profileUrl={props.profileUrl} />
        </div>
    )
}

export default PrimaryCol;