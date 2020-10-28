import React from 'react';
import './styles.css';

const Tweet = () => {
    return (
        <div className="tweet-container">
            <div className="row">
                <div className="c1">
                    <img src="https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg" alt="profile" />
                </div>
                <div className="c2">
                    <h6>Twitter Safety</h6>
                    <h6>@TwitterSafety</h6>
                </div>
                <div className="c3"></div>
            </div>
            <div className="row">
                <p className="content">                
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.
                </p>
            </div>
        </div>
    )
}

export default Tweet;