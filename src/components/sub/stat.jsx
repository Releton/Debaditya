import React, { useState } from "react";

export default function Stat(props) {

    return (
        <div className="flex items-center justify-evenly " >
            <i className={props.src + " fa-2xl"} />
            <div className="w-[80%] h-7 border-text relative border-b-4 rounded-lg">
                <div className={`${props.class} flex justify-center items-center rounded-lg bg-gradient-to-l from-primary to-purple-500 h-6`+props.style}>
                    <p className=" text-text ">{(props.class.replace("w-[", "").replace("]", ""))}</p>
                </div>
            </div>
        </div>
    )
}