

export default function SubmitButton({buttonType}:{buttonType:string}){
    return(
        <div className="h-[2.7rem] w-[10rem] rounded-[13px] flex items-center justify-center">
            <button className="h-full w-full bg-text text-btn flex items-center justify-center"> 
                {buttonType}
            </button>
        </div>
    )
}