import BarButton from "./sideBarButtons"
import AddButton from "./addButton"
import * as React from "react"
import {plus,setting} from "@/components/logos/logo"

export default function Sidebar() {
   return(
        <>
            <main className="w-[4rem] h-full flex bg-secbg items-center flex-col border-2 absolute border-transparent border-r-line hover:w-[15rem] transition-all hover:shadow-[1px_0px_15px_0px_rgba(0,0,0,0.20)]" >
                <div className="w-[100%] h-[90%] last:text-black px-[9px] overflow-hidden">
                    <BarButton title='Something ' state='clicked text-[1.5rem] cursor-pointer' index="1"/>
                    <BarButton title='Something' state='notclicked text-[1.5rem] cursor-pointer' index="2"/>
                    <AddButton title= 'New Thread' image={plus}/>
                </div>
                
                <div className="h-[10%] w-[100%] px-[9px] overflow-hidden">
                    <AddButton title= 'Settings' image={setting}/>
                </div>
            </main>
        </>
    )
}
