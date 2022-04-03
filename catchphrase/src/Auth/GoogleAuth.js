import React, { useEffect, useState, useRef } from "react";

const GoogleAuth = ({isSignedIn}) => {

    const [isUserSignedIn, setIsUserSignedIn] = useState(null);
    const authen = useRef("");

    useEffect(() => {

        const loadGApiClient = () => {
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    clientId: '80297786840-pvopf5j8hb1ioo1st083mqa97avn7a4c.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    authen.current = window.gapi.auth2.getAuthInstance();
                    setIsUserSignedIn(authen.current.isSignedIn.get());
                });
            });
        }

        loadGApiClient();

    }, [isUserSignedIn])


    const renderGAuthButton = () => {
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn === false) {
            return (
            <div>
                    <button onClick={() => {authen.current.signIn()}} className="ui green button">Sign In</button>
            </div>)
        } else {
            return(
            <div>
                    <button onClick={() => {authen.current.signOut()}} className="ui red button">Sign Out</button>
            </div>)
        }
    }

    return (
        <div>
            {renderGAuthButton()}
        </div>
    )
};

export default GoogleAuth;