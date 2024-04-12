'use client'

import { useState } from "react"


function Accordian({feature,description,stateid,id,stateFunc}:{feature:string, description:string, stateid:string, id:string, stateFunc:any}) {
 return(
  <div className="">
    <div className="flex transition-all items-center cursor-pointer hover:text-text z-10 " onClick={()=>{stateid == id ? stateFunc('0') : stateFunc(id)}}>
      <li className="">{feature}</li>
      <p className={`font-mono text-text font-bold transition-all rotate-[${stateid != id ? "90deg" : "270deg" }] text-xl ml-2`}>&gt;</p>
    </div>
      <p className={`text-wrap text-[13px]  transition-all w-[14rem] ${stateid == id ? 'opacity-100' : 'opacity-0'} ${stateid == id ? '' : "hidden"}`  }>{description}</p>
  </div>

 ) 
}

export default function FeaturesBar(){
  const [stateid,changeStateId] = useState('0')
  return(
    <div className="basis-1/4 bg-pribg rounded-[6px] text-white flex justify-center p-[2rem]   rounded-br-[0px] h-full">
      <div className="*:transition-all flex flex-col *:cursor-default">
        <h1 className="text-text font-medium self-center text-xl mb-4 !cursor-default">
          {"What We Give You " + ":aww:"}
        </h1>
        <div className="flex">
          <ul className="list-inside *:transition-all">
           <Accordian feature="In-Built Editor" description="Information regarding In-Built Editor and advantages" id="1" stateid={stateid} stateFunc={changeStateId}/>
           <Accordian feature="In-Built Editor" description="Information regarding In-Built Editor and advantages" id="2" stateid={stateid} stateFunc={changeStateId}/>
          </ul>
        </div>
      </div>
    </div>
  )
}
