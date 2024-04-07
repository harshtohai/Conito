import TextAreaBigOneLikeYourMom from "@/components/theTextArea";
import ChatSection from "@/components/chatarea/chatsection";
import Sidebar from "@/components/leftsidebar/leftSideBar";


export default function Home() {
    return(
        <>
            <main className="flex h-full w-full jusify-between">
                <Sidebar/>
                <TextAreaBigOneLikeYourMom/>
                <ChatSection/>
            </main>
        </>
        // <h1>something</h1>                               
        
    )
}   
