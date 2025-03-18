'use client'

import HeroSectionState from "@/Zustand/EditorState";


const PreviewCard = () => {
   const {stateData} = HeroSectionState();
    return (
        <div>
            {stateData.id ===undefined?(<h1>
               NO HeroSection available
            </h1>):(<div className="flex flex-col gap-3 w-[20vw]">
                <h1 className="text-2xl font-bold">{stateData.title}</h1>
                <h3>{stateData.name}</h3>
                <p className="">{stateData.paragraph}</p>
            </div>)}
        </div>
    )
}

export default PreviewCard;