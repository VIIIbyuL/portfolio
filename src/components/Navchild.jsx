/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Navchild(props){
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();

        setOpen(true)
    }

    return(
        <li>
            <a href="#" onClick={handleClick}>
                {props.icon}
            </a>

            {open && props.children}

        </li>
    )
}

export default Navchild;