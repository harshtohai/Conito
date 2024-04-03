interface LoginFields  {
    type?: string 
    id: string 
}

export default function InputField({type,id}:LoginFields){
    return(
        <div id={id+'div'} className="rounded-[4px] w-[15rem] h-[3rem] m-[0.5rem]">
            <input type={type} id={id} className="w-full h-full bg-btn text-brstroke p-[15px]  outline-none focus:ring-1 focus:ring-text focus:border-1 focus:border-text text-sm rounded-[6px] " placeholder={"Enter " + type} />
        </div>
    )
}   