import Navbar from "@/components/homepage/navbar/navbar";

export default function Home() {
  return (
    <main className="bg-text p-[3px]">
      <Navbar />
      
      <div className="h-[96vh]">
        <div className="bg-pribg h-[95.9vh] flex-col  rounded-[6px] flex items-center justify-center">
          <div className="flex flex-col justify-center items-center h-[90%]">
            <h2 className="text-text text-4xl flex ">I am <i className="italic font-medium ml-[6px]"> Conito</i> </h2>
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
        <div className="h-[50px]  relative w-[25rem] mt-[-2.5rem] mr-[2rem] border-[3px] border-text flex justify-center bg-pribg rounded-[10px]">
          <h4 className="text-brstroke mt-[6px] text-xl ">Here have a look</h4>
        </div>
        <div className=" flex z-10 mt-[-8px] h-full w-full rounded-[6px]">
          <div className="basis-1/4 bg-pribg rounded-[6px]  rounded-br-[0px] h-full"></div>
          <div className="bg-pribg w-[3px] h-[10rem] self-end"></div> 
          <div className="basis-3/4 bg-pribg rounded-[6px] rounded-bl-[0px] h-full"></div>
        </div>
      </div>
      <div className="h-[98vh] w-full flex   rounded-[6px]">
        <div className="basis-1/2 h-full flex flex-col mt-[3px]">
          <div className="basis-1/2 bg-pribg rounded-[4px] rounded-br-[0px]"></div>
          <div className="w-1/6 h-[3px] bg-pribg self-end"></div>
          <div className="basis-1/2 bg-pribg rounded-[4px] rounded-tr-[0px]"></div>
        </div>
        <div className="h-2/6 bg-pribg w-[3px] self-center"></div>
        <div className="basis-1/2 h-full flex flex-col mt-[3px]">
          <div className="basis-1/2 bg-pribg rounded-[4px] rounded-bl-[0px]"></div>
          <div className="w-1/6 h-[3px] bg-pribg "></div>
          <div className="basis-1/2 bg-pribg rounded-[4px] rounded-tl-[0px]"></div>
        </div>
      </div>
    </main>
  );
}
