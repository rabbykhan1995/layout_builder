'use client'

import PreviewCard from "@/component/PreviewCard";
import HeroSectionState from "@/Zustand/EditorState";
import { useState } from "react";



const page = () => {
  const {stateData} = HeroSectionState();
  const [preview, setPreview]= useState(false);
    return (
        <div className="flex flex-col gap-5 p-10">
          
       <div className="flex gap-5">   <button onClick={()=> setPreview(!preview)} className="px-5 py-1 bg-green-300 rounded-md">Preview</button>
       <button onClick={()=> setPreview(!preview)} className="px-5 py-1 bg-green-300 rounded-md">Json</button></div>


          {preview?<PreviewCard />:
          <pre className="whitespace-pre-wrap break-words p-10 border rounded-lg">{JSON.stringify(stateData, null, 2)}</pre>}
        
        </div>
    )
}

export default page;