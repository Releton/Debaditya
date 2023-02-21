import React from 'react'
import { useState } from 'react'

export default function ShowCase(props) {
    const [hide, setHide] = useState("hidden")


    return (

        <div className='relative' onMouseOver={() => {
            setHide("")
        }} onMouseOut={() => setHide("hidden")}>
            <img src={props.img}  className="w-full  h-full rounded-lg border-y-4 border-primary fade"></img>
            <a href={props.href} target="_blank"><i  class="absolute top-10 right-5 fa-2x text-slate-600 hover:cursor-pointer hover:text-primary transition-all animate-bounce fa-solid fa-link"></i></a>
            <p className='absolute bottom-8 text-text mx-5  sm:text-[3vmin] w-10%'>{props.title} </p>
            <div className={'absolute w-[100%] mt-3 z-10  bg-secondaryDark text-center rounded-t-2xl rounded-b-lg min-h-[10vh] ' + hide}>
                <p className='text-primary  mb-3 sm:text-[2vmin]'>{props.heading}</p>
                <p className='text-text text-left  sm:text-[2vmin] mb-3 p-3'>{props.description}</p>
                <a className={"text-text mx-auto mb-3 block bg-gradient-to-tr hover:cursor-pointer from-primary to-purple-800 w-[50%] text-center rounded-lg p-3 "} href={props.href} target="_blank">{props.btntext}</a>
            </div>
        </div>

    )

}
