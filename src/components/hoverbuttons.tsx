'use client'

import { ReactNode,MouseEvent } from "react"


export function HoverButton({img}:{img:ReactNode}){
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Submit button clicked!');
    };
    return(
        <button className="px-2 py-1.5 rounded-[5px] clicked" onClick={handleClick} >
            <div>
               {img} 
            </div>
        </button>
    )
}
