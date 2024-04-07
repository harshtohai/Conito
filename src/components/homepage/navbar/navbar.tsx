import Navbutton from "./navbuttons";

export default function Navbar() {
  return(
  <div className="z-20 absolute mt-[4px] h-[50px] flex ">
    <nav className=" border-[3px] border-text bg-btn ml-[2rem] rounded-[9px] w-[25rem]  px-[10px] py-[8px] text-line text-sm flex justify-between items-center ">   
      <div className="flex text-white">
        <p className="">Home</p>
        <div className="h-2xl w-[2px] bg-zinc-600 mx-[10px] "></div>
        <p>GitHub</p>
      </div>
      < Navbutton url="/login" buttonText="Login" />
    </nav> 
  </div>
  )
}
