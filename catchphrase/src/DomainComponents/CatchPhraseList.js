import React, { useEffect, useState, useContext } from "react";
import CatchPhraseListItem from "./CatchPhraseListItem";
import AuthContext from "../Contexts/AuthContext";

const catchPhrases = [
    { id: 1, phrase: "Hasta la vista, baby!", origin: "Terminator 2: Judgement Day" },
    { id: 2, phrase: "This Is Sparta!", origin: "300" }
];


const CatchPhraseList = () => {

    const isUserSignedIn = useContext(AuthContext);

    if (!isUserSignedIn) {
        return (<div>
            <h1>PLEASE SIGN IN TO VIEW LIST</h1>
        </div>)
    } else {
        return (
            <div>

                <h1>Movie Catchphrases</h1>
                <table className="ui single line table">
                    <thead>
                        <tr>
                            <th>Phrase</th>
                            <th>Orign</th>
                        </tr>
                    </thead>
                    {catchPhrases.map((cp) => <CatchPhraseListItem key={cp.id} cp={cp} />)}
                </table>
            </div>
        );
    }
};


export default CatchPhraseList;