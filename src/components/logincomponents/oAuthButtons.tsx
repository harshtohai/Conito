import { ReactElement, ReactSVGElement } from "react";

export default function OAuthButton({logo}:{logo:ReactElement<SVGElement>}){
    return(
        <div className="h-[3rem] w-[3rem] bg-btn border-[1px] cursor-pointer border-text flex justify-center rounded-[6px] items-center">
            {logo}
        </div>
    )
}