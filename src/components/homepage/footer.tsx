import Link from "next/link"

export default function Footer() {
 return(

      <div className="w-full h-[30vh] flex"> 
        <div className="w-1/3 h-full py-[5vh] flex flex-col justify-center  px-[5vh] bg-pribg rounded-[6px] rounded-tr-[0px] ">
          <p className="text-4xl mb-1 text-text font-medium italic">Conito</p>
          <p>Beliver of Fuck Around & Find Out, </p>
          <p>so if you wanna know more login and test it :)</p>
          <p className="text-xs text-btn">(fuck this font ruined my smily)</p>
        </div>
        <span className="h-1/5 w-[3px] self-start bg-pribg"></span>
        <div className="w-1/3 h-full bg-pribg py-[6vh] px-[5vh] flex justify-center items-center flex-col rounded-[6px] rounded-br-[0px] rounded-tl-[0px] ">
          <p className="text-[19px] italic">
            &quot;Test out this Product and try to Contribute. Or I will call you
            earlier&quot;
          </p>
          <p className="self-end ">--Satan</p>
        </div>
        <span className="h-1/5 w-[3px] self-end bg-pribg"></span>
        <div className="w-1/3 h-full p-[5.8vh] flex text-lg justify-between text-white  bg-pribg rounded-[6px] rounded-bl-[0px] ">
          <div className="flex flex-wrap flex-col justify-center *:my-[3px] *:cursor-pointer *:transition-all w-full">
            <Link
              className=" hover:text-text"
              href="https://github.com/harshtohai/conito"
            >
              GitHub
            </Link>
            <Link className=" hover:text-text" href="https://x.com/conito">
              X/(Twitter)
            </Link>
            <Link className=" hover:text-text" href="https://x.com/cognitowl">
              Developer&apos;s X/(Twitter)
            </Link>
          </div>
        </div>
      </div>
 ) 
}
