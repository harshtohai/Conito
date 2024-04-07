import Navbar from "@/components/homepage/navbar/navbar";

export default function Home() {
  return (
    <main className="bg-text p-[3px]">
      <Navbar />
      <div className="h-[96vh]">
        <div className="bg-secbg h-[95.9vh] flex-col mt-[1.5rem] rounded-[6px] flex items-center justify-center">
          <div className="flex flex-col justify-center items-center h-[90%]">
            <h2 className="text-text text-4xl flex ">I am <i className="italic font-medium ml-[6px]"> Conito</i> </h2>
            <h1 className="text-text text-5xl font-medium mb-[4px]">
              Your Personalised AI Powered Coding Assistant
            </h1>
            <h3 className="text-brstroke text-l">
              Need I say more? If yesh scroll down..
            </h3>
          </div>
        </div>
      </div>
      <div className="h-[92.8vh]  rounded-b-[6px] flex flex-col items-end ">
        <div className="h-[50px]  relative w-[25rem] mt-[-2.5rem] mr-[2rem] border-[3px] border-text flex justify-center bg-secbg rounded-[10px]">
          <h4 className="text-brstroke mt-[6px] text-xl">Here have a look</h4>
        </div>
        <div className="bg-secbg z-10 mt-[-8px] h-full w-full rounded-[6px]">
          s
        </div>
      </div>
    </main>
  );
}
