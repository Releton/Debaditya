import React, { useState } from "react";
import Button from "./button";

function Capability(props) {
    // const [clicked, setClicked] = useState(false)
    // const [content, setContent] = useState(props.content.substring(0, 150))

    return (
        <div onClick={() => {
        }} className={" pb-10  text-text flex flex-col items-center justify-around bg-secondaryDark my-3 rounded-2xl py-5 hover:animate-jump  px-5 border-primary text-xl  border-2 min-h-[50%] transition-all hover:opacity "}>
            <p className="text-primary text-[4vmin]">{props.heading}</p>
            <p className="text-text text-[3vmin]">{props.content}</p>
            {/* <Button href={props.href} text={props.text}/> */}
            <img className="w-[80%] h-[50%] mb-5 rounded-lg border-y-[1vmin] mt-3 border-primary" src={props.src}></img>
            <a className={props.class + "block bg-gradient-to-tr hover:cursor-pointer from-primary to-purple-800 w-[50%] text-center rounded-lg p-3 "} href={props.href} target="_blank">{props.text}</a>

        </div>
    )
}

export default Capability