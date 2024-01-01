export default function Message({message, image, user}:{message:string, image:string, user:string}) {
    return(
        <div className='flex mb-[18px]'>
            <div className="bg-black rounded-[8px] h-11 w-11 flex items-center">
                <img src={image} alt="../favicon.ico" className="h-11 w-11" />
            </div>
            <div className="w-[90%] ml-2">
                <h3 className="text !text-neutral-50 text-base -mt-[1px]">{user}</h3>
                <p className="w-auto text !text-[0.95rem] leading-[1.25rem] mt-[2px]">{message}</p>
            </div>
        </div>
    )
}