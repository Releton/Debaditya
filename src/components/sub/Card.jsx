import React from "react";
import { getSocialIcons } from "../navbar";

export default function Card(props) {
    return (
        <div className="bg-secondaryDark my-3 rounded-2xl py-5 hover:animate-jump  px-5 border-primary text-xl  border-2  transition-all hover:opacity-80 ">
            <div className="relative flex items-center flex-col">
                <img src={props.src} className={`w-32 rounded-[100px] z-[3] relative`} />
                <div className="absolute w-32 blur rounded-[100px] h-32 top-0 bg-primary z-[2]"></div>
                <p className="text-primary text-4xl mt-8">{props.name}</p>
            </div>
            <div className="mt-7 text-text flex flex-col items-center">

                <p><span>AGE: </span><span>{props.age}</span></p>
                <p><span>ROLE: </span><span>{props.role}</span></p>
                <p><span>INSTITUTE: </span><span>{props.institute}</span></p>
            </div>
            <div className="flex justify-evenly px-18 mt-3 text-primary">
                {getSocialIcons("fa-sm")}

            </div>

        </div>
    )
}