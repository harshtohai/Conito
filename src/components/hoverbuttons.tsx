'use client'


export function HoverButton({text}:{text:string}){
    return(
        <button className="px-4 py-1.5 rounded-[5px] bg-secbg">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <p>{text}</p>
            </div>
        </button>
    )
}