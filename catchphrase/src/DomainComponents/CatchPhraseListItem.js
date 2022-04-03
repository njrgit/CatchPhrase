import React from "react";

const CatchPhraseListItem = (props) =>{

    const {phrase, origin} = props.cp;
    
    return(
        <tbody>
            <tr>
                <td>{phrase}</td>
                <td>{origin}</td>
            </tr>
        </tbody>
    )
}

export default CatchPhraseListItem;