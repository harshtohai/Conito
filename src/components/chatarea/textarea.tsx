'use client'

import {sendButton} from "@/components/logos/logo"

export default function Textarea(){
    return(
        <div className="w-full h-[23%] flex justify-center relative border-[2px] border-transparent border-t-line bg-secbg ">
            <textarea name="textplace" id="textplace" placeholder="Ask..." className="outline-none resize-none h-[100%] w-[100%]  px-[15px] py-3 pr-[3rem] text bg-secbg"></textarea>
            <button className="absolute bottom-[65%] left-[91%]">
            {sendButton}
           </button>
        </div>
    )
}
