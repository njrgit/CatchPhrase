import React, { useEffect, useState } from "react";
import Header from "./CommonComponents/Header";
import CatchPhraseCreate from "./DomainComponents/CatchPhraseCreate";
import CatchPhraseDelete from "./DomainComponents/CatchPhraseDelete";
import CatchPhraseEdit from "./DomainComponents/CatchPhraseEdit";
import CatchPhraseList from "./DomainComponents/CatchPhraseList";
import useAuth from "./Hooks/useAuth";
import { BrowserRouter, Route, Link } from "react-router-dom"
import AuthContext from "./Contexts/AuthContext";


const App = () => {

    const isSignedIn = useAuth();

    console.log("We are using AuthContext now");

    return (
        <div>
            <BrowserRouter >
                <AuthContext.Provider value={isSignedIn}>
                    <Header isSignedIn={isSignedIn} />
                    <Route path="/" exact >
                        <CatchPhraseList isSignedIn={isSignedIn} />
                    </Route>
                    <Route path="/cp/new" exact component={CatchPhraseCreate} />
                    <Route path="/cp/edit" exact component={CatchPhraseEdit} />
                    <Route path="/cp/delete" exact component={CatchPhraseDelete} />
                </AuthContext.Provider>
            </BrowserRouter>
        </div>

    );
};

export default App;