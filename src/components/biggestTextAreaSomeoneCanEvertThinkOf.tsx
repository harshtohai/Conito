'use client'

import { HoverButton } from "./hoverbuttons"
import { useEffect, useState } from "react"

export default function TextAreaBigOneLikeYourMom(){
    const [lineCounts, setLineCounts] = useState()
    const copy = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 20 20" fill="none">
    <path d="M5 9.16669C5 6.81002 5 5.63085 5.7325 4.89919C6.46417 4.16669 7.64333 4.16669 10 4.16669H12.5C14.8567 4.16669 16.0358 4.16669 16.7675 4.89919C17.5 5.63085 17.5 6.81002 17.5 9.16669V13.3334C17.5 15.69 17.5 16.8692 16.7675 17.6009C16.0358 18.3334 14.8567 18.3334 12.5 18.3334H10C7.64333 18.3334 6.46417 18.3334 5.7325 17.6009C5 16.8692 5 15.69 5 13.3334V9.16669Z" stroke="#a06be3" stroke-width="1.25"/>
    <path d="M5 15.8334C4.33696 15.8334 3.70107 15.57 3.23223 15.1011C2.76339 14.6323 2.5 13.9964 2.5 13.3334V8.33335C2.5 5.19085 2.5 3.61919 3.47667 2.64335C4.4525 1.66669 6.02417 1.66669 9.16667 1.66669H12.5C13.163 1.66669 13.7989 1.93008 14.2678 2.39892C14.7366 2.86776 15 3.50365 15 4.16669" stroke="#a06be3" stroke-width="1.25"/>
  </svg>
    const download = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
    <path d="M5.83333 8.81417L2.885 5.865L3.47417 5.26583L5.41667 7.20833V0H6.25V7.20833L8.19167 5.26667L8.78167 5.865L5.83333 8.81417ZM1.34583 11.6667C0.9625 11.6667 0.6425 11.5383 0.385833 11.2817C0.128611 11.0244 0 10.7042 0 10.3208V8.30167H0.833333V10.3208C0.833333 10.4486 0.886667 10.5661 0.993333 10.6733C1.10056 10.78 1.21806 10.8333 1.34583 10.8333H10.3208C10.4486 10.8333 10.5661 10.78 10.6733 10.6733C10.78 10.5661 10.8333 10.4486 10.8333 10.3208V8.30167H11.6667V10.3208C11.6667 10.7042 11.5383 11.0242 11.2817 11.2808C11.0244 11.5381 10.7042 11.6667 10.3208 11.6667H1.34583Z" fill="#a06be3"/>
  </svg>
    (document.getElementById('TheTextArea') as HTMLTextAreaElement);
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
