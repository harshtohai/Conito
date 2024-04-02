interface LoginFields  {
    type?: string 
    id: string 
}

export default function InputField({type,id}:LoginFields){
    return(
        <div id={id+'div'} className="rounded-[4px] w-[10rem] h-[2rem] m-[0.5rem]">
            <input type={type} id={id} className="w-full h-full text-text p-[10px]" placeholder={"Enter " + type} />
        </div>
    )
}