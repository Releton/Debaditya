import React, { useState } from "react";
import Icon from "./sub/icon";
import { SocialIcons, listItems } from "../data/icon";
import NavElement from "./sub/NavElement";
import { v4 as uuid } from 'uuid'

export function getSocialIcons(size){
    return(
        SocialIcons.map((icon)=>{
            return <Icon src={icon.src} key={uuid()} href={icon.href} size={size}  />
       })
    )
}

function getList(){
    return(
    listItems.map((item) =>{
        return <NavElement href={item.href} name={item.name} key={uuid()} />
    }))
}



export default function Navbar(props){
    const [heading, setHeading] = useState("D")
    function over(b){
        if(b){
            setHeading("DEBADITYA")
        }else{
            setHeading("D")
        }
    }

    return(
        <div className="flex w-screen   border-primary border-b-2 py-1 px-4 box-border text-primary text-center items-center">
            <h1 className="text-[5vmin] border-x-2 p-3 border-primary shrink text-left box-border transition-all text-text hover:text-primary hover:cursor-pointer " onMouseOver={() => over(true)} onMouseOut={()=> over(false)}> <a href="/">{heading}</a> </h1>
            <ul className="flex grow justify-evenly text-[4vmin] border-r-2 p-3 border-primary text-center box-border"> 
                {getList()}
             </ul>

            <div className="px-10 text-lg border-x-2 p-3  border-primary w-[20%] text-center box-border hidden xl:flex justify-around  ">
               {getSocialIcons("fa-xl") }
            </div>
            
        </div>
    )
}