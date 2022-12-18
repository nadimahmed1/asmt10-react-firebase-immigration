import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center border'>
            <h2 className='p-5 text-center'>Docs</h2>
            <p>Difference between authorization and authentication?
                <br />

                <small>Ans: Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.</small>
            </p>

            <br />
            <p>Why are you using firebase? What other options do you have to implement authentication?
                <br />
                <small>
                    Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </small>
            </p>

            <br />
            <p>What other services does firebase provide other than authentication?
                <br />
                <small>Ans: Cloud Firestore. Build serverless, secure apps at global scale. ...
                    Realtime Database. Build serverless apps by storing and syncing JSON data between your users in near-realtime, on or offline, with strong user-based security. ...
                    Remote Config. ...
                    gmp_mods. ...
                    gmp_app_check. ...
                    Cloud Functions. ...
                    gmp_auth. ...
                    Cloud Messaging</small>
            </p>

        </div>
    );
};

export default Blogs;