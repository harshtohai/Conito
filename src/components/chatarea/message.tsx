export default function Message({message, image, user}:{message:string, image:string, user:string}) {
    return(
        <div className={user}>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{user}</h3>
                <p>{message}</p>
            </div>
        </div>
    )
}