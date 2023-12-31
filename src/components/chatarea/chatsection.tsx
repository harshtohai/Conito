import ChatDisplay from "./chatdisplay"


export default function ChatSection(){
    return(
        <div className='w-[30%] bg-secbg h-10rem flex flex-col py-[10px] px-[15px] border-2 border-transparent border-l-line relative'>
            <ChatDisplay/>
        </div>
    )
}