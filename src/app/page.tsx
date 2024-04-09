import Navbar from "@/components/homepage/navbar/navbar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-text p-[3px]">
      <Navbar />
      
      <div className="h-[96vh]">
        <div className="bg-pribg h-[96.4vh] flex-col mt-[1.3rem] rounded-[6px] flex items-center justify-center">
          <div className="flex flex-col justify-center items-center h-[90%]">
            <h2 className="text-text text-4xl flex ">Its <i className="italic font-medium ml-[6px]"> Conito</i> </h2>
            <h1 className="text-text text-5xl font-medium mb-[4px] flex items-center justify-center flex-wrap">
              Your Personalised AI Powered Coding Assistant
            </h1>
            <h3 className="text-white text-l">
              Need I say more? If yesh scroll down..
            </h3>
          </div>
        </div>
      </div>
      <div className="h-[92.8vh]  rounded-b-[6px] flex flex-col items-end ">
        <div className="h-[50px]  relative w-[25rem] mt-[-2.2rem] mr-[2rem] border-[3px] border-text flex justify-center bg-pribg rounded-[10px]">
          <h4 className="text-brstroke mt-[6px] text-xl ">Here have a look</h4>
        </div>
        <div className=" flex z-10 mt-[-9px] h-full w-full rounded-[6px]">
          <div className="basis-1/4 bg-pribg rounded-[6px]  rounded-br-[0px] h-full"></div>
          <div className="bg-pribg w-[3px] h-[6rem] self-end"></div> 
          <div className="basis-3/4 bg-pribg rounded-[6px] rounded-bl-[0px] h-full"></div>
        </div>
      </div>
      <div className="w-full h-[30vh] flex mt-[3px]">
        <div className="w-1/3 h-full py-[5vh] px-[5vh] bg-pribg rounded-[6px] rounded-tr-[0px] "> 
          <p className="text-4xl mb-1 text-text font-medium italic">Conito</p>
          <p>Beliver of Fuck Around & Find Out,  </p>
          <p>so if you wanna know more login and test it :)</p>
          <p className="text-xs text-btn">(fuck this font ruined my smily)</p>
        </div>
        <span className="h-1/5 w-[3px] self-start bg-pribg"></span>
        <div className="w-1/3 h-full bg-pribg py-[6vh] px-[5vh] flex  items-center flex-col rounded-[6px] rounded-br-[0px] rounded-tl-[0px] ">
          <p className="text-[19px] italic" >"Test out this Product and try to Contribute. Or I will call you earlier"</p>
          <p className="self-end ">--Satan</p>
        </div>
        <span className="h-1/5 w-[3px] self-end bg-pribg"></span>
        <div className="w-1/3 h-full p-[5vh] flex text-lg justify-between text-white  bg-pribg rounded-[6px] rounded-bl-[0px] "> 
          <div className="flex justify-between w-full">
            <Link href="https://github.com/harshtohai/conito">
              GitHub
            </Link> 
            <Link href="https://x.com/conito">
              X/(Twitter)
            </Link>
            <Link href="https://x.com/cognitowl">
              Developers X/(Twitter)
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
