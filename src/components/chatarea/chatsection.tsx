import ChatDisplay from "./chatdisplay"


export default function ChatSection(){
    return(
        <div className='w-[30%] bg-secbg flex flex-col items-center border-[2px] border-transparent border-l-line '>
            <ChatDisplay/>
        </div>
    )
}

