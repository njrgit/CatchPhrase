import { useEffect, useState, useRef } from "react";

const useAuth = () => {

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
                    authen.current.isSignedIn.listen(onAuthChange);
                });
            });
        }

        loadGApiClient();

    }, [isUserSignedIn])

    const onAuthChange = () => {
        setIsUserSignedIn(authen.current.isSignedIn.get());
    };

    return isUserSignedIn;

};

export default useAuth;