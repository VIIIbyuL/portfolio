// eslint-disable-next-line no-unused-vars
import React from "react";

function RenderText(props) {
    const index = props.index;
    const text = props.text;
    
    const aboutStyles = [
        "0-style",
        "1-style",
        "2-style",
        "3-style",
        "4-style"
    ];

    return(
        <p>
            {text}
        </p>
    )

}

export default RenderText;