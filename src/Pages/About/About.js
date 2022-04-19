import React from "react";


const About = () => {
    return (
        <div className="text-success">
            <h1>What is the difference between authorization and authentication?</h1>
            <p>Ans: Authorization is the first step of security system.It validates user identity.It is the process of verifying the credential using password or other thing.When the credentials matches the stored information in the system user can get access.In this process data moves through ID token for maintaining security.In the other hand,authorization must follow authentication in a system security environment.</p>
            <h1>Why are you using firebase?What other options do you have to implement authentication?</h1>
            <p>Ans: Because it is easy to understand,time saving.For a beginner web developer firebase is perfect.It allows developers to build even complex projects quite easily. It has all the tools developers need to get going, from authentication to hosting.The other options to implement authentication are- face or touch unlock,authentication application,security key etc.</p>
            <h1>What other services does firebase provide other than authentication?</h1>
            <p>Ans:Firebase provide different services other than authentication.They provide realtime database service.They provide flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development.Their cloud storage for firebase is built for app developers who need to store and serve user-generated content, such as photos or videos.Firebase hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices.</p>

        </div>
    )

}

export default About;