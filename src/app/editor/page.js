'use client'

import ImageUploader from "@/component/ImageUploader";
// import Image from "next/image";
import { useState } from "react";


// Define a function to render the component based on its name
const renderComponent = (type) => {
    switch (type) {
        case "Button":
            return <button className="px-4 py-2 bg-blue-500 text-white rounded">Button</button>;
        case "Image":
            return <ImageUploader />;
        case "Text":
            return <input className="text-lg border rounded-md px-5" placeholder="Heading" />;
        case "Card":
            return (
                <div className="p-4 border rounded shadow">
                    <h3 className="font-bold">Card Title</h3>
                    <p>Card content goes here.</p>
                </div>
            );
        case "Link":
            return <input className="border px-5 py-1 rounded-md w-[80%]" placeholder="Link Here" />;
        default:
            return null;
    }
};


const page = () => {

    const [droppedElements, setDroppedElements] = useState([]);
    const [preview, setPreview] = useState(false);
    
    const handleDrop = (e) => {
        e.preventDefault();
        const component = e.dataTransfer.getData("text/plain"); // Retrieve data
    
        if (component && ["Button", "Image", "Text", "Card", "Link"].includes(component)) {
            setDroppedElements((prev) => [...prev, component]); // Store in state
        } else {
            console.error("No valid component found in dataTransfer!");
        }
    };


    const handleDragOver = (e) => {
        e.preventDefault();
    }
    return (
        <div className="p-10">
             <button onClick={()=>setPreview(!preview)} disabled={!preview} className={`px-5 py-1 ${preview!==true?"bg-green-500":"bg-gray-400"} rounded-md m-5`}>Edit</button>

<button onClick={()=>setPreview(!preview)} disabled={preview} className={`px-5 py-1 ${preview===true?"bg-green-500":"bg-gray-400"} rounded-md m-5`}>Preview</button>

         

          {!preview?(   <div className=" p-10 flex flex-col gap-5">


            <div className="flex gap-5">
                <button className="px-5 py-1 bg-blue-400">Column 1</button>
                <button className="px-5 py-1 bg-blue-400">Column 2</button>
                <button className="px-5 py-1 bg-blue-400">Column 3</button>
                <button className="px-5 py-1 bg-blue-400">Column 4</button>
                <button className="px-5 py-1 bg-blue-400">Layout 1</button>
           </div>
            <div onDrop={handleDrop} onDragOver={handleDragOver} className="border border-dotted min-h-[20vh]">   {droppedElements.map((e,i)=>{
                    return(<div key={i}>
                        {renderComponent(e)}
                    </div>)
                })}</div>

             
             </div>):(<h1>This is Preview Page, You have to make it functional</h1>)}
             <button className="px-5 py-1 bg-blue-300 rounded-md m-5">
                Publish Website
             </button>
        </div>
    )
}

export default page;