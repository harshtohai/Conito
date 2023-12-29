'use client'


export default function AddButton({title,image}:{title:string,image:string}) {

    return(
        <div>
            <button>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <p>{title}</p>
                </div>
            </button>
        </div>
    )


}