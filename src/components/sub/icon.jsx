import React from "react";

export default function Icon(props){
    return(
        <a href={props.href} target="_blank" className="w-5 animate-bounce"><i  className={props.src + " " + props.size+" transition-all hover:text-text hover:cursor-pointer"} /></a>
    )
}