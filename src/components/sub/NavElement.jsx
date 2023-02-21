import React from "react";

export default function NavElement(props){
    return (
        <li ><a className=" hover:animate-jump-less inline-block hover:cursor-pointer  transition-colors" href={props.href}>{props.name}</a></li>
    )
}