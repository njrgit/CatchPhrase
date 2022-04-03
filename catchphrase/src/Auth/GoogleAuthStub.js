import React, { useState } from "react";

const GoogleAuthStub = ({sendDataToParent}) => {

    const [isUserSignedIn, setIsUserSignedIn] = useState(false);


    const renderGAuthButton = () => {
        if (isUserSignedIn === null) {
            return null;
        } else if (isUserSignedIn === false) {
            return (
                <div>
                    <button onClick={() => { setIsUserSignedIn(true); sendDataToParent(isUserSignedIn)}} className="ui green button">Sign In</button>
                </div>)
        } else {
            return (
                <div>
                    <button onClick={() => { setIsUserSignedIn(false); sendDataToParent(isUserSignedIn)}} className="ui red button">Sign Out</button>
                </div>)
        }
    }

    return (
        <div>
            {renderGAuthButton()}
        </div>
    )

}

export default GoogleAuthStub;