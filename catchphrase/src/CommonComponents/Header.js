import React, { useState, useEffect, useRef, useContext } from "react";
import GoogleAuth from "../Auth/GoogleAuth";
import AuthContext from "../Contexts/AuthContext";
import { Link } from "react-router-dom"
import GoogleAuthStub from "../Auth/GoogleAuthStub";

const Header = () => {

    const isSignedIn = useContext(AuthContext);

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item ">
                List of Catchphrases
            </Link>
            <Link to="/cp/new" className="item">
                Add New
            </Link>
            <Link to="/cp/edit" className="item">
                Edit
            </Link>
            <Link to="/cp/delete" className="item">
                Delete
            </Link>
            <div className="right item">
                <GoogleAuth isSignedIn={isSignedIn}/>
            </div>
        </div>
    );
};

export default Header;