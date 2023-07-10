/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Navbar(props) {
    return(
        <nav>
            <ul>{props.children}</ul>
        </nav>
    )
}

export default Navbar;