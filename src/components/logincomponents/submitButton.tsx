

export default function SubmitButton({buttonType}:{buttonType:string}){
    return(
        <div className="h-[3rem] w-[15rem] rounded-[5px] font-medium flex items-center justify-center my-[0.3rem]">
            <button className="h-full w-full bg-text text-white rounded-[5px] flex items-center justify-center w-full h-full bg-btn text-brstroke p-[15px"> 
                {buttonType}
            </button>
            
        </div>
    )
}