'use client'

import { HoverButton } from "./hoverbuttons"
import { useEffect, useState } from "react"
import {copy, download} from "@/components/logos/logo"
export default function TextAreaBigOneLikeYourMom(){
    const [lineCounts, setLineCounts] = useState()
      return(
        <div className="w-[70%] pl-[4rem] h-full bg-pribg">
            <div className="absolute flex w-[4rem] items-center justify-between h-[3.3rem] left-[62.8%]">
                <HoverButton img={copy}/>
                <HoverButton img={download}/>
            </div>
            <textarea name="" id="TheTextArea" className="w-full p-[10px] h-[99%] outline-none text bg-pribg resize-none TextArea" ></textarea>
        </div>
    )
}
