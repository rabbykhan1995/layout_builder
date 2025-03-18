'use client'

import HeroSectionState from "@/Zustand/EditorState";



const page = () => {
  const {stateData} = HeroSectionState();
    return (
        <div className="p-10">
          <div className="flex gap-5">
          <button className="px-5 py-1 bg-green-300 rounded-md">Preview</button>
          <button className="px-5 py-1 bg-green-300 rounded-md">Json</button>
          <pre>{JSON.stringify(stateData, null, 2)}</pre>
          </div>
        </div>
    )
}

export default page;