import BarButton from "./sideBarButtons"
import AddButton from "./addButton"
import * as React from "react"

export default function Sidebar() {
    return(
        <>
            <main className="w-[6%] h-full flex bg-secbg items-center flex-col border-2 border-transparent border-r-line p-3" >
                <div className="w-[100%] h-[70%] flex items-center flex-col ">
                    <BarButton title='something to check overflow' state='clicked' index="1"/>
                    <BarButton title='something to check overflow' state='notclicked' index="1"/>
                    {/* <AddButton title= 'newthread' image="./favicon.ico" />   */}
                </div>
                <div>
                    {/* <AddButton title= 'newthread' image="./favicon.ico" />
                    <AddButton title= 'newthread' image="./favicon.ico" />
                    <AddButton title= 'newthread' image="./favicon.ico" /> */}
                </div>
            </main>
        </>
    )
}