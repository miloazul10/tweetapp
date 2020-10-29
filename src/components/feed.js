import React from "react";
import Tweet from "./tweet/tweet";

//Función regular JSX (Javascript + XML) XML - escribir etiquetas personalizas
// - Distingue entre mayusculas y minusculas
// - Sintaxis estricta

export default function Feed() {

    const profile = "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg";
    const profileName = "Twitter Safety";
    const username = "@TwitterSafety";
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim so" +
            "dales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum." +
            " Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo" +
            " sem.";

    return (
        <div>
            <Tweet
                profile={profile}
                profileName={profileName}
                username={username}
                content={content}/>
            <Tweet
                profile="https://cdn.worldvectorlogo.com/logos/react.svg"
                profileName="React"
                username="@react"
                content={content}/>
            <Tweet
                profile={profile}
                profileName={profileName}
                username={username}
                content={content}/>
            <Tweet
                profile={profile}
                profileName={profileName}
                username={username}
                content={content}/>
            <Tweet
                profile={profile}
                profileName={profileName}
                username={username}
                content={content}/>
        </div>
    );
}