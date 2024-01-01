'use client'

import { HoverButton } from "./hoverbuttons"


export default function TextAreaBigOneLikeYourMom(){
    return(
        <div className="w-[70%] pl-[4rem] h-full bg-pribg">
            <div className="absolute flex w-[14rem] items-center justify-evenly h-[3.3rem] left-[53.8%]">
                <HoverButton text='Copy'/>
                <HoverButton text='Download'/>
            </div>
            <textarea name="" id=""></textarea>
        </div>
    )
}