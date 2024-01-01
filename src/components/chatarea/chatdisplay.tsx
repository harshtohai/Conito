import Message from "./message";
import Textarea from "./textarea";

export default function ChatDisplay() {
    return(
        <>
            <div className="w-full h-[81%] px-[15px] pt-[15px] mb-[-4%] overflow-scroll ">
                <Message message="some chat message sent something very very big which flows off and wraps around we would like something like that just gimme that u." image="../favicon.ico" user="You"/>
                <Message message="some chat message sent something very very big which flows off and wraps around we would like something like that just gimme that u." image="../favicon.ico" user="Bot"/>
                <Message message="some chat message sent something very very big which flows off and wraps around we would like something like that just gimme that u." image="../favicon.ico" user="You"/>
                <Message message="some chat message sent something very very big which flows off and wraps around we would like something like that just gimme that u." image="../favicon.ico" user="Bot"/>
                <Message message="some chat message sent something very very big which flows off and wraps around we would like something like that just gimme that u." image="../favicon.ico" user="You"/>
                <Message message="some chat message sent something very very big which flows off and wraps around we would like something like that just gimme that u." image="../favicon.ico" user="Bot"/>
            </div>
            <Textarea/>
        </>
    )
}