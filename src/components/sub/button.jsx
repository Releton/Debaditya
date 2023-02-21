import React from "react";

function Button(props) {
    return (
        <a className={props.class + " bg-gradient-to-tr from-primary to-purple-800   text-center "} href={props.href} target="_blank">{props.text}</a>

    )
}

export default Button