import BarButton from "./sideBarButtons"
import AddButton from "./addButton"
import * as React from "react"

export default function sidebar() {
    return(
        <main>
            <div>
                <BarButton title='something' state='clicked' />
                <AddButton title= 'newthread' image="./favicon.ico" />
            </div>
            <div>
                <AddButton title= 'newthread' image="./favicon.ico" />
                <AddButton title= 'newthread' image="./favicon.ico" />
                <AddButton title= 'newthread' image="./favicon.ico" />
            </div>
        </main>
    )
}