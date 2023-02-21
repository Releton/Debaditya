import React, { useState } from "react";
import Stat from "./sub/stat";
import { v4 as uuid} from "uuid"

export default function Stats(props){
    function getStats(){
        return(

            props.items.map((stat)=>{
                return <Stat class={stat.class} key={uuid()} style={style} src={stat.src} />
            })
        )
    }
    const [style, setStyle] = useState("");

    return(
        <div onMouseOver={() => setStyle(" animate-progress ")} onMouseOut={() => setStyle("")} className={"text-primary hover:animate-jump  bg-secondaryDark my-3 flex justify-between flex-col gap-5 rounded-2xl py-5  flex-grow px-5 border-primary text-xl  border-2  transition-all hover:opacity-80 "+props.span}>
            {getStats()}
            
        </div>
    )   
}
