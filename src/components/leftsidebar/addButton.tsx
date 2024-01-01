'use client'

import { ReactNode } from "react"


export default function AddButton({title,image}:{title:string, image:ReactNode}) {

    return(
        <div className='notclicked !bg-btnwhite cursor-pointer'>
            <div className='w-[auto] h-full flex pb-[3px]'>
                <div className="w-[42px] h-full flex items-center justify-center mt-[2px] " >
                    {image}
                </div>
                <div className="w-[10rem] text-[1rem] flex items-center h-full pt-[4px]">
                    <p>{title}</p>  
                </div>
            </div>  
        </div>
    )


}