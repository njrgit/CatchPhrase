import { useEffect, useState, useRef } from "react";

const useUpdateAuth = (doSignIn) => {

    const authen = useRef("");

    useEffect(() => {

        const loadGApiClient = () => {
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    clientId: '80297786840-pvopf5j8hb1ioo1st083mqa97avn7a4c.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    authen.current = window.gapi.auth2.getAuthInstance();
                    if(doSignIn){
                        authen.current.signIn()
                    }else{
                        authen.current.signOut()
                    }
                });
            });
        }

        loadGApiClient();

    })

    return;

};

export default useUpdateAuth;