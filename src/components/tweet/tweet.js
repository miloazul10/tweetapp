import './styles.css';

const Tweet = (props) => {
    return (
        <div className="tweet-container">
            <div className="row">
                <div className="c1">
                    <img src={props.profile} alt="profile" />
                </div>
                <div className="c2">
                    <h6>{props.profileName}</h6>
                    <h6>{props.username}</h6>
                </div>
                <div className="c3"></div>
            </div>
            <div className="row">
                <p className="content">                
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.