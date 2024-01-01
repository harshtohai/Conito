
export default function BarButton({title,state,index}:{title:string,state:string,index:string}) {
    return(

        <div className={state}>
            <div className='w-[auto] h-full flex pb-[3px]'>
                <div className="w-[42px] h-full flex items-center justify-center" >
                    <p>{index}</p>
                </div>
                <div className="w-[10rem] text-[1rem] flex items-center h-full pt-[4px]">
                    <p>{title}</p>  
                </div>
            </div>  
        </div>
    )
}