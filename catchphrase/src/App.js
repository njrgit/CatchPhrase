import React from "react";
import Route from "./Route";
import DropdownList from "./DropdownList";
import Header from "./Header";
import CheckBox from "./CheckBox";
import TextInput from "./TextInput";


const App = () => {
    return(
    <div>
        <Header/>
        <Route path="/dropdown">
            <DropdownList/>
        </Route>
        <Route path="/checkbox">
            <CheckBox/>
        </Route>
        <Route path="/inputbox">
            <TextInput/>
        </Route>
    </div>
    );
};

export default App;