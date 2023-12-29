
export default function BarButton({title,state,index}:{title:string,state:string,index:string}) {
    return(

        <div className="btn py-1">
            <div className={state}>
                <p className="px-[18.5px] ">{index}</p>
                <p className="">{title}</p>
            </div>  
        </div>
    )
}