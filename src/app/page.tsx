import ChatSection from "@/components/chatarea/chatsection";
import Sidebar from "@/components/leftsidebar/leftSideBar";


export default function Home() {
    return(
        <>
            <main className="flex h-full w-full jusify-between">
                <Sidebar/>
                <div className="w-[70%] h-full bg-pribg"></div>
                <ChatSection/>
            </main>
        </>
        // <h1>something</h1>
        
    )
}   