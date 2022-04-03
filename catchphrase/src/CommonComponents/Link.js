import React from "react";

const Link = ({ href, className, children }) => {

    const onClick = (event) => {

        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({},'',href);

        //dispatches event and tells react that url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    );
};

export default Link;