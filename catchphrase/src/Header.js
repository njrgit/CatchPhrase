import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary  menu">
            <Link href="/dropdown" className="item ">
                Dropdown
            </Link>
            <Link href="/checkbox" className="item">
                Checkbox
            </Link>
            <Link href="/inputbox" className="item">
                Text Input
            </Link>
        </div>
    );
};

export default Header;