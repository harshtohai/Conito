
export default function BarButton({title,state}:{title:string,state:string}) {
    return(
        <div className={state}>
            <p>{title}</p>
        </div>
    )
}