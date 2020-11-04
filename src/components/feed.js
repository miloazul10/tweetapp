import React from "react";
import Tweet from "./tweet/tweet";

//Función regular JSX (Javascript + XML) XML - escribir etiquetas personalizas
// - Distingue entre mayusculas y minusculas
// - Sintaxis estricta

export default function Feed(props) {

    // const profile = "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg";
    // const profileName = "Twitter Safety";
    // const username = "@TwitterSafety";
    // const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim so" +
    //         "dales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum." +
    //         " Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo" +
    //         " sem.";

    // const profile = props.datos.profile;
    // const profileName = props.datos.profileName;

    const {profile, profileName, username, content, display} = props.datos;

    return (
        <div>
            <button onClick={() => props.mostrar()}>Mostrar Tweets Ocultos</button>
            <button onClick={() => props.ocultar()}>Ocultar Tweets</button>
            {
                display ? 
                <Tweet
                profile={profile}
                profileName={profileName}
                username={username}
                content={content}/> : null
            }
            
            <Tweet
                profile="https://cdn.worldvectorlogo.com/logos/react.svg"
                profileName="React"
                username="@react"
                content={content}/>

            {
                display ? 
                <Tweet
                profile={profile}
                profileName={profileName}
                username={username}
                content={content}/> : null
            }
            {
                display ? 
                <Tweet
                profile={profile}
                profileName={profileName}
                username={username}
                content={content}/> : null
            }
            {
                display ? 
                <Tweet
                profile={profile}
                profileName={profileName}
                username={username}
                content={content}/> : null
            }
        </div>
    );
}