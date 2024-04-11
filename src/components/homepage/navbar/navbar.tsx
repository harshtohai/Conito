import Navbutton from "./navbuttons";
import Link from "next/link";
export default function Navbar(){
  return(
  <div className="z-20 absolute  h-[50px] flex ">
    <nav className=" border-[3px] border-text bg-pribg ml-[2rem] rounded-[9px] w-[25rem]  px-[10px] py-[8px] text-line text-sm flex justify-between items-center ">   
      <div className="flex text-white"> 
        <Link href="#" className="italic font-medium">Conito</Link>
        <div className="h-2xl w-[2px] bg-zinc-700 mx-[10px] "></div>
        <Link href="https://github.com/harshtohai/conito" className="font-medium">GitHub</Link>
      </div>
      < Navbutton url="/login" buttonText="Login" />
    </nav> 
  </div>
  )
}
