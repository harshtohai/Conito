export default function Features() {
 return(

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
 ) 
}
